/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./EditMovieModal.scss";
import crossIcon from "../close_button.png";

import GenreDropdown from "../../genre-dropdown/GenreDropdown";

const BASE_CLASS = "edit-movie-modal";

const placeHolders = {
  titlePlaceholder: "Moana",
  movieUrlPlaceholder: "https://",
  releaseDatePlaceholder: "Select Date",
  ratingPlaceholder: "7.8",
  runtimePlaceholder: "minutes",
  overviewPlaceholder: "Movie description",
};
function EditMovieModal({
  handleEditModalOpen,
  handleMovieEdit,
  modalTitle,
  showCongratsModal,
  editingValues,
}) {
  const [selectedGenres, setSelectedGenres] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    handleMovieEdit({
      title: data.get("title"),
      genre: selectedGenres,
      releaseDate: data.get("release-date"),
      rating: data.get("rating"),
      runtime: data.get("runtime"),
      image: data.get("movie-url"),
      overview: data.get("overview"),
    });

    if (modalTitle === "Add movie") {
      showCongratsModal(true);
    }
  };

  const {
    titlePlaceholder,
    movieUrlPlaceholder,
    releaseDatePlaceholder,
    ratingPlaceholder,
    runtimePlaceholder,
    overviewPlaceholder,
  } = placeHolders;
  const {
    titleValue,
    movieUrlValue,
    releaseDateValue,
    ratingValue,
    runtimeValue,
    overviewValue,
  } = editingValues;
  return (
    <div className="edit-movie-container">
      <div className={`${BASE_CLASS}`}>
        <button
          className={`${BASE_CLASS}-close-btn`}
          type="button"
          onClick={() => handleEditModalOpen(false)}
        >
          <img src={crossIcon} alt="close button icon" />
        </button>
        <div className={`${BASE_CLASS}-title`}>{modalTitle}</div>
        <form
          className={`${BASE_CLASS}-inputs-container`}
          onSubmit={onFormSubmit}
        >
          <div className="columns">
            <div className="left-column">
              <label className="label" htmlFor="title">
                Title
              </label>
              <input
                className="long-input"
                name="title"
                type="text"
                id="title"
                placeholder={titlePlaceholder}
                defaultValue={titleValue}
                autoComplete="off"
              />
              <label className="label" htmlFor="movie-url">
                Movie URL
              </label>
              <input
                className="long-input"
                name="movie-url"
                type="text"
                id="movie-url"
                placeholder={movieUrlPlaceholder}
                defaultValue={movieUrlValue}
                autoComplete="off"
              />
              <label className="label">Genre</label>
              <GenreDropdown setSelectedGenres={setSelectedGenres} />
            </div>
            <div className="right-column">
              <label className="label" htmlFor="release-date">
                Release date
              </label>
              <input
                className="short-input"
                name="release-date"
                type="text"
                id="release-date"
                placeholder={releaseDatePlaceholder}
                defaultValue={releaseDateValue}
                autoComplete="off"
              />

              <label className="label" htmlFor="rating">
                Rating
              </label>
              <input
                className="short-input"
                name="rating"
                type="text"
                id="rating"
                placeholder={ratingPlaceholder}
                defaultValue={ratingValue}
                autoComplete="off"
              />

              <label className="label" htmlFor="runtime">
                Runtime
              </label>
              <input
                className="short-input"
                name="runtime"
                type="text"
                id="runtime"
                placeholder={runtimePlaceholder}
                defaultValue={runtimeValue}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="overview">
            <label className="label" htmlFor="overview">
              Overview
            </label>
            <textarea
              className="textarea-input"
              name="overview"
              type="text"
              id="overview"
              placeholder={overviewPlaceholder}
              defaultValue={overviewValue}
              autoComplete="off"
            />
          </div>
          <div className="form-buttons">
            <input className="reset-button" type="reset" value="Reset" />
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditMovieModal;

EditMovieModal.propTypes = {
  handleEditModalOpen: PropTypes.func.isRequired,
  handleMovieEdit: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
  showCongratsModal: PropTypes.func,
  editingValues: PropTypes.shape({
    titleValue: PropTypes.string,
    movieUrlValue: PropTypes.string,
    releaseDateValue: PropTypes.string,
    ratingValue: PropTypes.string,
    runtimeValue: PropTypes.string,
    overviewValue: PropTypes.string,
  }),
};

EditMovieModal.defaultProps = {
  modalTitle: "Modal title",
  showCongratsModal: () => {},
  editingValues: {},
};
