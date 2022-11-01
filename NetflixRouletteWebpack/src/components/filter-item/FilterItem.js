import React from "react";
import PropTypes from "prop-types";
import "./FilterItem.scss";

function FilterItem({ filterName }) {
  return { filterName };
}

export default FilterItem;

FilterItem.propTypes = {
  filterName: PropTypes.string.isRequired,
};
