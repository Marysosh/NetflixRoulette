import { sortAndFilterResults } from "./actionCreators";
import storeFactory from "./storeFactory";

const store = storeFactory();

store.dispatch(sortAndFilterResults());

export default store;
