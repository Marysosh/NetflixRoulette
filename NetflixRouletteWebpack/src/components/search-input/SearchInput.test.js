import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import SearchInput from "./SearchInput";

describe("Search input", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <Router>
        <SearchInput />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
