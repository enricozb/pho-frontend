<script lang="ts">
  import Modal from "./modals/Modal.svelte";
  import PhotoGrid from "./photogrid/PhotoGrid.svelte";
  import Topbar from "./topbar/Topbar.svelte";
</script>

<main>
  <Modal />
  <Topbar />
  <div>
    <PhotoGrid />
  </div>
</main>

<style>
  :global(*) {
    transition: all 0.2s ease;
  }

  :global(body) {
    padding: 0px;
    overflow-x: hidden;
  }

  :global(body::-webkit-scrollbar) {
    display: none;
  }

  main {
    width: 100%;
  }

  div {
    width: calc(100% - 50px);
    margin: 0px 25px 25px 25px;
    padding-bottom: 25px;
  }
</style>
