import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gameService from "../services/game-service";
import { AxiosResponse } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => {
  const [genresError, setGenresError] = useState("");
  const [genres, setGenres] = useState<Genre[] | undefined>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAllGenres();
    request
      .then((res: AxiosResponse<{ results: Genre[] }>) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setGenresError(err.message);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);
  return { genresError, genres, setGenres, setGenresError, isLoading };
};

export default useGenres;
