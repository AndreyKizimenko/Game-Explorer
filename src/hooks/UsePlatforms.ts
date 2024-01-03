import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gameService from "../services/game-service";
import { Platforms } from "../services/types";
import { AxiosResponse } from "axios";

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platforms[] | undefined>();
  const [platformsError, setPlatformsError] = useState("");
  const [platformsIsLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAllPlatforms();

    request
      .then((res: AxiosResponse<{ results: Platforms[] }>) => {
        setPlatforms(res.data.results);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setPlatformsError(err.message);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);
  return { platforms, platformsError, platformsIsLoading };
};

export default usePlatforms;
