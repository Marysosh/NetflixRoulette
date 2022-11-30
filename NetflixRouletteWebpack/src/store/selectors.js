export const getMovies = (state) => state.movieList.movies;

export const getEditModalStatus = (state) =>
  state.modalsManagement.isEditModalOpen;

export const getDeleteModalStatus = (state) =>
  state.modalsManagement.isDeleteModalOpen;

export const getMovieToEditId = (state) => state.modalsManagement.movieToEditId;

export const getMovieToDeleteId = (state) =>
  state.modalsManagement.movieToDeleteId;

export const getSelectedFilters = (state) => state.movieList.selectedFilters;
