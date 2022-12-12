/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import "./EditMovieModal.scss";
import crossIcon from "../close_button.png";

import GenreDropdown from "../../genre-dropdown/GenreDropdown";

const BASE_CLASS = "edit-movie-modal";
function EditMovieModal({
  handleEditModalOpen,
  handleMovieEdit,
  modalTitle,
  showCongratsModal,
}) {
  const [selectedGenres, setSelectedGenres] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "My custom title",
      movieURL:
        "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      releaseDate: "2020-10-10",
      rating: "8.0",
      runtime: "100",
      overview: "My overview",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      movieURL: Yup.string()
        .matches(
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
          "Add valid URL"
        )
        .required("Movie URL is required")
        .typeError("Movie URL must be valid"),
      releaseDate: Yup.string()
        .matches(
          /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/,
          "Use this format: YYYY-MM-DD"
        )
        .required("Release date is required"),
      rating: Yup.number().typeError("Rating must be a number"),
      runtime: Yup.number().typeError("Runtime must be a number"),
      overview: Yup.string().required("Overview is required"),
    }),
    onSubmit: (values) => {
      if (modalTitle === "Add movie") {
        handleMovieEdit({ ...values, genres: selectedGenres });
        showCongratsModal(true);
      } else {
        alert(JSON.stringify(values, null, 2));
      }
    },
    onReset: () => {
      setSelectedGenres([]);
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
              <GenreDropdown setSelectedGenres={setSelectedGenres} />
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
