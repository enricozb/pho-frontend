<script lang="ts">
  import axios from "axios";
  import { onDestroy } from "svelte";

  export let files: FileList;

  let status = "STARTING";

  let interval: ReturnType<typeof setTimeout> | null = null;
  onDestroy(() => clearInterval(interval));

  async function startImport(files: FileList) {
    const paths = [...files].map((f) => f.path as string);
    await axios
      .post<{ id: string }>("http://localhost:4000/import/new", {
        opts: { paths },
      })
      .then((json) => {
        // TODO(enricozb): use sockets instead of periodic fetch
        console.log(json);
        interval = setInterval(() => checkStatus(json.data.id), 1000);
      })
      .catch(alert);
  }

  function checkStatus(importId: string) {
    axios.get(`http://localhost:4000/import/${importId}/status`).then((res) => {
      status = res.data.status;

      if (status === "DONE") {
        files = null;
      }
    });
  }

  startImport(files);
</script>

<div>{status}</div>
