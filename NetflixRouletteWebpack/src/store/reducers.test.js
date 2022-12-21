import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createTestStore } from "../utils/testUtils";

import "@testing-library/jest-dom";

import SearchPanel from "../components/search-panel/SearchPanel";

describe("Reducers testing", () => {
  describe("modalsManagement reducer", () => {
    let store;
    let searchPanel;

    describe("add movie modal", () => {
      const initialState = {
        modalsManagement: {
          isAddMovieModalOpen: false,
          isCongratsModalOpen: false,
        },
        movieList: {
          selectedFilters: [],
          sortingType: "release_date",
          sortingOrder: "desc",
        },
      };
      beforeEach(async () => {
        store = createTestStore(initialState);
        searchPanel = render(
          <Provider store={store}>
            <Router>
              <SearchPanel />
            </Router>
          </Provider>
        );

        const { getByText } = searchPanel;

        await userEvent.click(getByText("+ Add movie"));
      });

      it("changes state and opens modal when fires OPEN_ADD_MOVIE_MODAL action", async () => {
        const { getByText } = searchPanel;
        expect(getByText("Choose at least 1 genre")).toBeInTheDocument();
      });

      it("changes state and closes modal when fires CLOSE_ADD_MOVIE_MODAL action", async () => {
        const { getByAltText } = searchPanel;

        await userEvent.click(getByAltText("close button icon"));

        expect(
          screen.queryByText("Choose at least 1 genre")
        ).not.toBeInTheDocument();
      });
    });

    describe("congrats modal", () => {
      const initialState = {
        modalsManagement: {
          isAddMovieModalOpen: false,
          isCongratsModalOpen: false,
        },
        movieList: {
          selectedFilters: [],
          sortingType: "release_date",
          sortingOrder: "desc",
        },
      };
      beforeEach(async () => {
        store = createTestStore(initialState);
        searchPanel = render(
          <Provider store={store}>
            <Router>
              <SearchPanel />
            </Router>
          </Provider>
        );

        const { getByRole, getAllByRole, getByText } = searchPanel;

        await userEvent.click(getByText("+ Add movie"));
        await userEvent.click(
          getByRole("button", { name: "Select Genre open sign" })
        );
        await userEvent.click(getAllByRole("checkbox")[0]);
        await userEvent.click(getByRole("button", { name: "Submit" }));
      });

      it("changes state and opens modal when fires OPEN_CONGRATS_MODAL action", () => {
        const { getByText } = searchPanel;

        expect(getByText("Congratulations!")).toBeInTheDocument();
      });

      it("changes state and closes  modal when fires CLOSE_CONGRATS_MODAL action", async () => {
        const { getByAltText } = searchPanel;

        await userEvent.click(getByAltText("close button icon"));
        expect(screen.queryByText("Congratulations!")).not.toBeInTheDocument();
      });
    });
  });
});
