import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";

import "@testing-library/jest-dom";

import SearchResultsPanel from "./SearchResultsPanel";

const mockedStore = {
  movieList: {
    movies: [
      {
        genre: "Action & Adventure",
        id: 10,
        image: "http://localhost:8080/c8a8e2d591a5758d2542.png",
        overview: "badibclaidhbc libc ileabc i;b e;v",
        rating: 9.1,
        releaseDate: "2004",
        runtime: "246 min",
        title: "Pulp Fiction",
      },
    ],
  },
  modalsManagement: {
    isEditModalOpen: false,
  },
};

describe("Search results panel", () => {
  let store;
  beforeEach(() => {
    store = configureMockStore()(mockedStore);
  });

  it("should open edit movie dropdown with edit and delete buttons on options icon click", async () => {
    const { getByAltText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <SearchResultsPanel
            setIsModalOpen={jest.fn()}
            setIsMovieDetailsOpen={jest.fn()}
          />
        </Router>
      </Provider>
    );

    await userEvent.hover(getByAltText("movie-card-image"));
    await userEvent.click(getByAltText("options icon"));

    expect(getByRole("button", { name: "Edit" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });

  it("should show movie title, genre and release date in movie card", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <SearchResultsPanel
            setIsModalOpen={jest.fn()}
            setIsMovieDetailsOpen={jest.fn()}
          />
        </Router>
      </Provider>
    );

    expect(getByText("Pulp Fiction")).toBeInTheDocument();
    expect(getByText("Action & Adventure")).toBeInTheDocument();
    expect(getByText("2004")).toBeInTheDocument();
  });

  it("should show Edit movie modal when isEditMovieModalOpen in state", () => {
    const mockedStore = {
      movieList: {
        movies: [
          {
            genre: "Documentary",
            id: 10,
            image: "http://localhost:8080/c8a8e2d591a5758d2542.png",
            overview: "badibclaidhbc libc ileabc i;b e;v",
            rating: 9.1,
            releaseDate: "2004",
            runtime: "246 min",
            title: "Pulp Fiction",
          },
        ],
      },
      modalsManagement: {
        isEditModalOpen: true,
        movieToEdit: {
          genre: "Drama, Romance",
          id: 337167,
          image:
            "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          overview: "Believing they have left behind shadowy ",
          rating: 6.1,
          releaseDate: "2018-02-07",
          runtime: 106,
          title: "Fifty Shades Freed",
        },
      },
    };
    store = configureMockStore()(mockedStore);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <SearchResultsPanel
            setIsModalOpen={jest.fn()}
            setIsMovieDetailsOpen={jest.fn()}
          />
        </Router>
      </Provider>
    );

    expect(getByText("Edit movie")).toBeInTheDocument();
  });

  it("should show Delete movie modal when isDeleteModalOpen in state", () => {
    const mockedStore = {
      movieList: {
        movies: [
          {
            genre: "Documentary",
            id: 10,
            image: "http://localhost:8080/c8a8e2d591a5758d2542.png",
            overview: "badibclaidhbc libc ileabc i;b e;v",
            rating: 9.1,
            releaseDate: "2004",
            runtime: "246 min",
            title: "Pulp Fiction",
          },
        ],
      },
      modalsManagement: {
        isDeleteModalOpen: true,
      },
    };
    store = configureMockStore()(mockedStore);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <SearchResultsPanel
            setIsModalOpen={jest.fn()}
            setIsMovieDetailsOpen={jest.fn()}
          />
        </Router>
      </Provider>
    );

    expect(getByText("Delete movie")).toBeInTheDocument();
  });
});
