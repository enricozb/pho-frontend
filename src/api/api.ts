import axios from "axios";

import type { Album, FileMetadata } from "../types/api";

export namespace api {
  export async function renameAlbum(albumId: string, name: string) {
    return await axios
      .post(`http://localhost:4000/albums/${albumId}`, { name })
      .then((json) => json.data);
  }

  export async function allMedia() {
    return await axios
      .get<{ [date: string]: FileMetadata[] }>(
        "http://localhost:4000/files/all"
      )
      .then((json) => json.data);
  }

  export async function getAlbums() {
    return await axios
      .get<Pick<Album, "id" | "name">[]>("http://localhost:4000/albums")
      .then((json) => json.data);
  }

  export async function newAlbum(fileIds: string[]) {
    return await axios
      .post<Pick<Album, "id">>("http://localhost:4000/albums", {
        name: "Untitled",
        files: fileIds,
      })
      .then((json) => json.data);
  }

  export async function albumCover(albumId: string) {
    return await axios
      .get<{ cover?: string }>(`http://localhost:4000/albums/${albumId}/cover`)
      .then((json) => json.data);
  }

  export async function albumData(albumId: string) {
    return await axios
      .get<Album>(`http://localhost:4000/albums/${albumId}`)
      .then((json) => json.data);
  }
}
