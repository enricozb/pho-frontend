<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { cursor, focus, selections } from "../../stores";
  import Checkmark from "./Checkmark.svelte";

  const padding = 2;

  export let height: number;
  export let file: FileMetadata;

  $: width = (file.dimensions.width / file.dimensions.height) * height;
  $: selected = $selections.has(file.id);
  $: style = `
    --height: ${height}px;
    --width: ${width}px;
    --padding: ${padding}px;
    --shrink: ${selected ? "var(--space-2)" : "0px"};
  `;

  function onmouseenter(e: Event) {
    cursor.hover(e.target as HTMLElement as HTMLElement, 10);
  }

  function onclick(e: MouseEvent) {
    if (e.shiftKey) {
      selections.toggle(file.id);
    } else {
      focus.focus(file, (e.target as HTMLImageElement).getBoundingClientRect());
    }
  }
</script>

<div {style} class:selected on:mouseenter={onmouseenter} on:click={onclick}>
  <img
    {style}
    on:click={onclick}
    alt={`photo taken on ${file.time}`}
    src={`http://localhost:4000${file.endpoints.thumb}`}
  />
  <Checkmark {selected} />
</div>

<style>
  div {
    position: relative;
    display: inline-block;
    height: var(--height);
    width: var(--width);
  }

  img {
    pointer-events: none;
    object-fit: cover;
    height: calc(var(--height) - var(--padding) - var(--shrink));
    width: calc(var(--width) - var(--padding) - var(--shrink));
    padding: calc(var(--padding) / 2);
    margin: calc(var(--shrink) / 2);
  }
</style>
