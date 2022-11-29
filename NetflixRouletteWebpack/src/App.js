import React, { useState, useMemo } from "react";
import { Provider } from "react-redux";
import UserContext from "./utils/contexts";
import store from "./store/index";

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
    <Provider store={store}>
      <ErrorBoundary>
        <UserContext.Provider
          value={useMemo(
            () => ({
              showMovieDetailsHandler,
              addNewMovieHandler,
              openModalHandler,
            }),
            []
          )}
        >
          <div className={isModalOpen ? "app app-opened-modal" : "app"}>
            {isMovieDetailsOpen ? (
              <MovieDetails
                movieInfo={movieDetails}
                showMovieDetailsHandler={showMovieDetailsHandler}
              />
            ) : (
              <SearchPanel />
            )}
            <SearchResultsPanel
              openModalHandler={openModalHandler}
              addNewMovieHandler={addNewMovieHandler}
              newMovieData={newMovieData}
            />
            <Footer />
          </div>
        </UserContext.Provider>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
