import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import "./EditMovieDropdowm.scss";
import optionsIcon from "./options_icon.png";
import closeBtn from "./close_btn_small.png";

const BASE_CLASS = "edit-movie-dropdown";

function EditMovieDropdown({ handleDeleteIdChange }) {
  const [openedDropdown, setOpenedDropdown] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenedDropdown);

  const handleOpenDropdown = (value) => {
    setOpenedDropdown(value);
  };

  const handleChooseEdit = () => {
    handleOpenDropdown(false);
  };

  const handleChooseDelete = () => {
    handleOpenDropdown(false);
    handleDeleteIdChange();
  };

  return (
    <div>
      <button
        className="movie-card-options"
        type="button"
        onClick={() => handleOpenDropdown(true)}
      >
        <img src={optionsIcon} alt="options icon" />
      </button>
      {openedDropdown ? (
        <div className={`${BASE_CLASS}-container`} ref={wrapperRef}>
          <button
            className={`${BASE_CLASS}-btn`}
            type="button"
            onClick={() => handleOpenDropdown(false)}
          >
            <img src={closeBtn} alt="close icon" />
          </button>
          <ul className={`${BASE_CLASS}-list`}>
            <li className={`${BASE_CLASS}-item`} key={Math.random() + 1}>
              <button
                className={`${BASE_CLASS}-item-btn`}
                type="button"
                onClick={handleChooseEdit}
              >
                Edit
              </button>
            </li>
            <li className={`${BASE_CLASS}-item`} key={Math.random() + 1}>
              <button
                className={`${BASE_CLASS}-item-btn`}
                type="button"
                onClick={handleChooseDelete}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EditMovieDropdown;

EditMovieDropdown.propTypes = {
  handleDeleteIdChange: PropTypes.func.isRequired,
};
