import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import SearchPanel from "./SearchPanel";

const mockStore = configureStore([]);

describe("Search Panel component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      modalsManagement: {
        isAddMovieModalOpen: false,
        isCongratsModalOpen: false,
      },
      movieList: {
        selectedFilters: [],
        sortingType: "release_date",
        sortingOrder: "desc",
      },
    });
  });

  it("renders correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <SearchPanel />
        </Router>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
