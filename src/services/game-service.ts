import axios from "axios";
import { GetGamesParams } from "./types";

// Generic Data Fetching interface
export interface FetchResponse<T>{
  count: number, 
  results: T[]
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c9209d2e42744428743b1b3ee485501"
  }
});

class GameService<T> {
  getData = (endpoint: string, params? : GetGamesParams) => {
    const config = params ? { params } : {};
    return apiClient.get<FetchResponse<T>>(endpoint,  config ).then((res) => res.data);
  };
}

export default GameService;
