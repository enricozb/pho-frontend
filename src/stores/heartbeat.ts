import axios from "axios";
import { readable } from "svelte/store";

export interface HeartbeatStatus {
  connected: boolean
  error?: Error
}

export const daemon = readable({connected: false} as HeartbeatStatus, (set) => {
  async function heartbeat() {
    await axios.get("http://localhost:4000/heartbeat")
      .then((_) => {
        set({ connected: true });
      })
      .catch((err) => {
        set({ connected: false, error: err });
      });
  }

  // run immediately
  heartbeat();
  const interval = setInterval(heartbeat, 1000);

  return () => clearInterval(interval);
});
