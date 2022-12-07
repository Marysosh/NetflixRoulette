/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import { combineReducers } from "redux";
import ACTIONS from "./actionTypes";
import initialState from "./initialState.json";

const movieList = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_RESULTS:
      const parsedMovies = action.payload.data.map((movieInfo) => ({
        title: movieInfo.title,
        image: movieInfo.poster_path,
        releaseDate: movieInfo.release_date,
        rating: movieInfo.vote_average,
        runtime: `${movieInfo.runtime} min`,
        genre: movieInfo.genres.join(", "),
        overview: movieInfo.overview,
        id: movieInfo.id,
      }));

      return {
        ...state,
        movies: parsedMovies,
      };
    case ACTIONS.SET_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: action.payload,
      };
    case ACTIONS.SET_FILTERED_RESULTS:
      const parsedMovies1 = action.payload.data.map((movieInfo) => ({
        title: movieInfo.title,
        image: movieInfo.poster_path,
        releaseDate: movieInfo.release_date,
        rating: movieInfo.vote_average,
        runtime: `${movieInfo.runtime} min`,
        genre: movieInfo.genres.join(", "),
        overview: movieInfo.overview,
        id: movieInfo.id,
      }));
      return {
        ...state,
        movies: parsedMovies1,
      };
    case ACTIONS.CHANGE_SORTING_ORDER:
      return {
        ...state,
        sortingOrder: action.payload,
      };
    default:
      return state;
  }
};

const movieEdit = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.DELETE_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

const modalsManagement = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_ADD_MOVIE_MODAL:
      return {
        ...state,
        isAddMovieModalOpen: true,
      };
    case ACTIONS.CLOSE_ADD_MOVIE_MODAL:
      return {
        ...state,
        isAddMovieModalOpen: false,
      };
    case ACTIONS.OPEN_CONGRATS_MODAL:
      return {
        ...state,
        isCongratsModalOpen: true,
      };
    case ACTIONS.CLOSE_CONGRATS_MODAL:
      return {
        ...state,
        isCongratsModalOpen: false,
      };
    case ACTIONS.OPEN_EDIT_MODAL:
      return {
        ...state,
        isEditModalOpen: true,
      };
    case ACTIONS.CLOSE_EDIT_MODAL:
      return {
        ...state,
        isEditModalOpen: false,
      };
    case ACTIONS.ADD_MOVIE_TO_EDIT:
      return {
        ...state,
        movieToEditId: action.payload,
      };
    case ACTIONS.OPEN_DELETE_MODAL:
      return {
        ...state,
        isDeleteModalOpen: true,
      };
    case ACTIONS.CLOSE_DELETE_MODAL:
      return {
        ...state,
        isDeleteModalOpen: false,
      };
    case ACTIONS.ADD_MOVIE_TO_DELETE:
      return {
        ...state,
        movieToDeleteId: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ movieList, movieEdit, modalsManagement });

export default rootReducer;
