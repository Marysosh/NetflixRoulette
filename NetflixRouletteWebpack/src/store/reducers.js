import { combineReducers } from "redux";
import ACTIONS from "./actionTypes";
import initialState from "./initialState.json";

// eslint-disable-next-line default-param-last
const movieFilters = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_RESULTS:
      return {
        ...state,
        movies: action.payload.data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ movieFilters });

export default rootReducer;
