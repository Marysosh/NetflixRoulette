import React from "react";
import "./ResultsSorting.scss";

import SortingDropdown from "../sorting-dropdown/SortingDropdown";

function ResultsSorting() {
  return (
    <div className="results-sorting">
      <div className="results-sorting-label">Sort by</div>
      <SortingDropdown />
    </div>
  );
}

export default ResultsSorting;
