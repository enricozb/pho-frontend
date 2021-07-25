<script lang="ts">
  import { api } from "../../api";
  import PhotoGrid from "../photogrid/PhotoGrid.svelte";
  import Topbar from "../topbar/Topbar.svelte";

  export let albumId: string;
  $: album = api.albumData(albumId);

  function onkeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  }

  function onTitleChange(e: Event) {
    api.renameAlbum(albumId, (e.target as HTMLInputElement).value);
  }
</script>

<Topbar title="" />
<div class="container">
  {#await album then album}
    <input
      class="title"
      value={album.name}
      on:change={onTitleChange}
      on:keydown={onkeydown}
    />
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

  .title {
    height: calc(var(--text-size-7) + var(--space-2));
    width: 100%;

    margin-bottom: var(--space-2);
    padding: var(--space-1);

    color: var(--text-color-dark);
    font-size: var(--text-size-7);

    border: none;
    outline: none;
    border-bottom: var(--border-thin-transparent);
  }

  .title:hover {
    border-bottom: var(--border-thin);
  }

  .title:focus {
    border-bottom: var(--border-thin-dark);
  }
</style>
