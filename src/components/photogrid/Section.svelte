<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { computeRows } from "../../alg/grid";
  import { cursor, sections } from "../../stores";
  import { formatDate } from "../../utils/date";

  import Row from "./Row.svelte";

  export let parent: HTMLDivElement;
  export let index: number;
  export let date: string;
  export let files: FileMetadata[];

  const dateStr = formatDate(date);
  const rows = [];
  let width = 0;

  computeRows(parent, files).forEach(({ files, width: rowWidth }) => {
    rows.push(files);
    width = Math.max(width, rowWidth);
  });

  function mouseenter(e: Event) {
    cursor.set_div(
      (e.target as HTMLHeadingElement).parentNode as HTMLDivElement,
      20
    );
  }
</script>

<div use:sections.register={index} style={`width: ${width}px`}>
  <h1 on:mouseenter|stopPropagation={mouseenter}>
    {dateStr}
  </h1>
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
