import React, { useState } from "react";
import { Provider } from "react-redux";
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

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className={isModalOpen ? "app app-opened-modal" : "app"}>
          {isMovieDetailsOpen ? <MovieDetails /> : <SearchPanel />}
          <SearchResultsPanel
            setIsModalOpen={setIsModalOpen}
            setIsMovieDetailsOpen={setIsMovieDetailsOpen}
          />
          <Footer />
        </div>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
