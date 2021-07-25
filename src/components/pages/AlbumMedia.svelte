<script lang="ts">
  import PhotoGrid from "../photogrid/PhotoGrid.svelte";
  import Topbar from "../topbar/Topbar.svelte";

  export let albumId: string;
</script>

<Topbar title="" />
<div>
  <h1>{albumId}</h1>
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
