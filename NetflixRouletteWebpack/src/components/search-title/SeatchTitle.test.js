import React from "react";
import { render } from "@testing-library/react";

import SearchTitle from "./SearchTitle";

describe("Search title component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchTitle />);

    expect(asFragment()).toMatchSnapshot();
  });
});
