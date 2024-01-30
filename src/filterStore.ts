import { create } from "zustand";

interface GameQuery {
  page_size: number;
  parent_platforms?: number;
  genres?: number;
  metacritic?: string;
  ordering?: string;
  search?: string;
}

interface FilterStore {
  filterParameters: GameQuery;
  setParent_platforms: (platform: number) => void;
  setGenres: (genre: number) => void;
  setOrdering: (order: string) => void;
  setSearch: (search: string) => void;
}

const useFiltersStore = create<FilterStore>((set) => ({
  filterParameters: { page_size: 20 },
  setParent_platforms: (platform) =>
    set((store) => ({
      filterParameters: { ...store.filterParameters, parent_platform: platform },
    })),
  setGenres: (genre) =>
    set((store) => ({ filterParameters: { ...store.filterParameters, genres: genre } })),
  setOrdering: (order) =>
    set((store) => ({ filterParameters: { ...store.filterParameters, ordering: order } })),
  setSearch: (search) => set(() => ({ filterParameters: { page_size: 20, search: search } })),
}));

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
