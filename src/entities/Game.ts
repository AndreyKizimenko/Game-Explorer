interface Platform {
  id: number;
  name: string;
  slug: string;
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
}
