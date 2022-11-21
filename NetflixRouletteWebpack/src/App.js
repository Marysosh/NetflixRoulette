import React, { useState } from "react";
import "./App.scss";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import SearchPanel from "./components/search-panel/SearchPanel";
import SearchResultsPanel from "./components/search-results-panel/SearchResultsPanel";
import Footer from "./components/footer/Footer";

function App() {
  const [isModalOpen, setIsOpen] = useState(false);
  const [newMovieData, setNewMovieData] = useState("");

  const openModalHandler = (value) => {
    setIsOpen(value);
  };

  const addNewMovieHandler = (addedMovieData) => {
    setNewMovieData(addedMovieData);
  };

  return (
    <ErrorBoundary>
      <div className={isModalOpen ? "app app-opened-modal" : "app"}>
        <SearchPanel
          openModalHandler={openModalHandler}
          addNewMovieHandler={addNewMovieHandler}
        />
        <SearchResultsPanel
          openModalHandler={openModalHandler}
          addNewMovieHandler={addNewMovieHandler}
          newMovieData={newMovieData}
        />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
