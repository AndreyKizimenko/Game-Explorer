import { useState } from "react";
import { GetGamesParams } from "../services/types";
import { useQuery } from "@tanstack/react-query";

import gameService from "../services/game-service";


const useGames = () => {
  const [parameters, setParams] = useState<GetGamesParams>({ page_size: 40 });
  const fetchGamesQuery = useQuery({
    queryKey: ["games", parameters],
    queryFn: () => gameService.getAllGames(parameters),
    staleTime: 20 * 1000,
  });

  return { parameters, setParams, fetchGamesQuery };
};

export default useGames;
