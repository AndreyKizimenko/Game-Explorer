import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gameService from "../services/game-service";
import { AxiosResponse } from "axios";
import { Game, GetGamesParams } from "../services/types";

const useGames = () => {
  const [gamesError, setGamesError] = useState("");
  const [games, setGames] = useState<Game[] | undefined>();
  const [gamesIsLoading, setLoading] = useState(false);  
  const [parameters, setParams] = useState<GetGamesParams>({page_size: 40});

  useEffect(() => {
    setLoading(true);
    setGames([])
    const { request, cancel } = gameService.getAllGames(parameters);
    request
      .then((res: AxiosResponse<{ results: Game[] }>) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setGamesError(err.message);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, [parameters]);

  return { gamesError, games, setGames, gamesIsLoading, parameters, setParams };
};

export default useGames;
