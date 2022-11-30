import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addMovieToEdit,
  addMovieToDelete,
  openDeleteModal,
  openEditModal,
} from "../../store/actionCreators";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import "./EditMovieDropdowm.scss";
import optionsIcon from "./options_icon.png";
import closeBtn from "./close_btn_small.png";

const BASE_CLASS = "edit-movie-dropdown";

function EditMovieDropdown(props) {
  const {
    openEditModal,
    openDeleteModal,
    addMovieToEdit,
    addMovieToDelete,
    id,
  } = props;
  const [openedDropdown, setOpenedDropdown] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenedDropdown);

  const handleOpenDropdown = (value) => {
    setOpenedDropdown(value);
  };

  const handleChooseEdit = (event) => {
    event.stopPropagation();
    addMovieToEdit(id);
    openEditModal();
    handleOpenDropdown(false);
  };

  const handleChooseDelete = (event) => {
    event.stopPropagation();
    addMovieToDelete(id);
    openDeleteModal();
    handleOpenDropdown(false);
  };

  return (
    <>
      <button
        className="movie-card-options"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleOpenDropdown(true);
        }}
      >
        <img src={optionsIcon} alt="options icon" />
      </button>
      {openedDropdown ? (
        <div className={`${BASE_CLASS}-container`} ref={wrapperRef}>
          <button
            className={`${BASE_CLASS}-btn`}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleOpenDropdown(false);
            }}
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
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    openEditModal: () => dispatch(openEditModal()),
    openDeleteModal: () => dispatch(openDeleteModal()),
    addMovieToEdit: (id) => dispatch(addMovieToEdit(id)),
    addMovieToDelete: (id) => dispatch(addMovieToDelete(id)),
  };
};

EditMovieDropdown.propTypes = {
  openEditModal: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
  addMovieToEdit: PropTypes.func.isRequired,
  addMovieToDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(EditMovieDropdown);
