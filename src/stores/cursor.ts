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
    this.data = {x: 0, y: 0, width: 0, height: 0};
    this.subscribers = new Set();
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

    for (const sub of this.subscribers) {
      sub(this.data);
    }
  }

  set_div(div: HTMLDivElement, padding: number) {
    const halfpad = padding / 2;

    this.set({
      x: div.offsetLeft - halfpad,
      y: div.offsetTop - halfpad,
      width: div.offsetWidth + padding,
      height: div.offsetHeight + padding,
    });

    setTimeout(() => {
      const rect = div.getBoundingClientRect();
      this.set({
        x: rect.x + window.scrollX - halfpad,
        y: rect.y + window.scrollY - halfpad,
        width: rect.width + padding,
        height: rect.height + padding,
      });
    }, 100);
  }
}

export const cursor = new Cursor();
