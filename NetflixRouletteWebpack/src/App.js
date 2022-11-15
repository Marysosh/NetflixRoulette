import React, { useState } from "react";
import "./App.scss";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import SearchPanel from "./components/search-panel/SearchPanel";
import MovieDetails from "./components/movie-details/MovieDetails";
import SearchResultsPanel from "./components/search-results-panel/SearchResultsPanel";
import Footer from "./components/footer/Footer";

function App() {
  const [isModalOpen, setIsOpen] = useState(false);
  const [newMovieData, setNewMovieData] = useState("");
  const [isMovieDetailsOpen, setIsMovieDetailsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState("");

  const openModalHandler = (value) => {
    setIsOpen(value);
  };

  const addNewMovieHandler = (addedMovieData) => {
    setNewMovieData(addedMovieData);
  };

  const showMovieDetailsHandler = (movieInfo) => {
    setMovieDetails(movieInfo);
    movieInfo ? setIsMovieDetailsOpen(true) : setIsMovieDetailsOpen(false);
  };

  return (
    <ErrorBoundary>
      <div className={isModalOpen ? "app app-opened-modal" : "app"}>
        {isMovieDetailsOpen ? (
          <MovieDetails
            movieInfo={movieDetails}
            showMovieDetailsHandler={showMovieDetailsHandler}
          />
        ) : (
          <SearchPanel
            openModalHandler={openModalHandler}
            addNewMovieHandler={addNewMovieHandler}
          />
        )}
        <SearchResultsPanel
          openModalHandler={openModalHandler}
          addNewMovieHandler={addNewMovieHandler}
          newMovieData={newMovieData}
          showMovieDetailsHandler={showMovieDetailsHandler}
        />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
