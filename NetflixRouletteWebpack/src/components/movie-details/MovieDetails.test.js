import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";

import "@testing-library/jest-dom";

import MovieDetails from "./MovieDetails";

const mockedStore = {
  modalsManagement: {
    showMovieDetails: true,
    movieDetails: {
      genre: "Fantasy, Adventure, Science Fiction",
      id: 181808,
      image: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      overview: "Rey develops her newly discovered abilities",
      rating: 7.1,
      releaseDate: "2017-12-13",
      runtime: "152",
      title: "Star Wars: The Last Jedi",
    },
  },
};

describe("Movie details", () => {
  let store;
  beforeEach(() => {
    store = configureMockStore()(mockedStore);
  });

  it("should show movie details from state", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <MovieDetails />
        </Router>
      </Provider>
    );

    expect(getByText("Star Wars: The Last Jedi")).toBeInTheDocument();
    expect(getByText("2017-12-13")).toBeInTheDocument();
    expect(
      getByText("Fantasy, Adventure, Science Fiction")
    ).toBeInTheDocument();
    expect(getByText("152")).toBeInTheDocument();
    expect(getByText("7.1")).toBeInTheDocument();
    expect(
      getByText("Rey develops her newly discovered abilities")
    ).toBeInTheDocument();
  });
});
