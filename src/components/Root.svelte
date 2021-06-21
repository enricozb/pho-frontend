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
    width: 100%;
  }

  div {
    width: calc(100% - 50px);
    margin: 25px;
    padding-bottom: 25px;
  }
</style>
