import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import GameService from "../services/game-service";

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description: string;
  description_raw: string;
  background_image: string;
  background_image_additional: string;
}
const gamesAPIClient = new GameService<GameDetails>();

const useGameDetails = (slug: string) => {
  return useQuery({
    queryKey: ["game_details", slug],
    queryFn: () => gamesAPIClient.get("/games", slug),
    staleTime: ms("24h"),
  });
};

export default useGameDetails;
