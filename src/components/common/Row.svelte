<script lang="ts">
  export let text: string;
  export let onclick: () => void;
</script>

<div class="row" on:click={() => onclick()}>
  <div class="image">
    <slot />
  </div>
  <div>
    {text}
  </div>
  <div class="right-button">
    <slot name="right-button" />
  </div>
</div>

<style>
  div.row {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    --padding: var(--space-2);

    gap: var(--space-2);

    height: var(--space-3);
    width: calc(100% - var(--padding));
    line-height: var(--padding);

    padding-left: var(--padding);

    cursor: pointer;
    user-select: none;

    transition: all 0s;
  }

  div.row:hover {
    background: var(--text-hover-bg);
  }

  div.image {
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(var(--space-3) - var(--space-2) / 2);
    width: calc(var(--space-3) - var(--space-2) / 2);

    border-radius: var(--radius-2);

    overflow: hidden;
  }

  div.right-button {
    display: flex;
    justify-content: flex-end;
    padding-right: var(--space-1);

    flex: 1;

    opacity: 0;
  }

  div.row:hover > div.right-button {
    opacity: 1;
  }
</style>
