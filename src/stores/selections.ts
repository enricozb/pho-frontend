class Selection {
  ids: Set<string>;
  subscribers: Set<(ids: Set<string>) => void>;

  constructor() {
    this.ids = new Set();
    this.subscribers = new Set();
  }

  toggle(id: string) {
    if (this.ids.has(id)) {
      this.ids.delete(id);
    } else {
      this.ids.add(id);
    }

    this.publish();
  }

  // sync synchronizes (and potentially toggles) the membership of all of the `ids` passed in.
  sync(ids: string[]) {
    if (this.subset(ids)) {
      for (const id of ids) {
        this.ids.delete(id);
      }
    } else {
      for (const id of ids) {
        this.ids.add(id);
      }
    }

    this.publish();
  }

  clear() {
    this.ids.clear();
    this.publish();
  }

  subscribe(sub: (ids: Set<string>) => void): () => void {
    sub(this.ids);
    this.subscribers.add(sub);

    return () => {
      this.subscribers.delete(sub);
    };
  }

  publish() {
    for (const sub of this.subscribers) {
      sub(this.ids);
    }
  }

  // convenience set methods
  subset(ids: string[]) {
    for (const id of ids) {
      if (!this.ids.has(id)) {
        return false;
      }
    }

    return true;
  }
}

export const selections = new Selection();
