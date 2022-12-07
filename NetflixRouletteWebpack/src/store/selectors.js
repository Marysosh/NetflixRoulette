export const getMovies = (state) => state.movieList.movies;

export const getAddMovieModalStatus = (state) =>
  state.modalsManagement.isAddMovieModalOpen;

export const getCongratsModalStatus = (state) =>
  state.modalsManagement.isCongratsModalOpen;

export const getEditModalStatus = (state) =>
  state.modalsManagement.isEditModalOpen;

export const getDeleteModalStatus = (state) =>
  state.modalsManagement.isDeleteModalOpen;

export const getMovieToEditId = (state) => state.modalsManagement.movieToEditId;

export const getMovieToDeleteId = (state) =>
  state.modalsManagement.movieToDeleteId;

export const getSelectedFilters = (state) => state.movieList.selectedFilters;

export const getSortingOrder = (state) => state.movieList.sortingOrder;
