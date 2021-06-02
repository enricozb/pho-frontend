<script>
  import MenuButton from './MenuButton.svelte';
  export let sidebarActive;
</script>

<div>
  <MenuButton bind:active={sidebarActive}/>
</div>

<style>
  div {
    height: 50px;
    display: flex;

    outline: 0.5px solid #ddd;
  }
</style>
