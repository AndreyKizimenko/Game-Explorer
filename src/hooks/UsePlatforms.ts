import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../cacheKeys";
import { PLATFORMS } from "../constData";
import GameService from "../services/game-service";
import ms from "ms";
export interface Platforms {
  id: number;
  name: string;
}
export interface UsePlatforms {
  platforms?: Platforms[];
  platformsError?: string;
  platformsIsLoading?: boolean;
}

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
