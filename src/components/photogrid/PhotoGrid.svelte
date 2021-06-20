<script lang="ts">
  import axios from "axios";
  import type { FileMetadata } from "../../types/api";
  import { formatDate } from "../../utils/date";

  import Cursor from "./Cursor.svelte";
  import Section from "./Section.svelte";

  let clientWidth: number;

  // TODO(enricozb): make a common fetcher that adds the endpoint for us?
  const sections = axios
    .get<{ [date: string]: FileMetadata[] }>("http://localhost:4000/files/all")
    .then((json) => json.data);
</script>

<Cursor />
<div bind:clientWidth>
  {#await sections}
    Loading...
  {:then sections}
    {#each Object.entries(sections) as [date, files], index (date)}
      <Section {index} {files} maxWidth={clientWidth} date={formatDate(date)} />
    {/each}
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
