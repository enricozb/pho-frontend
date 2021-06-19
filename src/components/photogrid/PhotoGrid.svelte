<script lang="ts">
  import axios from "axios";
  import type { FileMetadata } from "../../types/api";

  import Cursor from "./Cursor.svelte";
  import Section from "./Section.svelte";
  import { cursor } from "../../stores/cursor";

  let self: HTMLDivElement;

  // TODO(enricozb): make a common fetcher that adds the endpoint for us?
  const sections = axios
    .get<{ [date: string]: FileMetadata[] }>("http://localhost:4000/files/all")
    .then((json) => json.data);
</script>

<Cursor />
<div bind:this={self}>
  {#await sections}
    Loading...
  {:then sections}
    {#if self}
      {#each Object.entries(sections) as [date, files], i (date)}
        <Section parent={self} index={i} {date} {files} />
      {/each}
    {/if}
  {/await}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;

    justify-content: left;
    gap: 10px;

    height: 100%;
    width: 100%;
  }
</style>
