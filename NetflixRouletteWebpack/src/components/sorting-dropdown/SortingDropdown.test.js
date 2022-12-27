import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createTestStore } from "../../utils/testUtils";

import "@testing-library/jest-dom";

import SortingDropdown from "./SortingDropdown";

const mockedStore = {
  sortingOrder: "desc",
  sortingType: "vote_average",
  selectedFilters: [],
};

describe("Sorting dropdown", () => {
  let store;
  beforeEach(() => {
    store = createTestStore({ ...mockedStore });
  });
  it("should open dropdown ontoggle button click", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <SortingDropdown />
      </Provider>
    );

    await userEvent.click(getByText("Rating"));
    expect(getByText("Release date")).toBeInTheDocument();
  });

  it("should change toggle button label after choosing dropdown option", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <SortingDropdown />
      </Provider>
    );

    await userEvent.click(getByText("Rating"));
    await userEvent.click(getByText("Release date"));

    expect(screen.queryByText("Rating")).not.toBeInTheDocument();
    expect(getByText("Release date")).toBeInTheDocument();

    await userEvent.click(getByText("Release date"));
    await userEvent.click(getByText("Rating"));
  });

  it("should delete chosen element from dropdown list", async () => {
    const { getByText, getAllByRole } = render(
      <Provider store={store}>
        <SortingDropdown />
      </Provider>
    );

    await userEvent.click(getByText("Rating"));
    await userEvent.click(getByText("Release date"));
    await userEvent.click(getByText("Release date"));

    expect(
      getAllByRole("listitem").find((li) => li.name === "Release date")
    ).toBeUndefined();

    await userEvent.click(getByText("Rating"));
  });

  it("should change sorting order from desc to asc on click", async () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <SortingDropdown />
      </Provider>
    );

    await userEvent.click(getByAltText("descSign"));

    expect(getByAltText("ascSign")).toBeInTheDocument();
  });

  it("should change sorting order from asc to desc on click", async () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <SortingDropdown />
      </Provider>
    );

    await userEvent.click(getByAltText("descSign"));
    await userEvent.click(getByAltText("ascSign"));

    expect(getByAltText("descSign")).toBeInTheDocument();
  });
});
