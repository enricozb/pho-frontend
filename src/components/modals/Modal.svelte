<script lang="ts">
  import { modal } from "../../stores";
  import Icon from "../icons/Icon.svelte";
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && modal.close()} />

<div class="bg" on:click={() => modal.close()} class:visible={$modal.visible}>
  <div on:click|stopPropagation class="modal">
    <div class="top">
      <div>{$modal?.title}</div>
      <div class="close" on:click={() => modal.close()}>
        <Icon
          name="close"
          style={`
            fill: var(--text-color-medium);
          `}
        />
      </div>
    </div>
    <div class="content">
      <svelte:component this={$modal.component} />
    </div>
  </div>
</div>

<style>
  .bg {
    z-index: 3;

    width: 100vw;
    height: 100vh;

    top: 0;
    left: 0;

    position: fixed;
    background: var(--modal-bg-light);

    opacity: 0;
    pointer-events: none;
  }

  .bg.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .modal {
    position: absolute;
    display: flex;
    flex-flow: column;

    max-height: var(--height-card);
    width: var(--width-card);

    top: calc(50vh - var(--height-card) / 2);
    left: calc(50vw - var(--width-card) / 2);

    overflow: hidden;

    margin: 0 auto;

    border-radius: var(--radius-2);
    background: white;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex: 0 0 auto;

    height: var(--space-3);

    padding-left: var(--space-2);
    padding-right: var(--space-2);

    font-weight: var(--text-weight-bold);
    border-bottom: var(--border-thin);
  }

  .content {
    overflow-y: auto;
    padding-bottom: var(--space-1);
  }

  .close {
    display: flex;
    place-items: center;

    padding: var(--space-1);
    border-radius: var(--radius-circle);

    cursor: pointer;
  }

  .close:hover {
    background: var(--text-hover-bg);
  }

  .close:hover:active {
    background: var(--text-active-bg);
  }
</style>
