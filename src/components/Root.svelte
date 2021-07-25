<script lang="ts">
  import { Route, Router } from "svelte-navigator";

  import Modal from "./modals/Modal.svelte";
  import AllMedia from "./pages/AllMedia.svelte";
  import AlbumMedia from "./pages/AlbumMedia.svelte";

  import "../css/vars.css";
</script>

<main>
  <Modal />
  <Router>
    <Route path="/" component={AllMedia} />
    <Route path="album/:albumId" component={AlbumMedia} />
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
