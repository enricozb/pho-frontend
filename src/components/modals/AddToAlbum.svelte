<script lang="ts">
</script>

<div class="row">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="album"
    height="24px"
    width="24px"
    viewBox="0 0 24 24"
    ><path d="M0 0h24v24H0V0z" fill="none" /><path
      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    /></svg
  >
  <div>New Album</div>
</div>

<style>
  div.row {
    display: flex;
    width: 100%;
    height: 50px;

    line-height: 50px;
  }

  div.row:hover {
    cursor: pointer;
    background: #eee;
  }

  svg {
    height: 50px;
    fill: #444;
  }

  .album {
    padding: 0 25px 0 25px;
  }
</style>
