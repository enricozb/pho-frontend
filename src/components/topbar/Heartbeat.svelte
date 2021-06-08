<script context="module" lang="ts">
  export interface HeartbeatStatus {
    connected: boolean
    error?: Error
  }
</script>

<script lang="ts">
  import axios from "axios";
  import { onDestroy } from "svelte";

  export let status: HeartbeatStatus;

  async function heartbeat() {
    await axios.get("http://localhost:4000/heartbeat")
      .then((_) => {
        status = { connected: true };
      })
      .catch((err) => {
        status = { connected: false, error: err };
      });
  }

  // heartbeat() every 2s, starting immediately
  heartbeat();
  let interval = setInterval(heartbeat, 2000);

  onDestroy(() => clearInterval(interval));
</script>
