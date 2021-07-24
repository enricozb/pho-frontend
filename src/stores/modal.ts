import type { SvelteComponent } from "svelte";

type ModalData = {
  component?: typeof SvelteComponent;
  title?: string;
};

class Modal {
  data: ModalData = {};

  #recentlyClosed = false;
  #scrollY: number;
  #prevBodyPosition: string;
  #prevBodyOverflow: string;

  subscribers: Set<(data: ModalData) => void>;

  constructor() {
    this.subscribers = new Set();
  }

  show(title: string, component: typeof SvelteComponent) {
    this.data = { title, component };
    this.publish();

    this.#disableScroll();
  }

  close() {
    if (!this.data.component) {
      return;
    }

    this.data.component = undefined;
    this.#recentlyClosed = true;
    this.publish();

    this.#enableScroll();
  }

  recentlyClosed() {
    const val = this.#recentlyClosed;
    this.#recentlyClosed = false;
    return val;
  }

  subscribe(sub: (data: ModalData) => void): () => void {
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

  #disableScroll() {
    this.#scrollY = window.scrollY;
    this.#prevBodyPosition = document.body.style.position;
    this.#prevBodyOverflow = document.body.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = `-${this.#scrollY}px`;
    document.body.style.overflow = "hidden";
  }

  #enableScroll() {
    document.body.style.position = this.#prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = this.#prevBodyOverflow || "";
    window.scrollTo(0, scrollY);
  }
}

export const modal = new Modal();
