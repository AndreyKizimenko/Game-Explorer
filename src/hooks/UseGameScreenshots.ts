import { useQuery } from "@tanstack/react-query";
import GameService from "../services/game-service";
import ms from "ms";
import Screenshots from "../entities/Screenshots";

const gamesAPIClient = new GameService<Screenshots>();

const UseGameScreenshots = (id: number) => {
  return useQuery({
    queryKey: ["game_screenshots", id],
    queryFn: () => gamesAPIClient.getAll(`/games/${id}/screenshots`),
    staleTime: ms("24h"),
  });
};

export default UseGameScreenshots;
