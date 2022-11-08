import React from "react";
import PropTypes from "prop-types";

import "./SearchPanel.scss";

import Header from "../header/Header";
import SearchTitle from "../search-title/SearchTitle";
import SearchForm from "../search-form/SearchForm";

function SearchPanel(props) {
  const { openModalHandler } = props;

  return (
    <div className="search-panel">
      <Header openModalHandler={openModalHandler} />
      <div className="search-panel__title">
        <SearchTitle />
      </div>
      <div className="search-panel__search-form">
        <SearchForm />
      </div>
    </div>
  );
}

export default SearchPanel;

SearchPanel.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};
