import type { FileMetadata } from "../types/api";
import { ROW_MAX_HEIGHT } from "../const/const";

type RowData = {
  files: FileMetadata[];
  width: number;
  height: number;
};

export function computeLayout(maxWidth: number, files: FileMetadata[]) {
  // sort files by string-formatted timestamp, ex. "2018:06:19 12:57:30"
  files.sort((a, b) => (a.time < b.time ? -1 : a.time > b.time ? 1 : 0));

  const rows: RowData[] = [];
  let row: RowData = { files: [], width: 0, height: 0 };

  let flushRow = () => {
    rows.push({
      files: row.files,
      width: Math.min(maxWidth, row.width),
      height: Math.min((ROW_MAX_HEIGHT * maxWidth) / row.width, ROW_MAX_HEIGHT),
    });
    row = { files: [], width: 0, height: 0 };
  };

  for (const f of files) {
    const cw = (f.dimensions.width * ROW_MAX_HEIGHT) / f.dimensions.height;

    row.width += cw;
    row.files.push(f);

    if (row.width > maxWidth) {
      flushRow();
    }
  }

  if (row.files.length > 0) {
    flushRow();
  }

  return rows;
}
