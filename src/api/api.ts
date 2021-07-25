import axios from "axios";

import type { Album } from "../types/api";

export namespace api {
  export async function getAlbums() {
    return await axios
      .get<Album[]>("http://localhost:4000/albums")
      .then((json) => json.data);
  }
}
