<script>
  import { icons } from "./icons";

  // TODO(enricozb): change name type to include keys of icons below
  export let name;
  export let style = "";
  export let onclick = undefined;

  const icon = icons[name];
</script>

<svg
  class={$$props.class}
  width={icon.box}
  height={icon.box}
  {style}
  on:click={onclick}
  viewBox="0 0 {icon.box} {icon.box}">{@html icon.svg}</svg
>
