<script lang="ts">
  import { onDestroy } from "svelte";

  import type { FileMetadata } from "../../types/api";

  import { api } from "../../api";
  import { computeLayout } from "../../alg/grid";
  import { escape } from "../../keyboard/escape";
  import { focus, selections } from "../../stores";
  import { formatDate } from "../../utils/date";

  import Cursor from "./Cursor.svelte";
  import Focus from "./Focus.svelte";
  import Section from "./Section.svelte";
  import SelectionButton from "./SelectionButton.svelte";

  let clientWidth: number;

  export let files: { [date: string]: FileMetadata[] } | undefined = undefined;
  // TODO(enricozb): make a common fetcher that adds the endpoint for us?
  $: filesByDate = files ? new Promise((r) => r(files)) : api.allMedia();

  // register selection clearing via escape key
  onDestroy(escape.push(() => selections.clear()));
</script>

<Cursor />
<SelectionButton />
<div bind:clientWidth>
  {#await filesByDate}
    Loading...
  {:then filesByDate}
    {#each Object.entries(filesByDate) as [date, files] (date)}
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

    gap: var(--space-2);

    height: 100%;
    width: 100%;
  }
</style>
