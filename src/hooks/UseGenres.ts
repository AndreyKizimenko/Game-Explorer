import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../cacheKeys";
import { GENRES } from "../constData";
import GameService from "../services/game-service";
import ms from "ms";
import Genre from "../entities/Genre";

export interface UseGenres {
  genresError?: string;
  genres?: Genre[];
  genresIsLoading?: boolean;
}

const genresAPIClient = new GameService<Genre>();

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => genresAPIClient.getData("/genres"),
    staleTime: ms("24h"),
    // initialData: { count: GENRES.length, results: GENRES },
    placeholderData: { count: GENRES.length, results: GENRES },
  });
};

export default useGenres;
