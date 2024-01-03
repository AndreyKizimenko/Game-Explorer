
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
  genres?: number;
  metacritic?: string;
  ordering?: string;
  
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
