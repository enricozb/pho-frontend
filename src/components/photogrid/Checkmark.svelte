<script lang="ts">
  export let selected: boolean;
</script>

<svg class:selected xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path
    d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383
L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"
  />
</svg>

<style>
  svg.selected {
    opacity: 1;
  }

  svg {
    pointer-events: none;

    position: absolute;
    top: calc(100% - 40px);
    left: calc(100% - 40px);

    width: 24px;
    height: 24px;

    opacity: 0;

    fill: #6874e8;
    background-color: white;
    border-radius: 100px;
    border: 1px solid white;
    box-shadow: 2px 2px 5px;
  }
</style>
