import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import initialState from "./initialState.json";

// By default, the store will be initialized
// with all the default state variables passed to reducers.
// If you pass your own initial state to createStore function,
// the store will be initialized with the passed state.
const storeFactory = () =>
  applyMiddleware(thunk)(createStore)(rootReducer, initialState);

export default storeFactory;
