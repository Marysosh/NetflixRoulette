import React from "react";
import PropTypes from "prop-types";
import "./ResultsFilter.scss";
import { connect } from "react-redux";
import { getSelectedFilters } from "../../store/selectors";
import {
  getFilteredSearchResults,
  setSelectedFilters,
} from "../../store/actionCreators";

function ResultsFilter({
  genresFilterArray,
  selectedFilters = [],
  setSelectedFilters,
  getFilteredSearchResults,
}) {
  const handleGenreFilterChange = (item) => {
    let newSelectedFilters;
    if (
      item.filterName === "All" &&
      !selectedFilters.includes(item.filterName)
    ) {
      newSelectedFilters = [];
    } else if (selectedFilters.includes(item.filterName)) {
      newSelectedFilters =
        selectedFilters.length !== 1
          ? [
              ...selectedFilters.filter(
                (sf) => sf !== "All" && sf !== item.filterName
              ),
            ]
          : [];
    } else {
      newSelectedFilters = [
        ...selectedFilters.filter((sf) => sf !== "All"),
        item.filterName,
      ];
    }
    setSelectedFilters(newSelectedFilters);
    getFilteredSearchResults(newSelectedFilters);
  };

  return (
    <ul className="results-filter">
      {genresFilterArray.map((item) => (
        <li
          className={
            selectedFilters.includes(item.filterName) ||
            (selectedFilters.length === 0 && item.filterName === "All")
              ? "results-filter-item__selected"
              : "results-filter-item"
          }
          key={item.id}
        >
          <button
            className="results-filter-item-btn"
            onClick={() => handleGenreFilterChange(item)}
            type="button"
          >
            {item.filterName}
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedFilters: getSelectedFilters(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedFilters: (filterArray) =>
      dispatch(setSelectedFilters(filterArray)),
    getFilteredSearchResults: (filterArray) =>
      dispatch(getFilteredSearchResults(filterArray)),
  };
};

ResultsFilter.propTypes = {
  genresFilterArray: PropTypes.arrayOf(
    PropTypes.shape({
      filterName: PropTypes.string,
      id: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedFilters: PropTypes.func.isRequired,
  getFilteredSearchResults: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsFilter);
