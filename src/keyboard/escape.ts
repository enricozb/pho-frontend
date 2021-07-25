type Callback = () => boolean | void;

class EscapeStack {
  // stack of callback functions to fire when the escape key is pressed
  // if a boolean value of `true` is returned, stop the propagation
  private stack: Callback[] = [];
  private identifiers: { [id: string]: () => void } = {};

  constructor() {
    window.addEventListener(
      "keydown",
      (e: KeyboardEvent) => e.key == "Escape" && this.propagate()
    );
  }

  push(callback: Callback, id: string | undefined = undefined) {
    // cleanup the old identifier
    this.identifiers[id]?.();

    // push new callback
    this.stack.push(callback);
    const cleanup = () => {
      delete this.identifiers[id];

      const index = this.stack.indexOf(callback);
      if (index > -1) {
        this.stack.splice(index, 1);
      }
    };

    if (id) {
      this.identifiers[id] = cleanup;
    }

    return cleanup;
  }

  propagate(force = false) {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      if (this.stack[i]() && !force) {
        break;
      }
    }
  }
}

export const escape = new EscapeStack();
