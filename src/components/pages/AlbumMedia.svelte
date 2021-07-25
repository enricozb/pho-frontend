<script lang="ts">
  import { api } from "../../api";
  import PhotoGrid from "../photogrid/PhotoGrid.svelte";
  import Topbar from "../topbar/Topbar.svelte";

  export let albumId: string;
  $: album = api.albumData(albumId);
</script>

<Topbar title="" />
<div class="container">
  {#await album then album}
    <div class="title">{album.name}</div>
    <PhotoGrid files={album.files} />
  {/await}
</div>

<style>
  div.container {
    width: calc(100% - 2 * var(--space-2));
    margin: 0px var(--space-2) var(--space-2) var(--space-2);
    padding-top: var(--space-4);
    padding-bottom: var(--space-2);
  }

  div.title {
    color: var(--text-color-dark);
    font-size: var(--text-size-7);
    margin-bottom: var(--space-2);
  }
</style>
