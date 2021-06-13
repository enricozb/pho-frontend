<script lang="ts">
  import { cursor } from "../../stores/cursor";

  let css = null;

  $: {
    css =
      $cursor &&
      `
      top: ${$cursor.y}px;
      left: ${$cursor.x}px;
      height: ${$cursor.height}px;
      width: ${$cursor.width}px;
    `;
  }
</script>

<div style={css} />

<style>
  div {
    z-index: -1;
    transition: top 0.1s, left 0.1s, width 0.1s, height 0.1s;
    transition-timing-function: ease;
    position: absolute;
    background: #f0f;
  }
</style>
