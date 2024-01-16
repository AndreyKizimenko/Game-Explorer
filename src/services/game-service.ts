import apiClient from "./api-client";
import { FetchResponse, Genre, GetGamesParams, Platforms } from "./types";


class GameService {
  getAllGames = (params? : GetGamesParams) => {
    const controller = new AbortController();
    const request = apiClient.get("/games",  { signal: controller.signal, params });
    return { request, cancel: () => controller.abort };
  };

  getAllGenres = () => {
    return apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);
  };

  getAllPlatforms = () => {
    return apiClient.get<FetchResponse<Platforms>>("/platforms/lists/parents").then((res) => res.data);
  };
}

export default new GameService();
