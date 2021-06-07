<script>
  import MenuButton from './MenuButton.svelte';
  import UploadButton from './UploadButton.svelte';

  export let sidebar_active;
</script>

<div>
  <MenuButton bind:active={sidebar_active}/>
  <UploadButton/>
</div>

<style>
  div {
    height: 50px;
    display: flex;
    justify-content: space-between;

    outline: 0.5px solid #ddd;
  }
</style>
