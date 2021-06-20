<script lang="ts">
  import PhotoGrid from "./photogrid/PhotoGrid.svelte";
  import Topbar from "./topbar/Topbar.svelte";
</script>

<main>
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
  }

  main {
    height: 100%;
    width: 100%;
  }

  div {
    height: calc(100% - 50px);
    width: calc(100% - 50px);
    margin: 25px;
  }
</style>
