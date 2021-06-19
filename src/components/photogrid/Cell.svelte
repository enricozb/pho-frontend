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
  let cell: HTMLImageElement;
</script>

<img
  bind:this={cell}
  alt={`photo taken on ${file.time}`}
  src={`http://localhost:4000${file.endpoints.thumb}`}
  style={`height: ${height - padding}px; width: ${width - padding}px;`}
  on:click={() => console.log(file.id, file.time)}
  on:mouseenter|stopPropagation={() =>
    cursor.update((_) => ({
      x: cell.offsetLeft + 0.01 * cell.width - padding / 2,
      y: cell.offsetTop + 0.01 * cell.height - padding / 2,
      width: 0.98 * (cell.width + padding) + padding,
      height: 0.98 * (cell.height + padding) + padding,
    }))}
/>

<style>
  img {
    padding: 2px;
    transition: all 0.1s ease;
  }

  img:hover {
    cursor: pointer;
    transform: scale(0.98);
  }
</style>
