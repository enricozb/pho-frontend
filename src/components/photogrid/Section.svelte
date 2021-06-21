<script lang="ts">
  import type { RowData } from "../../alg/grid";
  import { cursor, selections } from "../../stores";

  import Row from "./Row.svelte";

  export let date: string;
  export let rowData: RowData[];

  // TODO(enricozb): maybe this (fileIDs) should be passed in?
  //   or maybe the passed in layout is just indexes into a list of files

  // all file ids in this section
  $: fileIDs = rowData.map(({ files }) => files.map(({ id }) => id)).flat();

  function mouseenter(e: Event) {
    cursor.hover(
      (e.target as HTMLHeadingElement).parentNode as HTMLElement,
      20
    );
  }
</script>

<div>
  <h1 on:mouseenter|self={mouseenter} on:click={() => selections.sync(fileIDs)}>
    {date}
  </h1>
  {#each rowData as { height, width, files } (files)}
    <Row {height} {width} {files} />
  {/each}
</div>

<style>
  div {
    max-width: 100%;
    margin-top: 10px;
    cursor: pointer;
    user-select: none;
  }

  h1 {
    font-weight: 600;
    font-size: 12pt;
    padding: 0 0 10px 5px;
    margin: 0;
  }
</style>
