import type { FileMetadata } from "../types/api";
import { ROW_MAX_HEIGHT } from "../const/const";

export function computeRows(maxWidth: number, files: FileMetadata[]) {
  type RowData = {
    files: FileMetadata[];
    width: number;
    height: number;
  };

  const rows: RowData[] = [];

  let row: RowData = {
    files: [],
    width: 0,
    height: 0,
  };

  files.sort((a, b) => (a.time < b.time ? -1 : a.time > b.time ? 1 : 0));

  for (const metadata of files) {
    const cw = contributingWidth(metadata.dimensions);

    row.width += cw;
    row.files.push(metadata);

    if (maxWidth < row.width) {
      rows.push({
        files: row.files,
        width: Math.min(maxWidth, row.width),
        height: Math.min(
          (ROW_MAX_HEIGHT * maxWidth) / row.width,
          ROW_MAX_HEIGHT
        ),
      });

      row = {
        files: [],
        width: 0,
        height: 0,
      };
    }
  }

  if (row.files.length > 0) {
    rows.push({
      files: row.files,
      width: Math.min(maxWidth, row.width),
      height: Math.min(
        (ROW_MAX_HEIGHT * maxWidth) / row.width,
        ROW_MAX_HEIGHT
      ),
    });
  }

  return rows;
}

function contributingWidth({ width, height }: FileMetadata["dimensions"]) {
  return (width * ROW_MAX_HEIGHT) / height;
}
