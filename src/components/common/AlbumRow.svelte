<script lang="ts">
  import { api } from "../../api";
  import { album, cursor } from "../../stores";
  import { escape } from "../../keyboard/escape";

  import Row from "./Row.svelte";

  export let id: string;
  export let name: string;

  const cover = api.albumCover(id);
</script>

<Row
  text={name}
  onclick={() => {
    cursor.clear();
    escape.propagate(/* force */ true);
    album.set(id);
  }}
>
  {#await cover then cover}
    <img alt="album cover" src={`http://localhost:4000${cover.cover}`} />
  {/await}
</Row>

<style>
  img {
    height: 100%;
    width: 100%;
  }
</style>
