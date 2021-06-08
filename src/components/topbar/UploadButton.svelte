<script lang="ts">
  import axios from "axios";
  import ImportProgress from "./ImportProgress.svelte";
  import Heartbeat from "./Heartbeat.svelte";
  import type { HeartbeatStatus } from "./Heartbeat.svelte";

  let currently_imporing = false;
  let files: FileList;
  let import_id: string;
  let status: HeartbeatStatus = { connected: false };

  async function importFiles() {
    if (files.length > 0) {
      const paths = [...files].map((f) => f.path as string);
      await axios
        .post<any, { id: string }>("http://localhost:4000/import/new", {
          opts: { paths },
        })
        .then((json) => {
          currently_imporing = true;
          import_id = json.id;
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
</script>

<Heartbeat bind:status />

{#if currently_imporing}
  <ImportProgress bind:in_progress={currently_imporing} {import_id} />
{:else if status.error}
  <div class="error" />
{:else if status.connected}
  <label for="file-input" class="ready" />
  <input
    id="file-input"
    type="file"
    multiple={true}
    bind:files
    on:change={importFiles}
  />
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
