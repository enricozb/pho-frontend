<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { computeRows } from "../../alg/grid";
  import { formatDate } from "../../utils/date";

  import Row from "./Row.svelte";

  export let parent: HTMLDivElement;
  export let date: string;
  export let files: FileMetadata[];

  let dateStr = formatDate(date);

  const rows = [];
  let width = 0;

  computeRows(parent, files).forEach(({ files, width: rowWidth }) => {
    rows.push(files);
    width = Math.max(width, rowWidth);
  });
</script>

<div style={`width: ${width}px`}>
  <h1>{dateStr}</h1>
  {#each rows as files (files)}
    <Row {files} />
  {/each}
</div>

<style>
  h1 {
    font-weight: 600;
    font-size: 12pt;
    padding-left: 5px;
    padding-bottom: 10px;
  }
</style>
