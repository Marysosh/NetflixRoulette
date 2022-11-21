import React from "react";
import "./SearchPanel.scss";

import Header from "../header/Header";
import SearchTitle from "../search-title/SearchTitle";
import SearchForm from "../search-form/SearchForm";

function SearchPanel() {
  return (
    <div className="search-panel">
      <Header />
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
