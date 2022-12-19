import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ResultsFilter.scss";
import { connect } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";
import {
  getSelectedFilters,
  getSortingOrder,
  getSortingType,
} from "../../store/selectors";
import {
  setSelectedFilters,
  sortAndFilterResults,
} from "../../store/actionCreators";
import { FILTER_NAMES } from "../../utils/constants";

function ResultsFilter({
  genresFilterArray,
  selectedFilters = [],
  setSelectedFilters,
  sortingOrder = "desc",
  sortingType = "vote_average",
  sortAndFilterResults,
}) {
  const [genreArray, setGenre] = useSearchParams();
  const { searchQuery } = useParams();

  useEffect(() => {
    if (genreArray.get("genre")) {
      setSelectedFilters(genreArray.get("genre").split("-"));
      sortAndFilterResults(
        sortingType,
        sortingOrder,
        genreArray.get("genre").split("-"),
        searchQuery,
        "title"
      );
    }
  }, []);

  const handleGenreFilterChange = (item) => {
    let newSelectedFilters;
    if (
      item.filterName === FILTER_NAMES.ALL &&
      !selectedFilters.includes(item.filterName)
    ) {
      newSelectedFilters = [];
      setGenre({});
    } else if (selectedFilters.includes(item.filterName)) {
      newSelectedFilters =
        selectedFilters.length !== 1
          ? [
              ...selectedFilters.filter(
                (sf) => sf !== FILTER_NAMES.ALL && sf !== item.filterName
              ),
            ]
          : [];
    } else {
      newSelectedFilters = [
        ...selectedFilters.filter((sf) => sf !== FILTER_NAMES.ALL),
        item.filterName,
      ];
    }

    newSelectedFilters.length
      ? setGenre({ genre: [...newSelectedFilters].join("-") })
      : setGenre({});
    setSelectedFilters(newSelectedFilters);
    sortAndFilterResults(
      sortingType,
      sortingOrder,
      newSelectedFilters,
      searchQuery,
      "title"
    );
  };

  return (
    <ul className="results-filter">
      {genresFilterArray.map((item) => (
        <li
          className={
            genreArray.get("genre")?.includes(item.filterName) ||
            (genreArray.get("genre")?.length == null &&
              item.filterName === FILTER_NAMES.ALL)
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
    sortAndFilterResults: (
      sortingType,
      sortingOrder,
      selectedFilters,
      searchQuery,
      searchBy
    ) =>
      dispatch(
        sortAndFilterResults(
          sortingType,
          sortingOrder,
          selectedFilters,
          searchQuery,
          searchBy
        )
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
