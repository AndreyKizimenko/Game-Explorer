import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gameService from "../services/game-service";
import { AxiosResponse } from "axios";
import { Genre } from "../services/types";


const useGenres = () => {
  const [genresError, setGenresError] = useState("");
  const [genres, setGenres] = useState<Genre[] | undefined>();
  const [genresIsLoading, setLoading] = useState(false);

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
  return { genresError, genres, setGenres, setGenresError, genresIsLoading };
};

export default useGenres;
