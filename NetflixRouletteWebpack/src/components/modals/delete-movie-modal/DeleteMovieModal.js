import React from "react";
import PropTypes from "prop-types";

import "./DeleteMovieModal.scss";
import crossIcon from "../close_button.png";
import FilledButton from "../../filled-button/FilledButton";

const BASE_CLASSNAME = "delete-movie-modal";
function DeleteMovieModal({ handleDeleteModalOpen, handleMovieDelete }) {
  return (
    <div className="delete-movie-container">
      <div className={`${BASE_CLASSNAME}`}>
        <button
          className={`${BASE_CLASSNAME}-close-btn`}
          type="button"
          onClick={() => handleDeleteModalOpen(false)}
        >
          <img src={crossIcon} alt="close button icon" />
        </button>
        <div className={`${BASE_CLASSNAME}-title`}>Delete movie</div>
        <div className={`${BASE_CLASSNAME}-message`}>
          Are you sure you want to delete this movie?
        </div>
        <FilledButton
          message="Confirm"
          className={`${BASE_CLASSNAME}-confirm-btn`}
          handler={handleMovieDelete}
        />
      </div>
    </div>
  );
}

export default DeleteMovieModal;

DeleteMovieModal.propTypes = {
  handleDeleteModalOpen: PropTypes.func.isRequired,
  handleMovieDelete: PropTypes.func.isRequired,
};
