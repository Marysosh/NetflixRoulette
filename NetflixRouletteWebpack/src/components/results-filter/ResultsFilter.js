import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ResultsFilter.scss";

const DEFAULT_VALUE = "All";
function ResultsFilter({ genresFilterArray }) {
  const [selectedFilter, setSelectedFilter] = useState(DEFAULT_VALUE);

  const handleGenreFilterChange = (value) => {
    setSelectedFilter(value);
  };

  return (
    <ul className="results-filter">
      {genresFilterArray.map(({ filterName, id }) => (
        <li
          className={
            filterName === selectedFilter
              ? "results-filter-item__selected"
              : "results-filter-item"
          }
          key={id}
        >
          <button
            className="results-filter-item-btn"
            onClick={() => handleGenreFilterChange(filterName)}
            type="button"
          >
            {filterName}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ResultsFilter;

ResultsFilter.propTypes = {
  genresFilterArray: PropTypes.arrayOf(
    PropTypes.shape({
      filterName: PropTypes.string,
      id: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
};
