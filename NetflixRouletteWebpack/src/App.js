import React from "react";
import "./App.scss";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import SearchPanel from "./components/search-panel/SearchPanel";
import SearchResultsPanel from "./components/search-results-panel/SearchResultsPanel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <SearchPanel />
        <SearchResultsPanel />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
