import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../../utils/contexts";

import "./MovieCard.scss";

import MovieInfo from "../movie-info/MovieInfo";
import EditMovieDropdown from "../edit-movie-dropdown/EditMovieDropdown";
import scrollTop from "../../utils/scrollTop";

function MovieCard({ movieInfo, changeIdToEdit, changeIdToDelete }) {
  const {
    title,
    genres: genre,
    release_date: releaseDate,
    poster_path: image,
    id,
  } = movieInfo;
  const { showMovieDetailsHandler } = useContext(UserContext);

  const handleEditIdChange = () => {
    changeIdToEdit(id);
  };

  const handleDeleteIdChange = () => {
    changeIdToDelete(id);
  };

  return (
    <div
      className="movie-card"
      id={id}
      onClick={() => {
        showMovieDetailsHandler(movieInfo);
        scrollTop();
      }}
    >
      <EditMovieDropdown
        handleEditIdChange={handleEditIdChange}
        handleDeleteIdChange={handleDeleteIdChange}
      />
      <img src={image} alt={`${title} img`} />
      <MovieInfo title={title} genre={genre[0]} releaseDate={releaseDate} />
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.string,
  }),
  changeIdToEdit: PropTypes.func.isRequired,
  changeIdToDelete: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movieInfo: {},
};
