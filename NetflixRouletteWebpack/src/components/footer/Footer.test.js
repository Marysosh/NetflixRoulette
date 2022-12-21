import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render correctly", () => {
    const { getByAltText } = render(<Footer />);
    expect(getByAltText("logo")).toBeInTheDocument();
  });
});
