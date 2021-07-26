interface CursorData {
  x: number;
  y: number;
  width: number;
  height: number;
}

class Cursor {
  subscribers: Set<(value: CursorData) => void>;
  data: CursorData;

  constructor() {
    this.data = { x: 0, y: 0, width: 0, height: 0 };
    this.subscribers = new Set();
  }

  clear() {
    this.data = { x: 0, y: 0, width: 0, height: 0 };
    this.publish();
  }

  subscribe(sub: (value: CursorData) => void): () => void {
    sub(this.data);
    this.subscribers.add(sub);

    return () => {
      this.subscribers.delete(sub);
    };
  }

  set(data: CursorData) {
    this.data = data;
    this.publish()
  }

  private publish() {
    for (const sub of this.subscribers) {
      sub(this.data);
    }
  }

  private _hover(el: HTMLElement, padding: number) {
    const halfpad = padding / 2;
    const rect = el.getBoundingClientRect();
    this.set({
      x: rect.x + window.scrollX - halfpad,
      y: rect.y + window.scrollY - halfpad,
      width: rect.width + padding,
      height: rect.height + padding,
    });
  }

  hover(el: HTMLElement, padding: number) {
    this._hover(el, padding);
  }
}

export const cursor = new Cursor();
