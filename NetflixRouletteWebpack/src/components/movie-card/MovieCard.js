import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.scss";

import MovieInfo from "../movie-info/MovieInfo";
import EditMovieDropdown from "../edit-movie-dropdown/EditMovieDropdown";

function MovieCard({ movieInfo, changeIdToEdit, changeIdToDelete }) {
  const { title, genre, releaseDate, image, id } = movieInfo;

  const handleEditIdChange = () => {
    changeIdToEdit(id);
  };

  const handleDeleteIdChange = () => {
    changeIdToDelete(id);
  };

  return (
    <div className="movie-card">
      <EditMovieDropdown
        handleEditIdChange={handleEditIdChange}
        handleDeleteIdChange={handleDeleteIdChange}
      />
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
    releaseDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  changeIdToEdit: PropTypes.func.isRequired,
  changeIdToDelete: PropTypes.func.isRequired,
};
