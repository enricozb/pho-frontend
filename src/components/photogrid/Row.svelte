<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { rowDims } from "../../alg/grid";

  import Cell from "./Cell.svelte";

  export let files: FileMetadata[];

  const { width, height } = rowDims(files);
</script>

<div style={`height: ${height}px; width: ${width}px;`}>
  {#each files as file (file)}
    <Cell {height} {file} />
  {/each}
</div>

<style>
</style>
