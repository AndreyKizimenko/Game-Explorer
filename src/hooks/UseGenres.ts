import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../cacheKeys";
import gameService from "../services/game-service";
import { GENRES } from "../constData";

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: gameService.getAllGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: GENRES.length, results: GENRES },
    placeholderData: { count: GENRES.length, results: GENRES },
  });

};

export default useGenres;
