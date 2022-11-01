import React from "react";
import "./SearchPanel.scss";

import SearchForm from "../search-form/SearchForm";

function SearchPanel() {
  return (
    <div className="search-panel">
      <div className="search-panel__search-form">
        <SearchForm />
      </div>
    </div>
  );
}

export default SearchPanel;
