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

export interface UseGames{
  gamesError?:string,
  games?: Game[];
  gamesIsLoading?: boolean;
}

export interface UseGenres{
  genresError?:string,
  genres?: Genre[];
  genresIsLoading?: boolean;
}