/* eslint-disable no-return-assign */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

import "./MovieDetails.scss";
import thinLogo from "./logo_thin.png";
import searchIcon from "./search_icon.png";
import ratingBorder from "./rating-frame.png";
import errorImg from "./error_image.png";
import { showMovieDetails } from "../../store/actionCreators";
import { getMovieDetails } from "../../store/selectors";

function MovieDetails({ movieDetails, showMovieDetails }) {
  const { title, genre, releaseDate, rating, runtime, image, overview } =
    movieDetails;
  const [, setSelectedMovie] = useSearchParams();

  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <div
          className="logo"
          onClick={() => {
            showMovieDetails(false);
            setSelectedMovie({});
          }}
        >
          <img src={thinLogo} alt="thin logo" />
        </div>
        <div
          className="search-icon"
          onClick={() => {
            showMovieDetails(false);
            setSelectedMovie({});
          }}
        >
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>
      <div className="movie-details-body">
        <div className="movie-details-image">
          <img
            src={image}
            alt="movie cover"
            onError={(e) => (e.target.src = errorImg)}
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

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    runtime: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
  showMovieDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    movieDetails: getMovieDetails(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMovieDetails: (value) => dispatch(showMovieDetails(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
