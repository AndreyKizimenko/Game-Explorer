import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../cacheKeys";
import gameService from "../services/game-service";
import { PLATFORMS } from "../constData";

const usePlatforms = () => {
  return useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: gameService.getAllPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    placeholderData: { count: PLATFORMS.length, results: PLATFORMS },
  });

};

export default usePlatforms;
