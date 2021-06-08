<script lang="ts">
  import { onDestroy } from "svelte";
  import axios from "axios";

  export let in_progress: boolean = true;
  export let import_id: string;

  let status = "STARTING";

  function update() {
    axios
      .get(`http://localhost:4000/import/${import_id}/status`)
      .then((res) => {
        status = res.data.status;

        if (status === "DONE") {
          in_progress = false;
        }
      });
  }

  // TODO(enricozb): use sockets instead of periodic fetch
  const interval = setInterval(update, 1000);
  onDestroy(() => clearInterval(interval));
</script>

<div>{status}</div>
