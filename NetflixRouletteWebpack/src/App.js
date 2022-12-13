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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMovieDetailsOpen, setIsMovieDetailsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState("");

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
            <SearchResultsPanel setIsModalOpen={setIsModalOpen} />
            <Footer />
          </div>
        </UserContext.Provider>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
