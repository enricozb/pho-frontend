<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { focus } from "../../stores";

  export let file: FileMetadata;
  export let rect: Pick<ClientRect, "top" | "left" | "width" | "height">;

  const { top, left, height, width } = rect;

  let src = file.endpoints.thumb;
  let zoom = false;

  // pretend delay for transition effect
  setTimeout(() => (zoom = true), 0);

  // delay highest quality image until after transition
  setTimeout(() => (src = file.endpoints.data), 200);

  function onkeydown(e: KeyboardEvent) {
    if (e.key == "Escape") {
      zoom = false;
      setTimeout(() => focus.clear(), 200);
    }
  }
</script>

<svelte:window on:keydown={onkeydown} />

<div class:zoom>
  <img
    alt={`photo from ${file.time}`}
    src={`http://localhost:4000${src}`}
    style={!zoom &&
      `top: ${top}px; left: ${left}px; height: ${height}px; width: ${width}px;`}
  />
</div>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 1;

    background: #12121200;
  }

  div.zoom {
    background: #121212;
  }

  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
</style>
