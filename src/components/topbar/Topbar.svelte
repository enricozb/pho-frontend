<script>
  import Sidebar from "./Sidebar.svelte";
  import MenuButton from "./MenuButton.svelte";
  import UploadButton from "./UploadButton.svelte";

  export let title;

  let sidebarActive;
</script>

<Sidebar bind:active={sidebarActive} />
<div class="outer">
  <div class="inner">
    <MenuButton bind:active={sidebarActive} />
    <span>
      {title}
    </span>
    <UploadButton />
  </div>
</div>

<style>
  div.outer {
    position: fixed;
    top: 0;
    left: 0;

    height: var(--space-3);
    width: 100%;

    z-index: 1;

    background-color: white;
    outline: var(--border-thin);

    padding-left: var(--space-2);
    padding-right: var(--space-2);

    user-select: none;
  }

  div.inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: calc(100% - 2 * var(--space-2));
  }
</style>
