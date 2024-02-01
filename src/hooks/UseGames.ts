import { useInfiniteQuery } from "@tanstack/react-query";
import GameService from "../services/game-service";
import ms from "ms";
import useFiltersStore from "../filterStore";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface ParentPlatforms {
  platform: Platform;
}
export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
  parent_platforms: ParentPlatforms[];
}

const gamesAPIClient = new GameService<Game>();
const useGames = () => {
  const parameters = useFiltersStore((s) => s.filterParameters);
  return useInfiniteQuery({
    queryKey: ["games", parameters],
    queryFn: ({ pageParam = 1 }) =>
      gamesAPIClient.getData("/games", { page: pageParam, ...parameters }),
    initialPageParam: 1,
    staleTime: ms("1h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
