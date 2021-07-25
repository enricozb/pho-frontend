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
    display: flex;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    height: var(--space-3);
    width: 100%;

    z-index: 1;

    background-color: white;
    outline: var(--border-thin);
  }
</style>
