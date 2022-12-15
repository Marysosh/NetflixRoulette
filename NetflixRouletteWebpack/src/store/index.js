import storeFactory from "./storeFactory";

import { sortAndFilterResults } from "./actionCreators";

const store = storeFactory();

store.dispatch(sortAndFilterResults("", "", [], "", ""));

export default store;
