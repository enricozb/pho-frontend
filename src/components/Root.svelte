<script lang="ts">
  import Topbar from './topbar/Topbar.svelte';
  import Sidebar from './sidebar/Sidebar.svelte';

  let sidebarActive = false;
</script>

<main>
  <Topbar bind:sidebarActive/>
  {#if sidebarActive}
    <Sidebar/>
  {/if}
</main>

<style>
  :global(body) {
    padding: 0px;
  }

  main {
    height: 100%;
    width: 100%;

    outline: 1px solid green;
  }
</style>
