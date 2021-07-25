<script lang="ts">
  import { daemon } from "../../stores/heartbeat";
  import ImportProgress from "./ImportProgress.svelte";
  import Icon from "../icons/Icon.svelte";

  let files: FileList;
</script>

{#if $daemon.error}
  <div class="error" />
{:else if files?.length > 0}
  <ImportProgress bind:files />
{:else if $daemon.connected}
  <div class="button">
    <label for="file-input">
      <Icon name="upload" />
      Upload
    </label>
    <input id="file-input" type="file" multiple={true} bind:files />
  </div>
{:else}
  <div class="loading" />
{/if}

<style>
  div.button {
    display: flex;
    height: 100%;

    justify-content: center;
    align-items: center;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: var(--space-min);

    font-size: var(--text-size-2);
    color: var(--text-color-medium);
    fill: var(--text-color-medium);

    border-radius: var(--radius-2);
    user-select: none;
    cursor: pointer;
  }

  label:hover {
    background: var(--text-hover-bg);
  }

  label:active {
    background: var(--text-active-bg);
  }

  div.error {
    background-color: red;
  }

  div.loading {
    background-color: blue;
  }

  input {
    display: none;
  }
</style>
