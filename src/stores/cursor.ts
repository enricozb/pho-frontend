import { writable } from "svelte/store";

export interface Cursor {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const cursor = writable(null as Cursor);
