<script>
  import MenuButton from "./MenuButton.svelte";
  import UploadButton from "./UploadButton.svelte";
</script>

<div>
  <MenuButton />
  <UploadButton />
</div>

<style>
  div {
    position: fixed;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;

    z-index: 1;
    background-color: white;

    outline: 0.5px solid #ddd;
  }
</style>
