<script lang="ts">
  import Topbar from './topbar/Topbar.svelte';
  import Sidebar from './sidebar/Sidebar.svelte';
  import PhotoGrid from './photogrid/PhotoGrid.svelte';

  let sidebarActive = false;
</script>

<div>
  <Topbar bind:sidebarActive/>
  <main>
    {#if sidebarActive}
      <Sidebar/>
    {/if}
    <PhotoGrid/>
  </main>
</div>

<style>
  :global(body) {
    padding: 0px;
  }

  main {
    display: flex;
    height: 100%;
    outline: 1px solid blue;
  }

  div {
    height: 100%;
    width: 100%;

    outline: 1px solid green;
  }
</style>
