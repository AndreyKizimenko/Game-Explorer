import apiClient from "./api-client";

export interface GamesParams{
  id?: number;
  page_size?: number;
  platforms?:number;
  genres?:string | number;
  metacritic?:string;
  ordering?:string;

}

class GameService {
  getAllGames = (params? : GamesParams) => {
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
