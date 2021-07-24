import type { SvelteComponent } from "svelte";

class Modal {
  component: typeof SvelteComponent;
  #recentlyClosed = false;

  #scrollY: number;
  #prevBodyPosition: string;
  #prevBodyOverflow: string;

  subscribers: Set<(component: typeof SvelteComponent) => void>;

  constructor() {
    this.subscribers = new Set();
  }

  show(component: typeof SvelteComponent) {
    this.component = component;
    this.publish();

    this.#disableScroll();
  }

  close() {
    if (!this.component) {
      return;
    }

    this.component = undefined;
    this.#recentlyClosed = true;
    this.publish();

    this.#enableScroll();
  }

  recentlyClosed() {
    const val = this.#recentlyClosed;
    this.#recentlyClosed = false;
    return val;
  }

  subscribe(sub: (component: typeof SvelteComponent) => void): () => void {
    sub(this.component);
    this.subscribers.add(sub);

    return () => {
      this.subscribers.delete(sub);
    };
  }

  publish() {
    for (const sub of this.subscribers) {
      sub(this.component);
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
