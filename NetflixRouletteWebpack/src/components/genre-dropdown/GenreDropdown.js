import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import { genreArray } from "../../utils/constants";

import "./GenreDropdown.scss";
import ascSign from "./ascSign.png";
import descSign from "./descSign.png";

function GenreDropdown(props) {
  const [open, setOpen] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(genreArray.length).fill(false)
  );

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);

  const { setSelectedGenres } = props;

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOnCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const selectedGenres = updatedCheckedState.reduce(
      (acc, currentState, index) => {
        if (currentState === true) {
          return [...acc, genreArray[index]];
        }
        return acc;
      },
      []
    );

    setSelectedGenres(selectedGenres.join(", "));
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
          {genreArray.map((genre, index) => (
            <li className="genre-dropdown-item" key={Math.random() + 1}>
              <input
                type="checkbox"
                className="genre-dropdown-checkbox"
                id={`custom-checkbox-${index}`}
                name={genre}
                value={genre}
                checked={checkedState[index]}
                onChange={() => handleOnCheckboxChange(index)}
              />
              {genre}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default GenreDropdown;

GenreDropdown.propTypes = {
  setSelectedGenres: PropTypes.func.isRequired,
};
