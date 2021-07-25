<script lang="ts">
  import Icon from "../icons/Icon.svelte";
</script>

<div class="row">
  <Icon
    name="plus"
    style={`
      height: var(--space-3);
      fill: var(--text-color-medium);
      padding: 0 var(--space-2) 0 var(--space-2);
    `}
  />
  <div>New Album</div>
</div>

<style>
  div.row {
    display: flex;
    width: 100%;

    height: var(--space-3);
    line-height: var(--space-3);
  }

  div.row:hover {
    cursor: pointer;
    background: var(--fill-light);
  }
</style>
