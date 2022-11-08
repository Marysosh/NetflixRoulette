import React, { useState, useRef } from "react";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import "./SortingDropdown.scss";
import ascSign from "./ascSign.png";
import descSign from "./descSign.png";

let genreArray = ["Title", "Rating", "Runtime", "Date added"];
const DEFAULT_VALUE = "Release date";

function SortingDropdown() {
  const [openedDropdown, setDropdownOpen] = useState(false);
  const [isAscendingOrder, setAscendingOrder] = useState(false);
  const [chosenItem, setChosenItem] = useState(DEFAULT_VALUE);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDropdownOpen);

  const handleOpenDropdown = () => {
    setDropdownOpen(!openedDropdown);
  };

  const handleOrderChange = () => {
    setAscendingOrder(!isAscendingOrder);
  };

  const handleItemChoose = (value) => {
    setDropdownOpen(false);
    genreArray.push(chosenItem);
    setChosenItem(value);
    genreArray = genreArray
      .filter((item) => item !== value)
      .sort((a, b) => a.length - b.length);
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
          {chosenItem}
        </button>
        <button
          type="button"
          className="sorting-order-btn"
          onClick={handleOrderChange}
        >
          <img src={isAscendingOrder ? ascSign : descSign} alt="order Sign" />
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
                {item}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default SortingDropdown;
