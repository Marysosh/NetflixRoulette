import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes, { arrayOf } from "prop-types";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import "./SortingDropdown.scss";
import ascSign from "./ascSign.png";
import descSign from "./descSign.png";
import {
  changeSortingOrder,
  changeSortingType,
  sortAndFilterResults,
} from "../../store/actionCreators";
import {
  getSelectedFilters,
  getSortingOrder,
  getSortingType,
} from "../../store/selectors";

let genreArray = [
  { name: "title", label: "Title" },
  { name: "runtime", label: "Runtime" },
  { name: "release_date", label: "Release date" },
];

function SortingDropdown(props) {
  const {
    sortingOrder = "desc",
    changeSortingOrder,
    sortingType = "vote_average",
    changeSortingType,
    selectedFilters = [],
    sortAndFilterResults,
  } = props;
  const [openedDropdown, setDropdownOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState({
    name: "vote_average",
    label: "Rating",
  });

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDropdownOpen);

  const handleOpenDropdown = () => {
    setDropdownOpen(!openedDropdown);
  };

  const handleOrderChange = () => {
    if (sortingOrder === "desc") {
      changeSortingOrder("asc");
      sortAndFilterResults(sortingType, "asc", selectedFilters);
    } else {
      changeSortingOrder("desc");
      sortAndFilterResults(sortingType, "desc", selectedFilters);
    }
  };

  const handleItemChoose = (value) => {
    setDropdownOpen(false);
    genreArray.push(chosenItem);
    setChosenItem(value);
    genreArray = genreArray
      .filter((oldItem) => oldItem.name !== value.name)
      .sort((a, b) => a.name.length - b.name.length);
    changeSortingType(value.name);
    sortAndFilterResults(value.name, sortingOrder, selectedFilters);
  };

  // For checking Error boundary

  // if (isAscendingOrder) {
  //   throw new Error("Wrong sorting order change!");
  // }

  return (
    <div className="sorting-dropdown" ref={wrapperRef}>
      <div className="sorting-dropdown-btn-container">
        <button
          type="button"
          className="sorting-dropdown-btn"
          onClick={handleOpenDropdown}
        >
          {chosenItem.label}
        </button>
        <button
          type="button"
          className="sorting-order-btn"
          onClick={handleOrderChange}
        >
          <img
            src={sortingOrder === "asc" ? ascSign : descSign}
            alt="order Sign"
          />
        </button>
      </div>
      {openedDropdown ? (
        <ul className="sorting-dropdown-list">
          {genreArray.map((item) => (
            <li className="sorting-dropdown-item" key={Math.random() + 1}>
              <button
                className="sorting-dropdown-item-btn"
                onClick={() => handleItemChoose(item)}
                type="button"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sortingOrder: getSortingOrder(state),
    sortingType: getSortingType(state),
    selectedFilters: getSelectedFilters(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSortingOrder: (order) => dispatch(changeSortingOrder(order)),
    changeSortingType: (type) => dispatch(changeSortingType(type)),
    sortAndFilterResults: (sortType, sortOrder, filtersArray) =>
      dispatch(sortAndFilterResults(sortType, sortOrder, filtersArray)),
  };
};

SortingDropdown.propTypes = {
  sortingOrder: PropTypes.string,
  changeSortingOrder: PropTypes.func.isRequired,
  sortingType: PropTypes.string,
  changeSortingType: PropTypes.func.isRequired,
  selectedFilters: arrayOf(PropTypes.string),
  sortAndFilterResults: PropTypes.func.isRequired,
};

SortingDropdown.defaultProps = {
  sortingOrder: "desc",
  sortingType: "vote_average",
  selectedFilters: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropdown);
