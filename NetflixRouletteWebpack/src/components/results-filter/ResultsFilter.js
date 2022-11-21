import React from "react";
import PropTypes from "prop-types";
import "./ResultsFilter.scss";

function ResultsFilter({ genresFilterArray }) {
  return (
    <ul className="results-filter">
      {genresFilterArray.map(({ filterName, id, isSelected }) => (
        <li
          className={
            isSelected ? "results-filter-item__selected" : "results-filter-item"
          }
          key={id}
        >
          {filterName}
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
