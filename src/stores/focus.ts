import type { FileMetadata } from "../types/api";

type FocusData = {
  file: FileMetadata;
  rect: ClientRect;
};

class Focus {
  data: FocusData | undefined;

  subscribers: Set<(data: FocusData) => void>;

  constructor() {
    this.subscribers = new Set();
  }

  focus(file: FileMetadata, rect: ClientRect) {
    this.data = { file, rect };
    this.publish();
  }

  clear() {
    this.data = undefined;
    this.publish();
  }

  subscribe(sub: (data: FocusData) => void): () => void {
    sub(this.data);
    this.subscribers.add(sub);

    return () => {
      this.subscribers.delete(sub);
    };
  }

  publish() {
    for (const sub of this.subscribers) {
      sub(this.data);
    }
  }
}

export const focus = new Focus();
