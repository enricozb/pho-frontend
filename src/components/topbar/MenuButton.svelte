<script>
  import Icon from "../icons/Icon.svelte";

  export let active = false;
</script>

<div
  on:click={() => {
    console.log("click");
    active = !active;
  }}
>
  <Icon name="menu" />
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: var(--space-1);
    border-radius: var(--radius-circle);

    fill: var(--text-color-medium);
    cursor: pointer;
  }

  div:hover {
    background: var(--text-hover-bg);
  }
</style>
