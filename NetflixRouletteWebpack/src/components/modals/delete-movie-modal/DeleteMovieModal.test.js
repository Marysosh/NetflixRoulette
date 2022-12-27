import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import DeleteMovieModal from "./DeleteMovieModal";

describe("Delete movie modal", () => {
  let deleteModal;
  const handleDeleteModalClose = jest.fn();
  const handleMovieDelete = jest.fn();

  beforeEach(() => {
    deleteModal = render(
      <DeleteMovieModal
        handleDeleteModalClose={handleDeleteModalClose}
        handleMovieDelete={handleMovieDelete}
      />
    );
  });

  it("should close modal after clicking cross button", async () => {
    const { getByAltText } = deleteModal;
    await userEvent.click(getByAltText("close button icon"));

    expect(handleDeleteModalClose).toHaveBeenCalled();
  });

  it("should call handler after clicking confirm button", async () => {
    const { getByText } = deleteModal;
    await userEvent.click(getByText("Confirm"));

    expect(handleMovieDelete).toHaveBeenCalled();
  });
});
