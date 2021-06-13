<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { bestHeight } from "../../alg/grid";
  import { ROW_MAX_WIDTH } from "../../const/const";

  import Cell from "./Cell.svelte";

  export let files: FileMetadata[];

  const height = bestHeight(files);
</script>

<div style={`height: ${height}px; width: ${ROW_MAX_WIDTH}px;`}>
  {#each files as file (file)}
    <Cell {height} {file} />
  {/each}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
