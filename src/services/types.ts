import { FetchResponse } from "./game-service";

// Platforms interfaces
interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface ParentPlatforms {
  platform: Platform;
}
export interface PlatformIconMap {
  [key: number]: React.ReactElement;
}

export interface Game {
  id: number;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
  parent_platforms: ParentPlatforms[];
}
export interface GetGamesParams {  
  page_size: number;
  page?: number;
  parent_platforms?: number;
  genres?: number;
  metacritic?: string;
  ordering?: string;
  search?: string;
}
export default interface GameGridProps {
  gamesError?: string;
  gamesData?: FetchResponse<Game>[];
  gamesIsLoading?: boolean;

}
export interface QueryParameters {
  parameters: GetGamesParams;
  setParams: React.Dispatch<React.SetStateAction<GetGamesParams>>;
  
}
export interface FiltersProps {
  my?: string;
}

// Old hook interfaces
export interface UseGenres {
  genresError?: string;
  genres?: Genre[];
  genresIsLoading?: boolean;
}
export interface Platforms {
  id: number;
  name: string;
}
export interface UsePlatforms {
  platforms?: Platforms[];
  platformsError?: string;
  platformsIsLoading?: boolean;
}
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background: string;
}
