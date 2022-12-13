export const getMovies = (state) => state.movieList.movies;

export const getAddMovieModalStatus = (state) =>
  state.modalsManagement.isAddMovieModalOpen;

export const getCongratsModalStatus = (state) =>
  state.modalsManagement.isCongratsModalOpen;

export const getEditModalStatus = (state) =>
  state.modalsManagement.isEditModalOpen;

export const getDeleteModalStatus = (state) =>
  state.modalsManagement.isDeleteModalOpen;

export const getMovieToEdit = (state) => state.modalsManagement.movieToEdit;

export const getMovieToDeleteId = (state) =>
  state.modalsManagement.movieToDeleteId;

export const getSelectedFilters = (state) => state.movieList.selectedFilters;

export const getSortingOrder = (state) => state.movieList.sortingOrder;

export const getIsAnyModalOpen = (state) => {
  const {
    isAddMovieModalOpen,
    isEditModalOpen,
    isDeleteModalOpen,
    isCongratsModalOpen,
  } = state.modalsManagement;
  return (
    isAddMovieModalOpen ||
    isEditModalOpen ||
    isDeleteModalOpen ||
    isCongratsModalOpen
  );
};
