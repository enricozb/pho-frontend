<script lang="ts">
  import type { RowData } from "../../alg/grid";
  import { cursor } from "../../stores";

  import Row from "./Row.svelte";

  export let date: string;
  export let rowData: RowData[];

  function mouseenter(e: Event) {
    cursor.hover(
      (e.target as HTMLHeadingElement).parentNode as HTMLElement,
      20
    );
  }
</script>

<div>
  <h1 on:mouseenter|self={mouseenter}>
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
