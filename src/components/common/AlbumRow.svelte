<script lang="ts">
  import { navigate } from "svelte-navigator";

  import { api } from "../../api";

  export let id: string;
  export let name: string;

  const cover = api.albumCover(id);
</script>

<div class="row" on:click={() => navigate(`/album/${id}`)}>
  {#await cover}
    <div class="image" />
  {:then cover}
    <img alt="album cover" src={`http://localhost:4000${cover.cover}`} class="image" />
  {/await}
  <div>
    {name}
  </div>
</div>

<style>
  div.row {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    --padding: var(--space-2);

    gap: var(--space-2);

    height: var(--space-3);
    width: calc(100% - var(--padding));
    line-height: var(--padding);

    padding-left: var(--padding);

    cursor: pointer;

    transition: all 0s;
  }

  div.row:hover {
    background: var(--text-hover-bg);
  }

  img, div.image {
    height: calc(var(--space-3) - var(--space-2) / 2);
    width: calc(var(--space-3) - var(--space-2) / 2);

    background: var(--text-hover-bg);
    border-radius: var(--radius-2);
  }
</style>
