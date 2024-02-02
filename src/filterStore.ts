import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface GameQuery {
  id?: number;
  page?: number;
  page_size: number;
  parent_platforms?: number;
  genres?: number;
  metacritic?: string;
  ordering?: string;
  search?: string;
  search_precise?: boolean;
}

interface FilterStore {
  filterParameters: GameQuery;
  setParent_platforms: (platform: number | undefined) => void;
  setGenres: (genre: number | undefined) => void;
  setOrdering: (order: string | undefined) => void;
  setSearch: (search: string) => void;
}

const useFiltersStore = create<FilterStore>((set) => ({
  filterParameters: { page_size: 20, search_precise: true },
  setParent_platforms: (platform) =>
    set((store) => ({
      filterParameters: { ...store.filterParameters, parent_platforms: platform },
    })),
  setGenres: (genre) =>
    set((store) => ({ filterParameters: { ...store.filterParameters, genres: genre } })),
  setOrdering: (order) =>
    set((store) => ({ filterParameters: { ...store.filterParameters, ordering: order } })),
  setSearch: (search) =>
    set(() => ({ filterParameters: { page_size: 20, search_precise: true, search: search } })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Filter Store", useFiltersStore);
}

export default useFiltersStore;

/* interface FilterStore {
  filterParams: GameQuery;
  setFilterParams: (filter: Partial<FilterStore["filterParams"]>) => void;
}

create<FilterStore>((set) => ({
  filterParams: { page_size: 20 },
  setFilterParams: (filter) =>
    set((store) => ({ filterParams: { ...store.filterParams, ...filter } })),
}));
 */
