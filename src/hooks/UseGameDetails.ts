import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import GameService from "../services/game-service";
import { Game } from "../entities/Game";

const gamesAPIClient = new GameService<Game>();

const useGameDetails = (slug: string) => {
  return useQuery({
    queryKey: ["game_details", slug],
    queryFn: () => gamesAPIClient.get("/games", slug),
    staleTime: ms("24h"),
  });
};

export default useGameDetails;
