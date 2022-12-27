import { legacy_createStore as createStore, combineReducers } from "redux";
import { movieList, movieEdit, modalsManagement } from "../store/reducers";

export function createTestStore(initialState) {
  const store = createStore(
    combineReducers({ movieList, movieEdit, modalsManagement }, initialState)
  );
  return store;
}
