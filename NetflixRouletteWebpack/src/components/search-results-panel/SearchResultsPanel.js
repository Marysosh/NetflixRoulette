import React from "react";
import "./SearchResultsPanel.scss";

import ResultsHeader from "../results-header/ResultsHeader";
import ResultsCount from "../results-count/ResultsCount";

const resultsNumber = 39;

function SearchResultsPanel() {
  return (
    <div className="search-results-panel">
      <ResultsHeader />
      <ResultsCount resultsNumber={resultsNumber} />
    </div>
  );
}

export default SearchResultsPanel;
