import { Game, GetGamesParams } from "../services/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import GameService from "../services/game-service";

const gamesAPIClient = new GameService<Game>();

const useGames = (parameters: GetGamesParams) => {
  return useInfiniteQuery({
    queryKey: ["games", parameters],
    queryFn: ({ pageParam = 1 }) =>
      gamesAPIClient.getData("/games", { page: pageParam, ...parameters }),
    initialPageParam: 1,
    staleTime: 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {                
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
