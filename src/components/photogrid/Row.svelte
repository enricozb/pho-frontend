<script lang="ts">
  import type { FileMetadata } from "../../types/api";

  import Cell from "./Cell.svelte";

  export let width: number;
  export let height: number;
  export let files: FileMetadata[];
</script>

<div style={`height: ${height}px; width: ${width}px;`}>
  {#each files as file (file)}
    <Cell {height} {file} />
  {/each}
</div>

<style>
</style>
