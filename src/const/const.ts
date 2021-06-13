export const ROW_MAX_HEIGHT = 250;

export let ROW_MAX_WIDTH: number;

export function updateConstants(el: HTMLDivElement) {
  ROW_MAX_WIDTH = el.getBoundingClientRect().width - 20;
}
