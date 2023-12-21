export interface Game {
  id: number;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
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
  platforms?: number;
  genres?: string | number;
  metacritic?: string;
  ordering?: string;
}

export default interface GameGridProps {
  gamesError?: string;
  games?: Game[];
  gamesIsLoading?: boolean;
}

export interface UseGames extends GameGridProps {
  setSelectedGenre: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedGenre?: string | number;
  setParams: React.Dispatch<React.SetStateAction<GetGamesParams>>;
  parameters: GetGamesParams;
}

export interface UseGenres {
  genresError?: string;
  genres?: Genre[];
  genresIsLoading?: boolean;
}

export interface SideBarProps extends UseGenres {
  setSelectedGenre: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedGenre?: string | number;
  setParams: React.Dispatch<React.SetStateAction<GetGamesParams>>;
  parameters: GetGamesParams;
}
