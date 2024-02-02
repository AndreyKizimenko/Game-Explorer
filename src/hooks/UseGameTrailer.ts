import { useQuery } from "@tanstack/react-query";
import { Trailers } from "../entities/Trailer";
import GameService from "../services/game-service";
import ms from "ms";

const gamesAPIClient = new GameService<Trailers>();

const useGameTrailer = (id: number) => {
  return useQuery({
    queryKey: ["game_trailer", id],
    queryFn: () => gamesAPIClient.getAll(`/games/${id}/movies`),
    staleTime: ms("24h"),
  });
};

export default useGameTrailer;
