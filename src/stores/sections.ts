import { writable } from "svelte/store";

export interface Sections {
  [section: number]: HTMLDivElement;
}

export const sections = writable({} as Sections);
