export const ROW_MAX_HEIGHT = 250;

export let ROW_MAX_WIDTH: number;

export function updateConstants(container: HTMLDivElement) {
  ROW_MAX_WIDTH = container.getBoundingClientRect().width;
  console.log(`container is ${ROW_MAX_WIDTH}px wide`)
}
