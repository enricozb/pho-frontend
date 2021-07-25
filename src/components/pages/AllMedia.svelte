<script lang="ts">
  import PhotoGrid from "../photogrid/PhotoGrid.svelte";
  import Topbar from "../topbar/Topbar.svelte";
</script>

<Topbar title="All Media" />
<div>
  <PhotoGrid />
</div>

<style>
  div {
    width: calc(100% - 2 * var(--space-2));
    margin: 0px var(--space-2) var(--space-2) var(--space-2);
    padding-top: var(--space-4);
    padding-bottom: var(--space-2);
  }
</style>
