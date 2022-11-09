import React, { useRef } from "react";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import "./GenreDropdown.scss";
import ascSign from "./ascSign.png";
import descSign from "./descSign.png";

const genreArray = ["Crime", "Documentary", "Horror", "Comedy"];

function GenreDropdown() {
  const [open, setOpen] = React.useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="genre-dropdown" ref={wrapperRef}>
      <button type="button" className="genre-dropdown-btn" onClick={handleOpen}>
        Select Genre
        <img
          className="triangle-icon"
          src={open ? ascSign : descSign}
          alt="open sign"
        />
      </button>
      {open ? (
        <ul className="genre-dropdown-list">
          {genreArray.map((item) => (
            <li className="genre-dropdown-item" key={Math.random() + 1}>
              <input type="checkbox" className="genre-dropdown-checkbox" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default GenreDropdown;
