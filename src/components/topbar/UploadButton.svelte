<script lang="ts">
  import ImportProgress from "./ImportProgress.svelte";
  import { daemon } from "../../stores/heartbeat";

  let files: FileList;
</script>

{#if $daemon.error}
  <div class="error" />
{:else if files?.length > 0}
  <ImportProgress bind:files />
{:else if $daemon.connected}
  <label for="file-input" class="ready" />
  <input id="file-input" type="file" multiple={true} bind:files />
{:else}
  <div class="loading" />
{/if}

<style>
  div,
  label {
    width: 50px;
    height: 50px;
  }

  label.ready {
    cursor: pointer;
    background-color: green;
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
