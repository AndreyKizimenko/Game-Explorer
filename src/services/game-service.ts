import apiClient from "./api-client";
import { Game, Genre, GetGamesParams, Platforms } from "./types";

// Generic Data Fetching interface
export interface FetchResponse<T>{
  count: number, 
  results: T[]
}

class GameService {
  getAllGames = (params? : GetGamesParams) => {  
    const config = params ? { params } : {};  
    return apiClient.get<FetchResponse<Game>>("/games",  config ).then((res) => res.data);    
  };

  getAllGenres = () => {
    return apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);
  };

  getAllPlatforms = () => {
    return apiClient.get<FetchResponse<Platforms>>("/platforms/lists/parents").then((res) => res.data);
  };
}

export default new GameService();
