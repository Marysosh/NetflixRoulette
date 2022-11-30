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

const setSearchResults = (data) => {
  console.log(data);
  return {
    type: ACTIONS.SET_SEARCH_RESULTS,
    payload: data,
  };
};

export const fetchMovies = () =>
  apiAction({
    url: `${BASE_URL}/movies`,
    method: "GET",
    data: { limit: 12 },
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

export const deleteMovie = (id) =>
  apiAction({
    url: `${BASE_URL}/movies/${id}`,
    method: "DELETE",
    data: { id },
    onSuccess: fetchMovies,
    onFailure: () => {
      console.log("Error occured during deleting movie");
    },
    label: "DELETE_MOVIE",
  });
