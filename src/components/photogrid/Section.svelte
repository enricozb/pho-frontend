<script lang="ts">
  import type { FileMetadata } from "../../types/api";
  import { computeRows } from "../../alg/grid";
  import { cursor, sections } from "../../stores";

  import Row from "./Row.svelte";

  export let date: string;
  export let files: FileMetadata[];
  export let index: number;
  export let maxWidth: number;

  function mouseenter(e: Event) {
    cursor.set_div(
      (e.target as HTMLHeadingElement).parentNode as HTMLDivElement,
      20
    );
  }
</script>

<div use:sections.register={index}>
  <h1 on:mouseenter|stopPropagation={mouseenter}>
    {date}
  </h1>
  {#each computeRows(maxWidth, files) as { height, width, files } (files)}
    <Row {height} {width} {files} />
  {/each}
</div>

<style>
  div {
    max-width: 100%;
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
