import type { FileMetadata } from "../types/api";
import {
  ROW_MAX_HEIGHT,
  ROW_MAX_WIDTH,
  ROW_MIN_HEIGHT,
  updateConstants,
} from "../const/const";

export function bestHeight(files: FileMetadata[]) {
  let width = 0;
  for (const file of files) {
    width += contributingWidth(file.dimensions);
  }

  return clamp(
    (ROW_MAX_HEIGHT * ROW_MAX_WIDTH) / width,
    ROW_MIN_HEIGHT,
    ROW_MAX_HEIGHT
  );
}

export async function computeRows(files: Promise<FileMetadata[]>) {
  type RowData = {
    files: FileMetadata[];
    width: number;
  };

  updateConstants();

  const rows: FileMetadata[][] = [];

  let row: RowData = {
    files: [],
    width: 0,
  };

  const fileMetadatas = await files;
  fileMetadatas.sort((a, b) =>
    a.time < b.time ? -1 : a.time > b.time ? 1 : 0
  );

  for (const metadata of fileMetadatas) {
    const cw = contributingWidth(metadata.dimensions);

    if (shouldPush(cw, row.width)) {
      row.width += cw;
      row.files.push(metadata);
    } else {
      rows.push(row.files);
      row = {
        files: [metadata],
        width: cw,
      };
    }
  }

  rows.push(row.files);

  return rows;
}

function shouldPush(contributingWidth: number, currentRowWidth: number) {
  return ROW_MAX_WIDTH > currentRowWidth + contributingWidth;
}

function contributingWidth({ width, height }: FileMetadata["dimensions"]) {
  return (width * ROW_MAX_HEIGHT) / height;
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}
