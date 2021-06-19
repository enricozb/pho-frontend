<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { computeRows } from "../../alg/grid";
  import { cursor, sections } from "../../stores";
  import { formatDate } from "../../utils/date";
  import { onMount } from "svelte";

  import Row from "./Row.svelte";

  export let parent: HTMLDivElement;
  export let index: number;
  export let date: string;
  export let files: FileMetadata[];

  let self: HTMLDivElement;

  const dateStr = formatDate(date);
  const rows = [];
  let width = 0;

  computeRows(parent, files).forEach(({ files, width: rowWidth }) => {
    rows.push(files);
    width = Math.max(width, rowWidth);
  });

  onMount(() => {
    $sections[index] = self;
  });
</script>

<div
  on:mouseover|stopPropagation={() => cursor.set_div(self, 20)}
  bind:this={self}
  style={`width: ${width}px`}
>
  <h1>{dateStr}</h1>
  {#each rows as files (files)}
    <Row {files} />
  {/each}
</div>

<style>
  div {
    cursor: pointer;
    margin-top: 10px;
  }

  h1 {
    font-weight: 600;
    font-size: 12pt;
    padding: 0 0 10px 5px;
    margin: 0;
  }
</style>
