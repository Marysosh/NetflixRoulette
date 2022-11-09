import React from "react";
import PropTypes from "prop-types";

import "./AddMovieModal.scss";
import crossIcon from "../close_button.png";

function AddMovieModal({ setIsOpen }) {
  return (
    <div className="add-movie-container">
      <div className="add-movie-modal">
        <button
          className="close-btn"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <img src={crossIcon} alt="close button icon" />
        </button>
      </div>
    </div>
  );
}

export default AddMovieModal;

AddMovieModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
