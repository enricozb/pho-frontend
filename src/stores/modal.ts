import type { SvelteComponent } from "svelte";

import { escape } from "../keyboard/escape";

type ModalData = {
  component?: typeof SvelteComponent;
  title?: string;
  visible: boolean;
};

class Modal {
  data: ModalData = { visible: false };
  private subscribers: Set<(data: ModalData) => void> = new Set();

  private onClose: () => void;

  private scrollY: number;
  private prevBodyPosition: string;
  private prevBodyOverflow: string;

  show(title: string, component: typeof SvelteComponent) {
    this.data = { title, component, visible: true };
    this.publish();

    this.disableScroll();
    this.onClose = escape.push(() => (this.close(), true));
  }

  close() {
    if (!this.data.visible) {
      return;
    }

    this.onClose?.();
    this.onClose = undefined;

    this.data.visible = false;
    this.publish();
    this.enableScroll();
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

  disableScroll() {
    this.scrollY = window.scrollY;
    this.prevBodyPosition = document.body.style.position;
    this.prevBodyOverflow = document.body.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = `-${this.scrollY}px`;
    document.body.style.overflow = "hidden";
  }

  enableScroll() {
    document.body.style.position = this.prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = this.prevBodyOverflow || "";
    window.scrollTo(0, this.scrollY);
  }
}

export const modal = new Modal();
