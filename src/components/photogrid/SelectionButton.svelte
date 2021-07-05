<script lang="ts">
  import { selections } from "../../stores";
</script>

<div class:visible={$selections.size > 0}>
  <span class="badge">{$selections.size}</span>
  <span class="tooltip">Move to album</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
    />
  </svg>
</div>

<style>
  div {
    position: fixed;
    z-index: 1;
    top: calc(100% - 100px);
    left: calc(100% - 100px);

    display: inline-block;
    width: 60px;
    height: 60px;

    background: #6874e8;
    border-radius: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
    opacity: 0;
    text-align: center;
  }

  div.visible {
    opacity: 1;
  }

  div:hover {
    background: #4e5aca;
  }

  span.badge {
    position: absolute;
    top: -5px;
    left: 45px;

    height: 20px;
    min-width: 10px;
    line-height: 20px;
    padding-left: 5px;
    padding-right: 5px;

    pointer-events: none;

    background: #e63946;
    border: 0.5px solid #c52633;
    border-radius: 10px;
    color: white;
    font-size: 10pt;
  }

  span.tooltip {
    position: absolute;
    top: 18px;
    left: -90px;

    height: 16px;
    padding: 4px;

    pointer-events: none;

    background: #35353577;
    border-radius: 3px;
    color: white;
    font-size: 8pt;
    opacity: 0;
  }

  div:hover > span.tooltip {
    opacity: 1;
    transition-delay: 0.5s;
  }

  svg {
    width: 25px;
    height: 25px;
    margin-top: 17px;

    fill: white;
  }
</style>
