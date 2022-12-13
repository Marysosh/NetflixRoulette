import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setMovieDetails, showMovieDetails } from "../../store/actionCreators";

import "./MovieCard.scss";

import MovieInfo from "../movie-info/MovieInfo";
import EditMovieDropdown from "../edit-movie-dropdown/EditMovieDropdown";
import scrollTop from "../../utils/scrollTop";
import errorImg from "./error_image.png";

function MovieCard({ movieInfo, setMovieDetails, showMovieDetails }) {
  const { title, genre, releaseDate, image, id } = movieInfo;

  return (
    <div
      className="movie-card"
      id={id}
      onClick={() => {
        setMovieDetails(movieInfo);
        showMovieDetails(true);
        scrollTop();
      }}
    >
      <EditMovieDropdown id={id} />
      <img
        className="movie-card-image"
        src={image}
        alt={errorImg}
        // eslint-disable-next-line no-return-assign
        onError={(e) => (e.target.src = errorImg)}
      />
      <MovieInfo title={title} genre={genre} releaseDate={releaseDate} />
    </div>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
  }),
  setMovieDetails: PropTypes.func.isRequired,
  showMovieDetails: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movieInfo: {},
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMovieDetails: (details) => dispatch(setMovieDetails(details)),
    showMovieDetails: (value) => dispatch(showMovieDetails(value)),
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
