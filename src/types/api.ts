export type FileKind = "IMAGE" | "VIDEO";

export type FileMetadata = {
  id: string;
  kind: FileKind;
  live: string;
  time: string;

  dimensions: {
    width: number;
    height: number;
  };

  endpoints: {
    data: string;
    thumb: string;
  };
};

export type Album = {
  id: string;
  name: string;
};
