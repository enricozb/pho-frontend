// TODO(enricozb): consider changing this to an action instead of a store
//
class Sections {
  sections: { [section: number]: HTMLDivElement } = {};

  register(section: HTMLDivElement, index: number) {
    this.sections[index] = section;
  }
}

export const sections = new Sections();
