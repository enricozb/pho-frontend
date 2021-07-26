<script lang="ts">
  import { api } from "../../api";
  import { album, cursor } from "../../stores";
  import { escape } from "../../keyboard/escape";

  import Row from "./Row.svelte";
  import Icon from "../icons/Icon.svelte";

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
  <div slot="right-button" on:click|stopPropagation={() => {}}>
    <Icon
      name="trash"
      style={`
        height: 100%;
        fill: var(--text-color-medium);
      `}
    />
  </div>
</Row>

<style>
  img {
    height: 100%;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    --margin: var(--space-min);
    margin: var(--margin);

    height: calc(var(--space-3) - var(--margin) * 2);
    width: calc(var(--space-3) - var(--margin) * 2);

    border-radius: var(--radius-circle);
    border: 1px solid #0000;
  }

  div:hover {
    border: 1px solid var(--text-active-bg);
  }

  div:hover:active {
    background: var(--text-active-bg);
  }
</style>
