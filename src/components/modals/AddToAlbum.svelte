<script lang="ts">
  import { navigate } from "svelte-navigator";

  import { api } from "../../api";
  import { modal, selections } from "../../stores";
  import Icon from "../icons/Icon.svelte";
  import AlbumRow from "../common/AlbumRow.svelte";

  const albums = api.getAlbums();
</script>

<div class="row">
  <Icon
    name="plus"
    style={`
      height: var(--space-3);
      fill: var(--text-color-medium);
      padding: 0 var(--space-2) 0 var(--space-2);
    `}
  />
  <div
    on:click={() => {
      api.newAlbum([...$selections]).then(({ id }) => navigate(`/album/${id}`));
      modal.close();
      selections.clear();
    }}
  >
    New Album
  </div>
</div>
<div class="section">existing albums</div>

{#await albums then albums}
  {#each albums as { id, name } (id)}
    <AlbumRow {id} {name} />
  {/each}
{/await}

<style>
  div {
    user-select: none;
  }

  div.row {
    display: flex;
    width: 100%;

    height: var(--space-3);
    line-height: var(--space-3);
  }

  div.row:hover {
    cursor: pointer;
    background: var(--fill-light);
  }

  div.section {
    margin-top: var(--space-1);
    margin-bottom: var(--space-1);
    margin-left: var(--space-2);

    font-variant: small-caps;
  }
</style>
