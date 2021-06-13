import type { FileMetadata } from "../types/api";
import { ROW_MAX_HEIGHT, ROW_MAX_WIDTH, updateConstants } from "../const/const";

export function bestHeight(files: FileMetadata[]) {
  let width = 0;
  for (const file of files) {
    width += contributingWidth(file.dimensions);
  }

  return Math.min((ROW_MAX_HEIGHT * ROW_MAX_WIDTH) / width, ROW_MAX_HEIGHT);
}

export async function computeRows(el: HTMLDivElement, files: Promise<FileMetadata[]>) {
  type RowData = {
    files: FileMetadata[];
    width: number;
  };

  if (!el) {
    return []
  }

  updateConstants(el);

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

    row.width += cw;
    row.files.push(metadata);

    if (ROW_MAX_WIDTH < row.width) {
      rows.push(row.files);
      row = {
        files: [],
        width: 0,
      };
    }
  }

  if (row.files) {
    rows.push(row.files);
  }

  return rows;
}


function contributingWidth({ width, height }: FileMetadata["dimensions"]) {
  return (width * ROW_MAX_HEIGHT) / height;
}
