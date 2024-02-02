import { Genre } from "./Genre";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

export interface ParentPlatforms {
  platform: Platform;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  metacritic: number;
  description_raw: string;
  background_image: string;
  background_image_additional: string;  
  parent_platforms: ParentPlatforms[];
  genres: Genre[]
  publishers: Publisher[]
}
