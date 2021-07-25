<script lang="ts">
  import { modal, selections } from "../../stores";
  import { AddToAlbum } from "../modals";
  import Icon from "../icons/Icon.svelte";
</script>

<div
  class:visible={$selections.size > 0}
  class="button"
  on:click={() => modal.show("Add to Album", AddToAlbum)}
>
  <div class="badge">{$selections.size}</div>
  <div class="tooltip">
    Move {$selections.size} item{$selections.size > 1 ? "s" : ""}
  </div>
  <Icon
    name="move_to"
    style={`
      width: var(--space-2);
      height: var(--space-2);
      margin-top: var(--space-1);
      fill: white;
    `}
  />
</div>

<style>
  div.button {
    position: fixed;
    z-index: 1;
    top: calc(100% - var(--space-4));
    left: calc(100% - var(--space-4));

    display: inline-block;
    width: var(--floating-button-size);
    height: var(--floating-button-size);

    background: var(--purple-dark);
    border-radius: var(--radius-circle);
    box-shadow: var(--shadow-card);
    cursor: pointer;
    opacity: 0;
    text-align: center;
  }

  div.visible {
    opacity: 1;
  }

  div.button:hover {
    background: var(--purple-dark-hover);
  }

  div.badge {
    position: absolute;
    top: calc(var(--floating-button-badge-size) / -4);
    left: calc(
      var(--floating-button-size) - 3 * var(--floating-button-badge-size) / 4
    );

    height: var(--floating-button-badge-size);
    line-height: var(--floating-button-badge-size);

    min-width: calc(var(--floating-button-badge-size) / 2);
    padding-left: calc(var(--floating-button-badge-size) / 4);
    padding-right: calc(var(--floating-button-badge-size) / 4);

    background: var(--red-light);
    border-radius: var(--radius-circle);
    color: white;
    font-size: var(--text-size-2);

    pointer-events: none;
  }

  div.tooltip {
    position: absolute;
    top: calc(var(--floating-button-size) / 2 - var(--tooltip-height) / 2);
    right: calc(var(--floating-button-size) + var(--space-1));

    height: var(--tooltip-height);
    line-height: var(--tooltip-height);

    padding-left: var(--space-min);
    padding-right: var(--space-min);

    background: var(--modal-bg-light);
    border-radius: var(--radius-2);
    color: white;
    font-size: var(--text-size-1);
    white-space: nowrap;

    opacity: 0;
    pointer-events: none;
  }

  div:hover > div.tooltip {
    opacity: 1;
    transition-delay: 0.3s;
  }
</style>
