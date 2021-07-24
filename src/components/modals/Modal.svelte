<script lang="ts">
  import { modal } from "../../stores";
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && modal.close()} />

<div class="bg" class:visible={$modal}>
  <div class="modal">
    <svelte:component this={$modal} />
  </div>
</div>

<style>
  div.bg {
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

  div.bg.visible {
    opacity: 1;
    pointer-events: auto;
  }

  div.modal {
    width: calc(min(400px, 80%));

    margin: 0 auto;

    border-radius: 5px;
    background: white;
  }
</style>
