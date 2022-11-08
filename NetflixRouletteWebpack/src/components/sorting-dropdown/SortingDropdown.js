import React, { useState } from "react";
import "./SortingDropdown.scss";
import ascSign from "./ascSign.png";
import descSign from "./descSign.png";

const genreArray = ["Title", "Rating", "Runtime", "Date added"];

function SortingDropdown() {
  const [openedDropdown, setDropdownOpen] = useState(false);
  const [isAscendingOrder, setAscendingOrder] = useState(false);

  const handleOpenDropdown = () => {
    setDropdownOpen(!openedDropdown);
  };

  const handleOrderChange = () => {
    setAscendingOrder(!isAscendingOrder);
  };

  // For checking Error boundary

  // if (isAscendingOrder) {
  //   throw new Error("Wrong sorting order change!");
  // }

  return (
    <div className="sorting-dropdown">
      <div className="sorting-dropdown-btn-container">
        <button
          type="button"
          className="sorting-dropdown-btn"
          onClick={handleOpenDropdown}
        >
          Release date
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
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default SortingDropdown;
