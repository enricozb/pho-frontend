<script lang="ts">
  import ImportProgress from "./ImportProgress.svelte";

  let files: FileList;

  let connection_status: String = "";
  let connection_error: Error | null;

  let currently_imporing = false;
  let import_id = "";

  async function heartbeat() {
    await fetch("http://localhost:4000/heartbeat")
      .then((res) => res.json())
      .then((json) => {
        connection_status = json.status;
        connection_error = null;
      })
      .catch((err) => {
        connection_error = err;
      });
  }

  // heartbeat() every 2s, starting immediately
  heartbeat();
  setInterval(heartbeat, 2000);

  async function importFiles() {
    if (files.length > 0) {
      const paths = [...files].map((f) => f.path as string);
      await fetch("http://localhost:4000/import/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ opts: { paths } }),
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          currently_imporing = true;
          import_id = json.id;
        });
      // TODO(enricozb): catch error
    }
  }
</script>

{#if currently_imporing}
  <ImportProgress bind:in_progress={currently_imporing} {import_id} />
{:else if connection_error}
  <div class="error" />
{:else if connection_status == "ok"}
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
