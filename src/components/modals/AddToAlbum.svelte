<script lang="ts">
  import axios from "axios";
  import { navigate } from "svelte-navigator";

  import { modal, selections } from "../../stores";
  import Icon from "../icons/Icon.svelte";

  async function newAlbum(fileIds: string[]) {
    const { id } = await axios
      .post<{ id: string }>("http://localhost:4000/albums", {
        name: "Untitled",
        files: fileIds,
      })
      .then((json) => json.data);

    navigate(`/album/${id}`);
  }
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
  <div
    on:click={() => {
      newAlbum([...$selections]);
      modal.close();
      selections.clear();
    }}
  >
    New Album
  </div>
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
