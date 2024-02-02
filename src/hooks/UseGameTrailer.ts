import { useQuery } from "@tanstack/react-query";
import { Trailers } from "../entities/Trailer";
import GameService from "../services/game-service";
import ms from "ms";

const trailerAPIClient = new GameService<Trailers>();

const useGameTrailer = (id: number) => {
  return useQuery({
    queryKey: ["game_trailer", id],
    queryFn: () => trailerAPIClient.getTrailer(id),
    staleTime: ms("24h"),
  });
};

export default useGameTrailer;
