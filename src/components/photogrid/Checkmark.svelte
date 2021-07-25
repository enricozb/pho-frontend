<script lang="ts">
  import Icon from "../icons/Icon.svelte";

  export let selected: boolean;
</script>

<Icon
  name="checkmark"
  style={`
    pointer-events: none;

    position: absolute;
    top: calc(100% - var(--space-3));
    left: calc(100% - var(--space-3));

    width: var(--space-2);
    height: var(--space-2);

    fill: var(--purple-dark);
    background-color: white;

    border-radius: var(--radius-circle);
    border: var(--border-icon);
    box-shadow: var(--shadow-card);

    opacity: ${selected ? 1 : 0};
`}
/>
