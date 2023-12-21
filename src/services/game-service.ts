import apiClient from "./api-client";
import { GetGamesParams } from "./types";


class GameService {
  getAllGames = (params? : GetGamesParams) => {
    const controller = new AbortController();
    const request = apiClient.get("/games",  { signal: controller.signal, params });
    return { request, cancel: () => controller.abort };
  };

  getAllGenres = () => {
    const controller = new AbortController();
    const request = apiClient.get("/genres",  { signal: controller.signal });
    return { request, cancel: () => controller.abort };
  };
}

export default new GameService();
