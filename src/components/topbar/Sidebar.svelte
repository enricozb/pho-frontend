<script lang="ts">
  import { onDestroy } from "svelte";

  import { api } from "../../api";
  import { escape } from "../../keyboard/escape";
  import AlbumRow from "../common/AlbumRow.svelte";

  export let active: boolean;

  const albums = api.getAlbums();

  // register selection clearing via escape key
  let cleanup: (() => void) | undefined;
  $: {
    // delete old callback, and if we're active, register a new callback
    cleanup?.();
    cleanup = !active
      ? undefined
      : escape.push(() => {
          active = false;
          return true;
        }, "sidebar");
  }
  onDestroy(() => cleanup?.());
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
