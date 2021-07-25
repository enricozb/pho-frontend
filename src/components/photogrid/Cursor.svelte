<script lang="ts">
  import { cursor } from "../../stores/cursor";

  let css = null;

  $: css =
    $cursor &&
    `
      top: ${$cursor.y + $cursor.height / 2}px;
      left: ${$cursor.x + $cursor.width / 2}px;
      height: ${$cursor.height}px;
      width: ${$cursor.width}px;
    `;
</script>

<div style={css} />

<style>
  div {
    z-index: -1;
    position: absolute;

    transform: translateX(-50%) translateY(-50%);

    border-radius: var(--radius-1);
    background: var(--purple-light);
  }
</style>
