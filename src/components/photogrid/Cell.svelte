<script lang="ts">
  import type { FileMetadata } from "../../types/api";

  export let height: number;
  export let file: FileMetadata;
</script>

<img
  alt="a media cell"
  src={`http://localhost:4000${file.endpoints.thumb}`}
  style={`height: ${height}px`}
  on:click={() => console.log(file.id, file.dimensions.width, file.dimensions.height)}
/>

<style>
  img {
    outline: 5px solid white;
  }
</style>
