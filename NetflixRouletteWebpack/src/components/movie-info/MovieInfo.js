import React from "react";
import PropTypes from "prop-types";
import "./MovieInfo.scss";

function MovieInfo({ title, genre, releaseDate }) {
  return (
    <div className="movie-info">
      <div className="movie-info-container">
        <div className="movie-info__title">{title}</div>
        <div className="movie-info__release-date">{releaseDate}</div>
      </div>
      <div className="movie-info__genre">{genre}</div>
    </div>
  );
}

export default MovieInfo;

MovieInfo.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  releaseDate: PropTypes.string,
};

MovieInfo.defaultProps = {
  title: "",
  genre: "",
  releaseDate: "",
};
