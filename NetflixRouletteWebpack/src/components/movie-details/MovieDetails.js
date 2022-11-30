/* eslint-disable no-return-assign */
import React from "react";
import PropTypes from "prop-types";

import "./MovieDetails.scss";
import thinLogo from "./logo_thin.png";
import searchIcon from "./search_icon.png";
import ratingBorder from "./rating-frame.png";
import errorImg from "./error_image.png";

function MovieDetails({ movieInfo, showMovieDetailsHandler }) {
  const { title, genre, releaseDate, rating, runtime, image, overview } =
    movieInfo;
  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <div className="logo" onClick={() => showMovieDetailsHandler()}>
          <img src={thinLogo} alt="thin logo" />
        </div>
        <div className="search-icon" onClick={() => showMovieDetailsHandler()}>
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>
      <div className="movie-details-body">
        <div className="movie-details-image">
          <img
            src={image}
            alt="movie cover"
            onError={(e) =>
              (e.target.onerror = null)((e.target.src = errorImg))
            }
          />
        </div>
        <div className="movie-details-info">
          <div className="movie-header">
            <div className="movie-title">{title}</div>
            <div className="movie-rating">
              <img
                className="rating-border"
                src={ratingBorder}
                alt="rating border"
              />
              {rating}
            </div>
          </div>
          <div className="movie-genre">{genre}</div>
          <div className="movie-release-runtime-container">
            <div className="release-date">{releaseDate}</div>
            <div className="runtime">{runtime || "-"}</div>
          </div>
          <div className="movie-overview">{overview}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
  showMovieDetailsHandler: PropTypes.func.isRequired,
};
