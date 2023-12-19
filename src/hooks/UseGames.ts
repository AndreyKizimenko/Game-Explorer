import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gameService from "../services/game-service";
import { AxiosResponse } from "axios";
import { GamesParams } from "../services/game-service";

export interface Game {
  id: number;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
}

const useGames = (params?: GamesParams) => {
  const [gamesError, setGamesError] = useState("");
  const [games, setGames] = useState<Game[] | undefined>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAllGames(params);
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
  }, []);

  return { gamesError, games, setGames, isLoading };
};

export default useGames;
