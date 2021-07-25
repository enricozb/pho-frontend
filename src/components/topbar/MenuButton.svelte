<script>
  import Icon from "../icons/Icon.svelte";

  export let active = false;
</script>

<div class:open={active} on:click={() => (active = !active)}>
  <Icon name="menu" />
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    fill: var(--text-color-medium);
    cursor: pointer;
  }

  div.open {
    background-color: red;
  }
</style>
