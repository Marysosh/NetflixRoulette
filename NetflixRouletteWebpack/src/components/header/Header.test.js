import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

import "@testing-library/jest-dom";

import Header from "./Header";

const mockedStore = {
  modalsManagement: {
    isAddMovieModalOpen: false,
  },
  movieList: {
    selectedFilters: [],
  },
};

describe("Header", () => {
  let store;
  beforeEach(() => {
    store = configureMockStore()(mockedStore);
  });

  it("should render logo", () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(getByAltText("logo")).toBeInTheDocument();
  });

  it("should render add movie button", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(getByRole("button", { name: "+ Add movie" })).toBeInTheDocument();
  });
});
