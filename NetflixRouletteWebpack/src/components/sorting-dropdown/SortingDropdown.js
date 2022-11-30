import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import "./SortingDropdown.scss";
import ascSign from "./ascSign.png";
import descSign from "./descSign.png";
import {
  changeSortingOrder,
  changeSortingType,
} from "../../store/actionCreators";
import { getSortingOrder } from "../../store/selectors";

let genreArray = [
  { name: "title", label: "Title" },
  { name: "vote_average", label: "Rating" },
  { name: "runtime", label: "Runtime" },
  { name: "release_date", label: "Release date" },
];

function SortingDropdown(props) {
  const { changeSortingType } = props;
  const [openedDropdown, setDropdownOpen] = useState(false);
  const [sortingOrder, setSortingOrder] = useState("desc");
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
      setSortingOrder("asc");
      changeSortingType(chosenItem.name, "asc");
    } else {
      setSortingOrder("desc");
      changeSortingType(chosenItem.name, "desc");
    }
  };

  const handleItemChoose = (value) => {
    setDropdownOpen(false);
    genreArray.push(chosenItem);
    setChosenItem(value);
    genreArray = genreArray
      .filter((oldItem) => oldItem.name !== value.name)
      .sort((a, b) => a.name.length - b.name.length);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSortingOrder: (order) => dispatch(changeSortingOrder(order)),
    changeSortingType: (type, order) =>
      dispatch(changeSortingType(type, order)),
  };
};

SortingDropdown.propTypes = {
  changeSortingType: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropdown);
