import axios from "axios";

import type { Album } from "../types/api";

export namespace api {
  export async function getAlbums() {
    return await axios
      .get<Album[]>("http://localhost:4000/albums")
      .then((json) => json.data);
  }

  export async function newAlbum(fileIds: string[]) {
    return await axios
      .post<{ id: string }>("http://localhost:4000/albums", {
        name: "Untitled",
        files: fileIds,
      })
      .then((json) => json.data);
  }

  export async function albumCover(albumId: string) {
    return await axios
      .get<{cover?: string}>(`http://localhost:4000/albums/${albumId}/cover`)
      .then((json) => json.data);
  }
}
