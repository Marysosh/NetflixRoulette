import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../../utils/contexts";

import "./MovieCard.scss";

import MovieInfo from "../movie-info/MovieInfo";
import EditMovieDropdown from "../edit-movie-dropdown/EditMovieDropdown";
import scrollTop from "../../utils/scrollTop";
import errorImg from "./error_image.png";

function MovieCard({ movieInfo }) {
  const { title, genre, releaseDate, image, id } = movieInfo;
  const { showMovieDetailsHandler } = useContext(UserContext);

  return (
    <div
      className="movie-card"
      id={id}
      onClick={() => {
        showMovieDetailsHandler(movieInfo);
        scrollTop();
      }}
    >
      <EditMovieDropdown id={id} />
      <img
        className="movie-card-image"
        src={image}
        alt={errorImg}
        // eslint-disable-next-line no-return-assign
        onError={(e) => (e.target.onerror = null)((e.target.src = errorImg))}
      />
      <MovieInfo title={title} genre={genre} releaseDate={releaseDate} />
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movieInfo: {},
};
