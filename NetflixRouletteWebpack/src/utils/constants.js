export const FILTER_NAMES = {
  ALL: "All",
  DOCUMENTARY: "Documentary",
  COMEDY: "Comedy",
  HORROR: "Horror",
  CRIME: "Crime",
};

export const genreArray = [
  FILTER_NAMES.CRIME,
  FILTER_NAMES.DOCUMENTARY,
  FILTER_NAMES.HORROR,
  FILTER_NAMES.COMEDY,
];

export const genresFilters = [
  { filterName: FILTER_NAMES.ALL, id: "f0", isSelected: true },
  { filterName: FILTER_NAMES.DOCUMENTARY, id: "f1", isSelected: false },
  { filterName: FILTER_NAMES.COMEDY, id: "f2", isSelected: false },
  { filterName: FILTER_NAMES.HORROR, id: "f3", isSelected: false },
  { filterName: FILTER_NAMES.CRIME, id: "f4", isSelected: false },
];
