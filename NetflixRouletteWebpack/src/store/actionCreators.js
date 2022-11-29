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
    data: { sortBy: "vote_average", sortOrder: "asc" },
    onSuccess: setSearchResults,
    onFailure: () => {
      console.log("Error occured loading movies");
    },
    label: "FETCH_MOVIES",
  });
