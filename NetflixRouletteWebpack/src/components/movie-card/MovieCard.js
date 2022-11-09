import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.scss";

import MovieInfo from "../movie-info/MovieInfo";
import EditMovieDropdown from "../edit-movie-dropdown/EditMovieDropdown";

function MovieCard({ movieInfo, changeIdToDelete }) {
  const { title, genre, releaseDate, image, id } = movieInfo;

  const handleDeleteIdChange = () => {
    changeIdToDelete(id);
  };

  return (
    <div className="movie-card">
      <EditMovieDropdown handleDeleteIdChange={handleDeleteIdChange} />
      <img src={image} alt={`${title} img`} />
      <MovieInfo title={title} genre={genre} releaseDate={releaseDate} />
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  changeIdToDelete: PropTypes.func.isRequired,
};
