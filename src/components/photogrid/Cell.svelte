<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { cursor } from "../../stores/cursor";
  import Checkmark from "./Checkmark.svelte";

  export let height: number;
  export let file: FileMetadata;

  // must match double the padding in the styling
  // TODO(enricozb): consider using var(--height)?
  // see: https://svelte.dev/repl/4b1c649bc75f44eb9142dadc0322eccd?version=3.6.7
  const padding = 4;

  let width = (file.dimensions.width / file.dimensions.height) * height;
  let selected = false;

  function onmouseenter(e: Event) {
    cursor.hover(e.target as HTMLElement, 4);
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
    on:click={(e) => {
      if (e.shiftKey) {
        selected = !selected;
      }
    }}
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
