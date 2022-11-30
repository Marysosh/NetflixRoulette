import React from "react";
import PropTypes from "prop-types";

import "./SearchResults.scss";

import MovieCard from "../movie-card/MovieCard";

function SearchResults({ resultsArray, changeIdToEdit }) {
  return (
    <div className="search-results">
      {resultsArray?.map((itemInfo) => (
        <MovieCard
          movieInfo={itemInfo}
          key={itemInfo.id}
          changeIdToEdit={changeIdToEdit}
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
};
