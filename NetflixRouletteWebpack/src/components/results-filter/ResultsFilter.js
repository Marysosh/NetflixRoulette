import React from "react";
import PropTypes from "prop-types";
import "./ResultsFilter.scss";
import { connect } from "react-redux";
import {
  getSelectedFilters,
  getSortingOrder,
  getSortingType,
} from "../../store/selectors";
import {
  setSelectedFilters,
  sortAndFilterResults,
} from "../../store/actionCreators";

function ResultsFilter({
  genresFilterArray,
  selectedFilters = [],
  setSelectedFilters,
  sortingOrder = "desc",
  sortingType = "vote_average",
  sortAndFilterResults,
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
    sortAndFilterResults(sortingType, sortingOrder, newSelectedFilters);
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
    sortingOrder: getSortingOrder(state),
    sortingType: getSortingType(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedFilters: (filterArray) =>
      dispatch(setSelectedFilters(filterArray)),
    sortAndFilterResults: (sortingType, sortingOrder, selectedFilters) =>
      dispatch(
        sortAndFilterResults(sortingType, sortingOrder, selectedFilters)
      ),
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
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  setSelectedFilters: PropTypes.func.isRequired,
  sortingOrder: PropTypes.string,
  sortingType: PropTypes.string,
  sortAndFilterResults: PropTypes.func.isRequired,
};

ResultsFilter.defaultProps = {
  selectedFilters: [],
  sortingOrder: "desc",
  sortingType: "vote_average",
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsFilter);
