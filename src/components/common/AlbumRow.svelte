<script lang="ts">
  import { navigate } from "svelte-navigator";

  export let id: string;
  export let name: string;
</script>

<div class="row" on:click={() => navigate(`/album/${id}`)}>
  <div class="image" />
  <div>
    {name}
  </div>
</div>

<style>
  div.row {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: var(--space-2);

    width: calc(100% - var(--space-3));
    height: var(--space-3);
    line-height: var(--space-3);

    padding: var(--space-min) 0 var(--space-min) var(--space-3);

    cursor: pointer;
  }

  div.row:hover {
    background: var(--fill-light);
  }

  div.image {
    height: var(--space-3);
    width: var(--space-3);

    background: var(--text-hover-bg);
    border-radius: var(--radius-2);
  }
</style>
