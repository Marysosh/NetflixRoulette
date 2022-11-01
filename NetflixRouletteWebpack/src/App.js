import React from "react";
import "./App.scss";

import SearchPanel from "./components/search-panel/SearchPanel";
import SearchResultsPanel from "./components/search-results-panel/SearchResultsPanel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <SearchPanel />
      <SearchResultsPanel />
      <Footer />
    </div>
  );
}

export default App;
