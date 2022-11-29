import { fetchMovies } from "./actionCreators";
import storeFactory from "./storeFactory";

const store = storeFactory();

store.dispatch(fetchMovies());

export default store;
