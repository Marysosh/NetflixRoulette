import React from "react";
import PropTypes from "prop-types";

import "./DeleteMovieModal.scss";
import crossIcon from "../close_button.png";

function DeleteMovieModal({ handleDeleteModalOpen, handleMovieDelete }) {
  return (
    <div className="delete-movie-container">
      <div className="delete-movie-modal">
        <button
          className="close-btn"
          type="button"
          onClick={() => handleDeleteModalOpen(false)}
        >
          <img src={crossIcon} alt="close button icon" />
        </button>
        <button className="close-btn" type="button" onClick={handleMovieDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteMovieModal;

DeleteMovieModal.propTypes = {
  handleDeleteModalOpen: PropTypes.func.isRequired,
  handleMovieDelete: PropTypes.func.isRequired,
};
