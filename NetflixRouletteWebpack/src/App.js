import React, { useState } from "react";
import "./App.scss";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import SearchPanel from "./components/search-panel/SearchPanel";
import SearchResultsPanel from "./components/search-results-panel/SearchResultsPanel";
import Footer from "./components/footer/Footer";

function App() {
  const [isModalOpen, setIsOpen] = useState(false);

  const openModalHandler = (value) => {
    setIsOpen(value);
  };

  return (
    <ErrorBoundary>
      <div className={isModalOpen ? "app app-opened-modal" : "app"}>
        <SearchPanel openModalHandler={openModalHandler} />
        <SearchResultsPanel />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
