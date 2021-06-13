<script lang="ts">
  import PhotoGrid from './photogrid/PhotoGrid.svelte';
  import Sidebar from './sidebar/Sidebar.svelte';
  import Topbar from './topbar/Topbar.svelte';

  let sidebar_active = false;
</script>

<div id="all">
  <Topbar bind:sidebar_active/>
  <div id="main">
    {#if sidebar_active}
      <Sidebar/>
    {/if}
    <PhotoGrid/>
  </div>
</div>

<style>
  :global(body) {
    padding: 0px;
  }

  #main {
    height: calc(100% - 50px);
  }

  #all {
    height: 100%;
    width: 100%;
  }
</style>
