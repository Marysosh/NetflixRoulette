import React from "react";
import "./ResultsHeader.scss";

import ResultsFilter from "../results-filter/ResultsFilter";

const genresFilters = [
  { filterName: "All", id: "f0", isSelected: true },
  { filterName: "Documentary", id: "f1", isSelected: false },
  { filterName: "Comedy", id: "f2", isSelected: false },
  { filterName: "Horror", id: "f3", isSelected: false },
  { filterName: "Crime", id: "f4", isSelected: false },
];

function ResultsHeader() {
  return (
    <div className="results-header">
      <ResultsFilter genresFilterArray={genresFilters} />
    </div>
  );
}

export default ResultsHeader;
