<script lang="ts">
  import axios from "axios";
  import { computeRows } from "../../alg/grid";

  import Cursor from "./Cursor.svelte";
  import Row from "./Row.svelte";

  // TODO(enricozb): make a common fetcher that adds the endpoint for us?
  const files = axios
    .get("http://localhost:4000/files/all")
    .then((json) => json.data);

  const rows = computeRows(files);
</script>

<Cursor />
<div id="grid">
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
    flex: 1;
  }
</style>
