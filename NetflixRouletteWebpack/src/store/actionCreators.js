import ACTIONS from "./actionTypes";

const BASE_URL = "http://localhost:4000";

export const apiStart = (label) => ({
  type: ACTIONS.API_START,
  payload: label,
});

export const apiEnd = (label) => ({
  type: ACTIONS.API_END,
  payload: label,
});

export const apiError = (error) => ({
  type: ACTIONS.API_ERROR,
  error,
});

const apiAction = ({
  url = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
}) => ({
  type: ACTIONS.API,
  payload: {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
  },
});

const setSearchResults = (data) => ({
  type: ACTIONS.SET_SEARCH_RESULTS,
  payload: data,
});

export const fetchMovies = () =>
  apiAction({
    url: `${BASE_URL}/movies`,
    method: "GET",
    data: { limit: 45 },
    onSuccess: setSearchResults,
    onFailure: () => {
      console.log("Error occured loading movies");
    },
    label: "FETCH_MOVIES",
  });

export const addMovieToEdit = (id) => ({
  type: ACTIONS.ADD_MOVIE_TO_EDIT,
  payload: id,
});

export const addMovieToDelete = (id) => ({
  type: ACTIONS.ADD_MOVIE_TO_DELETE,
  payload: id,
});

export const openAddMovieModal = () => ({
  type: ACTIONS.OPEN_ADD_MOVIE_MODAL,
});

export const closeAddMovieModal = () => ({
  type: ACTIONS.CLOSE_ADD_MOVIE_MODAL,
});

export const openCongratsModal = () => ({
  type: ACTIONS.OPEN_CONGRATS_MODAL,
});

export const closeCongratsModal = () => ({
  type: ACTIONS.CLOSE_CONGRATS_MODAL,
});

export const openEditModal = () => ({
  type: ACTIONS.OPEN_EDIT_MODAL,
});

export const closeEditModal = () => ({
  type: ACTIONS.CLOSE_EDIT_MODAL,
});

export const openDeleteModal = () => ({
  type: ACTIONS.OPEN_DELETE_MODAL,
});

export const closeDeleteModal = () => ({
  type: ACTIONS.CLOSE_DELETE_MODAL,
});

export const setFilteredResults = (data) => ({
  type: ACTIONS.SET_FILTERED_RESULTS,
  payload: data,
});

export const getFilteredSearchResults = (filtersArray = []) =>
  apiAction({
    url: `${BASE_URL}/movies`,
    method: "GET",
    data: { filter: `${filtersArray?.join(", ")}`, limit: 45 },
    onSuccess: setSearchResults,
    onFailure: () => {
      console.log("Error occured during filtering movies");
    },
    label: "FILTER_MOVIES",
  });

export const deleteMovie = (id) =>
  apiAction({
    url: `${BASE_URL}/movies/${id}`,
    method: "DELETE",
    data: { id },
    onSuccess: getFilteredSearchResults,
    onFailure: () => {
      console.log("Error occured during deleting movie");
    },
    label: "DELETE_MOVIE",
  });

export const setSelectedFilters = (filterArray) => ({
  type: ACTIONS.SET_SELECTED_FILTERS,
  payload: filterArray,
});

export const changeSortingOrder = (order = "desc") => ({
  type: ACTIONS.CHANGE_SORTING_ORDER,
  payload: order,
});

export const changeSortingType = (type = "vote_average", order = "desc") =>
  apiAction({
    url: `${BASE_URL}/movies`,
    method: "GET",
    data: { sortBy: type, sortOrder: order, limit: 45 },
    onSuccess: setSearchResults,
    onFailure: () => {
      console.log("Error occured during sorting type change");
    },
    label: "CHANGE_SORTING",
  });
