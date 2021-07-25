<script lang="ts">
  import { api } from "../../api";
  import AlbumRow from "../common/AlbumRow.svelte";

  export let active: boolean;

  const albums = api.getAlbums();
  albums.then((data) => console.log(data));
</script>

<div class="container" class:active>
  <div class="section">albums</div>
  {#await albums then albums}
    {#each albums as { id, name } (id)}
      <AlbumRow {id} {name} />
    {/each}
  {/await}
</div>

<style>
  div.container {
    z-index: 2;
    position: fixed;

    top: var(--space-3);
    left: calc(-1 * var(--width-card));

    height: calc(100vh - var(--space-3));
    width: var(--width-card);

    overflow-y: auto;

    background: white;
    border: var(--border-thin);
    box-sizing: border-box;

    padding-bottom: var(--space-2);
  }

  div.active {
    left: 0;
  }

  div.section {
    margin-top: var(--space-2);
    margin-bottom: var(--space-1);
    margin-left: var(--space-2);

    font-variant: small-caps;
  }
</style>
