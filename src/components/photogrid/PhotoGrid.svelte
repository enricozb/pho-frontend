<script lang="ts">
  import axios from "axios";
  import { computeRows } from "../../alg/grid";

  import Cursor from "./Cursor.svelte";
  import Row from "./Row.svelte";

  let self: HTMLDivElement;

  // TODO(enricozb): make a common fetcher that adds the endpoint for us?
  const files = axios
    .get("http://localhost:4000/files/all")
    .then((json) => json.data);

  let rows = null;

  $: rows = computeRows(self, files);
</script>

<Cursor />
<div id="grid" bind:this={self}>
  {#await rows}
    <div>Loading...</div>
  {:then rows}
    {#each [...rows] as row (row)}
      <Row files={row} />
    {/each}
  {/await}
</div>

<style>
  #grid {
    height: 100%;
    width: calc(100% - 20px);
    padding: 10px;
  }
</style>
