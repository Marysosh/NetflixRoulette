import React from "react";
import PropTypes from "prop-types";

import "./AddMovieButton.scss";

function AddMovieButton(props) {
  const { onClick } = props;

  return (
    <button className="add-movie-btn" type="button" onClick={onClick}>
      + Add movie
    </button>
  );
}

export default AddMovieButton;

AddMovieButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
