import axios from "axios";
import { GameQuery } from "../filterStore";

// Generic Data Fetching interface
export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c9209d2e42744428743b1b3ee485501",
  },
});

class GameService<T> {
  getData = (endpoint: string, params?: GameQuery) => {
    const config = params ? { params } : {};
    return apiClient.get<FetchResponse<T>>(endpoint, config).then((res) => res.data);
  };
  get = (endpoint: string, id: number | string) => {
    return apiClient.get<T>(endpoint + "/" + id).then((res) => res.data);
  };
  getAll = (endpoint: string) => {
    return apiClient.get<T>(endpoint).then((res) => res.data);
  };
}

export default GameService;
