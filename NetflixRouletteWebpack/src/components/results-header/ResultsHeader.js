import React from "react";
import "./ResultsHeader.scss";

import ResultsFilter from "../results-filter/ResultsFilter";
import ResultsSorting from "../results-sorting/ResultsSorting";
import { genresFilters } from "../../utils/constants";

function ResultsHeader() {
  return (
    <div className="results-header">
      <ResultsFilter genresFilterArray={genresFilters} />
      <ResultsSorting />
    </div>
  );
}

export default ResultsHeader;
