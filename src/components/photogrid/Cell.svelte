<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { cursor, selections } from "../../stores";
  import Checkmark from "./Checkmark.svelte";

  export let height: number;
  export let file: FileMetadata;

  // must match double the padding in the styling
  // TODO(enricozb): consider using var(--height)?
  // see: https://svelte.dev/repl/4b1c649bc75f44eb9142dadc0322eccd?version=3.6.7
  const padding = 4;

  $: width = (file.dimensions.width / file.dimensions.height) * height;
  $: selected = $selections.has(file.id);

  function onmouseenter(e: Event) {
    cursor.hover((e.target as HTMLElement).childNodes[0] as HTMLElement, padding);
  }
</script>

<div
  style={`height: ${height}px; width: ${width}px;`}
  on:mouseenter|self={onmouseenter}
>
  <img
    class:selected
    alt={`photo taken on ${file.time}`}
    src={`http://localhost:4000${file.endpoints.thumb}`}
    style={`height: ${height - padding}px; width: ${width - padding}px;`}
    on:click={(e) => e.shiftKey && selections.toggle(file.id)}
  />
  <Checkmark {selected} />
</div>

<style>
  div {
    position: relative;
    display: inline-block;
  }

  div:hover > img {
    cursor: pointer;
    transform: scale(0.97);
  }

  img {
    padding: 2px;
  }

  img.selected {
    filter: brightness(75%) saturate(140%);
  }
</style>
