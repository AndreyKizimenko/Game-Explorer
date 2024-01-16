import { useState } from "react";
import { Game, GetGamesParams } from "../services/types";
import { useQuery } from "@tanstack/react-query";

import GameService from "../services/game-service";

const gamesAPIClient = new GameService<Game>;

const useGames = () => {
  const [parameters, setParams] = useState<GetGamesParams>({ page_size: 40 });
  const fetchGamesQuery = useQuery({
    queryKey: ["games", parameters],
    queryFn: () => gamesAPIClient.getData("/games",parameters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return { parameters, setParams, fetchGamesQuery };
};

export default useGames;
