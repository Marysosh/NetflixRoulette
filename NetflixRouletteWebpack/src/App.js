import React from "react";
import "./App.scss";

import SearchPanel from "./components/search-panel/SearchPanel";
import SearchResultsPanel from "./components/search-results-panel/SearchResultsPanel";

function App() {
  return (
    <div className="app">
      <SearchPanel />
      <SearchResultsPanel />
    </div>
  );
}

export default App;
