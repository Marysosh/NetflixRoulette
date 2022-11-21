import React from "react";
import PropTypes from "prop-types";

import "./FilledButton.scss";

function FilledButton({ message, className, handler }) {
  return (
    <button
      className={`${className} filled-btn`}
      type="button"
      onClick={handler}
    >
      {message}
    </button>
  );
}

export default FilledButton;

FilledButton.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  handler: PropTypes.func,
};

FilledButton.defaultProps = {
  className: "",
  handler: () => {},
};
