<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { cursor } from "../../stores/cursor";

  export let height: number;
  export let file: FileMetadata;

  // must match double the padding in the styling
  // TODO(enricozb): consider using var(--height)?
  // see: https://svelte.dev/repl/4b1c649bc75f44eb9142dadc0322eccd?version=3.6.7
  const padding = 4;

  let width = (file.dimensions.width / file.dimensions.height) * height;
  let self: HTMLImageElement;
</script>

<img
  bind:this={self}
  alt={`photo taken on ${file.time}`}
  src={`http://localhost:4000${file.endpoints.thumb}`}
  style={`height: ${height - padding}px; width: ${width - padding}px;`}
  on:click={() => console.log(self.getBoundingClientRect().width)}
  on:mouseenter|stopPropagation={() => cursor.set_div(self, 4)}
/>

<style>
  img {
    padding: 2px;
    transition: all 0.1s ease;
  }

  img:hover {
    cursor: pointer;
    transform: scale(0.97);
  }
</style>
