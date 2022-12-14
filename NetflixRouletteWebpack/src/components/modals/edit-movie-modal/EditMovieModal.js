/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";

import "./EditMovieModal.scss";
import crossIcon from "../close_button.png";

import GenreDropdown from "../../genre-dropdown/GenreDropdown";
import { validationParameters } from "./validationSchema";
import { MODAL_TITLES } from "../../../utils/constants";

const BASE_CLASS = "edit-movie-modal";
function EditMovieModal({
  handleEditModalOpen,
  handleMovieEdit,
  modalTitle,
  showCongratsModal,
  initialValues,
}) {
  const [selectedGenres, setSelectedGenres] = useState("");
  useEffect(() => {
    if (modalTitle === MODAL_TITLES.EDIT_MOVIE) {
      setSelectedGenres(initialValues.genre);
    }
  }, [initialValues.genre, modalTitle]);

  const formik = useFormik({
    initialValues,
    validationSchema: validationParameters,
    onSubmit: (values) => {
      if (!selectedGenres.length) {
        formik.isValidating = false;
        formik.errors.movieURL.typeError;
      }
      if (modalTitle === MODAL_TITLES.ADD_MOVIE) {
        handleMovieEdit({ ...values, genres: selectedGenres });
        showCongratsModal(true);
      } else {
        handleMovieEdit({
          ...values,
          genres: selectedGenres,
          id: initialValues.id,
        });
      }
    },
    onReset: () => {
      setSelectedGenres(
        modalTitle === MODAL_TITLES.ADD_MOVIE ? "" : initialValues.genre
      );
    },
  });
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
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
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
                onChange={formik.handleChange}
                value={formik.values.title}
                autoComplete="off"
              />
              <div className="validation-error">
                {formik.errors.title ? formik.errors.title : null}
              </div>

              <label className="label" htmlFor="movie-url">
                Movie URL
              </label>
              <input
                className="long-input"
                name="movieURL"
                type="text"
                id="movieURL"
                onChange={formik.handleChange}
                value={formik.values.movieURL}
                autoComplete="off"
              />
              <div className="validation-error">
                {formik.errors.movieURL ? formik.errors.movieURL : null}
              </div>

              <label className="label">Genre</label>
              <GenreDropdown
                setSelectedGenres={setSelectedGenres}
                selectedGenres={selectedGenres}
              />
              <div className="validation-error">
                {selectedGenres.length ? null : "Choose at least 1 genre"}
              </div>
            </div>
            <div className="right-column">
              <label className="label" htmlFor="release-date">
                Release date
              </label>
              <input
                className="short-input"
                name="releaseDate"
                type="text"
                id="releaseDate"
                onChange={formik.handleChange}
                value={formik.values.releaseDate}
                autoComplete="off"
              />
              <div className="validation-error">
                {formik.errors.releaseDate ? formik.errors.releaseDate : null}
              </div>

              <label className="label" htmlFor="rating">
                Rating
              </label>
              <input
                className="short-input"
                name="rating"
                type="text"
                id="rating"
                onChange={formik.handleChange}
                value={formik.values.rating}
                autoComplete="off"
              />
              <div className="validation-error">
                {formik.errors.rating ? formik.errors.rating : null}
              </div>

              <label className="label" htmlFor="runtime">
                Runtime
              </label>
              <input
                className="short-input"
                name="runtime"
                type="text"
                id="runtime"
                onChange={formik.handleChange}
                value={formik.values.runtime}
                autoComplete="off"
              />
              <div className="validation-error">
                {formik.errors.runtime ? formik.errors.runtime : null}
              </div>
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
              onChange={formik.handleChange}
              value={formik.values.overview}
              autoComplete="off"
            />
            <div className="validation-error">
              {formik.errors.overview ? formik.errors.overview : null}
            </div>
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
    title: PropTypes.string,
    image: PropTypes.string,
    releaseDate: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.number,
  }),
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    movieUrl: PropTypes.string,
    releaseDate: PropTypes.string,
    rating: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

EditMovieModal.defaultProps = {
  modalTitle: "Modal title",
  showCongratsModal: () => {},
  editingValues: {},
};
