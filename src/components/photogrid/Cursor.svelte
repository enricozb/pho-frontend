<script lang="ts">
  import { cursor } from "../../stores/cursor";

  let css = null;

  $: {
    css =
      $cursor &&
      `
      top: ${$cursor.y + $cursor.height / 2}px;
      left: ${$cursor.x + $cursor.width / 2}px;
      height: ${$cursor.height}px;
      width: ${$cursor.width}px;
    `;
  }
</script>

<div class="back" style={css} />

<style>
  div {
    transform: translateX(-50%) translateY(-50%);
    transition: top 0.1s, left 0.1s, width 0.1s, height 0.1s;
    transition-timing-function: ease;
    position: absolute;
    border-radius: 3px;
  }

  div.back {
    z-index: -1;
    background: #5eb0e5;
  }
</style>
