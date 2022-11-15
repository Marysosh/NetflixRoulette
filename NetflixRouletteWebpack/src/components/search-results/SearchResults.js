import React from "react";
import PropTypes from "prop-types";
import "./SearchResults.scss";

import MovieCard from "../movie-card/MovieCard";

function SearchResults({
  resultsArray,
  changeIdToEdit,
  changeIdToDelete,
  showMovieDetailsHandler,
}) {
  return (
    <div className="search-results">
      {resultsArray.map((itemInfo) => (
        <MovieCard
          movieInfo={itemInfo}
          key={itemInfo.id}
          changeIdToEdit={changeIdToEdit}
          changeIdToDelete={changeIdToDelete}
          showMovieDetailsHandler={showMovieDetailsHandler}
        />
      ))}
    </div>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  resultsArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      genre: PropTypes.string,
      releaseDate: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  changeIdToEdit: PropTypes.func.isRequired,
  changeIdToDelete: PropTypes.func.isRequired,
  showMovieDetailsHandler: PropTypes.func.isRequired,
};
