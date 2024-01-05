export interface ParentPlatforms {
  platform: {
    id: number;
    name: string;
    slug: string;
  }
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

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface GetGamesParams {
  id?: number;
  page_size?: number;
  parent_platforms?: number;
  genres?: number;
  metacritic?: string;
  ordering?: string;
  search?: string;
}

export default interface GameGridProps {
  gamesError?: string;
  games?: Game[];
  gamesIsLoading?: boolean;
}

export interface UseGames extends GameGridProps {
  setParams: React.Dispatch<React.SetStateAction<GetGamesParams>>;
  parameters: GetGamesParams;
}

export interface UseGenres {
  genresError?: string;
  genres?: Genre[];
  genresIsLoading?: boolean;
}

export interface SideBarProps extends UseGenres {
  setParams: React.Dispatch<React.SetStateAction<GetGamesParams>>;
  parameters: GetGamesParams;
  setActiveGenre: React.Dispatch<React.SetStateAction<string>>;
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

export interface FiltersProps {
  my?: string;
  setParams: React.Dispatch<React.SetStateAction<GetGamesParams>>;
  parameters: GetGamesParams;
}
