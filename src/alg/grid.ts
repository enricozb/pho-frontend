import type { FileMetadata } from "../types/api";
import { ROW_MAX_HEIGHT, ROW_MAX_WIDTH, updateConstants } from "../const/const";

export function rowDims(files: FileMetadata[]) {
  let width = 0;
  for (const file of files) {
    width += contributingWidth(file.dimensions);
  }

  return {
    width: Math.min(ROW_MAX_WIDTH, width),
    height: Math.min((ROW_MAX_HEIGHT * ROW_MAX_WIDTH) / width, ROW_MAX_HEIGHT),
  };
}

export function computeRows(container: HTMLDivElement, files: FileMetadata[]) {
  type RowData = {
    files: FileMetadata[];
    width: number;
  };

  updateConstants(container);

  const rows: RowData[] = [];

  let row: RowData = {
    files: [],
    width: 0,
  };

  files.sort((a, b) => (a.time < b.time ? -1 : a.time > b.time ? 1 : 0));

  for (const metadata of files) {
    const cw = contributingWidth(metadata.dimensions);

    row.width += cw;
    row.files.push(metadata);

    if (ROW_MAX_WIDTH < row.width) {
      rows.push({ files: row.files, width: ROW_MAX_WIDTH });
      row = {
        files: [],
        width: 0,
      };
    }
  }

  if (row.files.length > 0) {
    rows.push({ files: row.files, width: Math.min(ROW_MAX_WIDTH, row.width) });
  }

  return rows;
}

function contributingWidth({ width, height }: FileMetadata["dimensions"]) {
  return (width * ROW_MAX_HEIGHT) / height;
}
