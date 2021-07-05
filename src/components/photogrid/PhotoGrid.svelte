<script lang="ts">
  import axios from "axios";
  import type { FileMetadata } from "../../types/api";
  import { computeLayout } from "../../alg/grid";
  import { formatDate } from "../../utils/date";
  import { focus, selections } from "../../stores";

  import Cursor from "./Cursor.svelte";
  import Focus from "./Focus.svelte";
  import Section from "./Section.svelte";

  let clientWidth: number;

  // TODO(enricozb): make a common fetcher that adds the endpoint for us?
  const sectionData = axios
    .get<{ [date: string]: FileMetadata[] }>("http://localhost:4000/files/all")
    .then((json) => json.data);
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && selections.clear()} />

<Cursor />
<div bind:clientWidth>
  {#await sectionData}
    Loading...
  {:then sectionData}
    {#each Object.entries(sectionData) as [date, files] (date)}
      <Section
        rowData={computeLayout(clientWidth, files)}
        date={formatDate(date)}
      />
    {/each}
  {/await}
  {#if $focus}
    <Focus file={$focus.file} rect={$focus.rect} />
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;

    justify-content: left;
    gap: 10px;

    height: 100%;
    width: 100%;

    padding-top: 75px;
  }
</style>
