import React from "react";
import PropTypes from "prop-types";

import "./CongratsModal.scss";
import crossIcon from "../close_button.png";
import congratsIcon from "./congratsIcon.png";

const BASE_CLASSNAME = "congrats-modal";

function CongratsModal({ handleCongratsModalOpen }) {
  return (
    <div className="delete-movie-container">
      <div className={`${BASE_CLASSNAME}`}>
        <button
          className={`${BASE_CLASSNAME}-close-btn`}
          type="button"
          onClick={() => handleCongratsModalOpen(false)}
        >
          <img src={crossIcon} alt="close button icon" />
        </button>
        <img
          className={`${BASE_CLASSNAME}-icon`}
          src={congratsIcon}
          alt="tick icon"
        />
        <div className={`${BASE_CLASSNAME}-title`}>Congratulations!</div>
        <div className={`${BASE_CLASSNAME}-message`}>
          The movie has been added to database successfully
        </div>
      </div>
    </div>
  );
}

export default CongratsModal;

CongratsModal.propTypes = {
  handleCongratsModalOpen: PropTypes.func.isRequired,
};
