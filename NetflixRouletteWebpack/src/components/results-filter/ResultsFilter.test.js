import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createTestStore } from "../../utils/testUtils";

import "@testing-library/jest-dom";
import "jest-environment-jsdom";

import ResultsFilter from "./ResultsFilter";

const mockedStore = {
  sortingOrder: "desc",
  sortingType: "vote_average",
  selectedFilters: [],
};

const resultsFilterProps = {
  genresFilterArray: [
    { filterName: "All", id: "f0", isSelected: true },
    { filterName: "Documentary", id: "f1", isSelected: false },
    { filterName: "Comedy", id: "f2", isSelected: false },
    { filterName: "Horror", id: "f3", isSelected: false },
    { filterName: "Crime", id: "f4", isSelected: false },
  ],
  setSelectedFilters: jest.fn((newFilters) => newFilters),
  sortAndFilterResults: jest.fn(
    (sortType, sortOrder, selectedFilters, searchQuery, searchBy) => ({
      sortType,
      sortOrder,
      selectedFilters,
      searchQuery,
      searchBy,
    })
  ),
};

describe("Results filter", () => {
  let store;
  let resultsFilter;

  beforeEach(() => {
    store = createTestStore(mockedStore);
    resultsFilter = render(
      <Provider store={store}>
        <Router>
          <ResultsFilter
            genresFilterArray={resultsFilterProps.genresFilterArray}
            setSelectedFilters={resultsFilterProps.setSelectedFilters}
          />
        </Router>
      </Provider>
    );
  });

  it("should display filters from provided Array", () => {
    const { getByRole } = resultsFilter;

    expect(getByRole("button", { name: "Crime" })).toBeInTheDocument();
  });

  it("should choose all filter if others are deselected", async () => {
    const { getByRole, getAllByRole } = resultsFilter;

    await userEvent.click(getByRole("button", { name: "Crime" }));
    await userEvent.click(getByRole("button", { name: "Crime" }));

    const allFilter = getAllByRole("listitem").find(
      (li) => li.textContent === "All"
    );

    expect(allFilter).toHaveClass("results-filter-item__selected");
  });

  it("should select filters on click", async () => {
    const { getByRole, getAllByRole } = resultsFilter;

    await userEvent.click(getByRole("button", { name: "Crime" }));
    await userEvent.click(getByRole("button", { name: "Comedy" }));

    const crimeFilter = getAllByRole("listitem").find(
      (li) => li.textContent === "Crime"
    );
    const comedyFilter = getAllByRole("listitem").find(
      (li) => li.textContent === "Comedy"
    );

    expect(crimeFilter).toHaveClass("results-filter-item__selected");
    expect(comedyFilter).toHaveClass("results-filter-item__selected");
  });
});
