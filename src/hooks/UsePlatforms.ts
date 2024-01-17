import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../cacheKeys";
import { PLATFORMS } from "../constData";
import { Platforms } from "../services/types";
import GameService from "../services/game-service";
import ms from "ms";
const platformsAPIClient = new GameService<Platforms>();

const usePlatforms = () => {
  return useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => platformsAPIClient.getData("/platforms/lists/parents"),
    staleTime: ms("24h"),
    //initialData: { count: PLATFORMS.length, results: PLATFORMS },
    placeholderData: { count: PLATFORMS.length, results: PLATFORMS },
  });
};

export default usePlatforms;
