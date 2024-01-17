import { Game, GetGamesParams } from "../services/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import GameService from "../services/game-service";

const gamesAPIClient = new GameService<Game>();

const useGames = (parameters: GetGamesParams) => {
  /*   return useQuery({
    queryKey: ["games", parameters],
    queryFn: () => gamesAPIClient.getData("/games", parameters),
    staleTime: 60 * 1000, // 24 hours
  }); */
  return useInfiniteQuery({
    queryKey: ["games", parameters],
    queryFn: ({ pageParam = 1 }) =>
      gamesAPIClient.getData("/games", { page: pageParam, ...parameters }),
    initialPageParam: 1,
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {                
      return lastPage.count > allPages.length * parameters.page_size ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
//