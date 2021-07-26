<script lang="ts">
  import { Route, Router } from "svelte-navigator";

  import Modal from "./modals/Modal.svelte";
  import MediaViewer from "./pages/MediaViewer.svelte";

  import "../css/vars.css";
</script>

<main>
  <Modal />
  <Router>
    <Route path="/" component={MediaViewer} />
  </Router>
</main>

<style>
  :global(*) {
    -webkit-user-drag: none;
    transition: all 0.2s ease;
  }

  :global(body::-webkit-scrollbar) {
    display: none;
  }

  :global(body) {
    padding: 0px;
    overflow-x: hidden;
  }

  main {
    width: 100%;
  }
</style>
