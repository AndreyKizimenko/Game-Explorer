import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../cacheKeys";
import { GENRES } from "../constData";
import { Genre } from "../services/types";
import GameService from "../services/game-service";

const genresAPIClient = new GameService<Genre>;

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => genresAPIClient.getData("/genres"),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    // initialData: { count: GENRES.length, results: GENRES },
    placeholderData: { count: GENRES.length, results: GENRES },
  });

};

export default useGenres;
