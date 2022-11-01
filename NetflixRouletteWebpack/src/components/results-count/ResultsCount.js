import React from "react";
import PropTypes from "prop-types";
import "./ResultsCount.scss";

function ResultsCount({ resultsNumber }) {
  return (
    <div className="results-count">
      <b>{resultsNumber}</b> &nbsp;movies found
    </div>
  );
}

export default ResultsCount;

ResultsCount.propTypes = {
  resultsNumber: PropTypes.number.isRequired,
};
