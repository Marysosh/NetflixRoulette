import React from "react";
import PropTypes from "prop-types";

import "./EditMovieModal.scss";
import crossIcon from "../close_button.png";

function EditMovieModal({ handleEditModalOpen, handleMovieEdit }) {
  return (
    <div className="edit-movie-container">
      <div className="edit-movie-modal">
        <button
          className="close-btn"
          type="button"
          onClick={() => handleEditModalOpen(false)}
        >
          <img src={crossIcon} alt="close button icon" />
        </button>
        <button
          className="close-btn"
          type="button"
          onClick={() =>
            handleMovieEdit({
              title: "AAAAAAAA",
              genre: "Action & Adventure",
              releaseDate: 2004,
              id: "m1",
            })
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditMovieModal;

EditMovieModal.propTypes = {
  handleEditModalOpen: PropTypes.func.isRequired,
  handleMovieEdit: PropTypes.func.isRequired,
};
