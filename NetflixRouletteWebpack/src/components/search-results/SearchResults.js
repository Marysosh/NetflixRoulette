import React from "react";
import PropTypes from "prop-types";
import "./SearchResults.scss";

import MovieCard from "../movie-card/MovieCard";

function SearchResults({ resultsArray }) {
  return (
    <div className="search-results">
      {resultsArray.map((itemInfo) => (
        <MovieCard movieInfo={itemInfo} key={itemInfo.id} />
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
      releaseDate: PropTypes.number,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};