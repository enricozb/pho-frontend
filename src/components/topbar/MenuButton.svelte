<script>
  export let active = false;
</script>

<div class:open={active} on:click="{() => active = !active}"></div>

<style>
  div {
    width: 50px;
    height: 50px;
    cursor: pointer;

    background-color: green;
  }

  div.open {
    background-color: red;
  }
</style>
