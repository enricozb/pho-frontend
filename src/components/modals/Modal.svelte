<script lang="ts">
  import { modal } from "../../stores";
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && modal.close()} />

<div class="bg" on:click={() => modal.close()} class:visible={$modal.component}>
  <div on:click|stopPropagation class="modal">
    <div class="top">
      <div class="top-element">{$modal?.title}</div>
      <svg
        on:click={() => modal.close()}
        class="top-element"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        width="24px"
        viewBox="0 0 24 24"
        ><path d="M0 0h24v24H0V0z" fill="none" /><path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        /></svg
      >
    </div>
  </div>
</div>

<style>
  .bg {
    z-index: 2;

    width: 100vw;
    height: 100vh;

    top: 0;
    left: 0;

    position: fixed;
    background: #000000cc;

    opacity: 0;

    pointer-events: none;
  }

  .bg.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .modal {
    position: absolute;

    height: calc(min(500px, 80%));
    width: calc(min(300px, 80%));

    top: calc(50vh - min(500px, 80%) / 2);
    left: calc(50vw - min(300px, 80%) / 2);

    margin: 0 auto;

    border-radius: 5px;
    background: white;
  }

  .top {
    display: flex;
    justify-content: space-between;

    height: 50px;
    border-bottom: 0.5px solid #ddd;
    padding: 0 20px 0 20px;
  }

  .top-element {
    font-weight: 600;
    line-height: 50px;
  }

  svg {
    height: 50px;
    fill: #444;
    cursor: pointer;
  }
</style>
