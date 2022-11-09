import React, { useState } from "react";
import PropTypes from "prop-types";

import "./SearchResultsPanel.scss";

import ResultsHeader from "../results-header/ResultsHeader";
import ResultsCount from "../results-count/ResultsCount";
import SearchResults from "../search-results/SearchResults";

import PulpFiction from "./PulpFiction.png";
import BohemianRapsody from "./BohemianRapsody.png";
import BillVol2 from "./BillVol2.png";
import Avengers from "./Avengers.png";
import Inception from "./Inception.png";
import ReservoirDogs from "./ReservoirDogs.png";
import DeleteMovieModal from "../modals/delete-movie-modal/DeleteMovieModal";

const resultsNumber = 39;

const resultsArray = [
  {
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: 2004,
    image: PulpFiction,
    id: "m1",
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    releaseDate: 2003,
    image: BohemianRapsody,
    id: "m2",
  },
  {
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning movie",
    releaseDate: 1994,
    image: BillVol2,
    id: "m3",
  },
  {
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: 2004,
    image: Avengers,
    id: "m4",
  },
  {
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: 2003,
    image: Inception,
    id: "m5",
  },
  {
    title: "Reservoir dogs",
    genre: "Oscar winning movie",
    releaseDate: 1994,
    image: ReservoirDogs,
    id: "m6",
  },
];

function SearchResultsPanel(props) {
  const { openModalHandler } = props;
  const [moviesArray, setMoviesArray] = useState(resultsArray);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState("");

  const handleDeleteModalOpen = (value) => {
    setDeleteModalOpen(value);
    openModalHandler(value);
  };

  const changeIdToDelete = (idToDelete) => {
    setMovieToDelete(idToDelete);
    handleDeleteModalOpen(true);
  };

  const handleMovieDelete = () => {
    setMoviesArray(moviesArray.filter((item) => item.id !== movieToDelete));
    handleDeleteModalOpen(false);
  };

  return (
    <div className="search-results-panel">
      <ResultsHeader />
      <ResultsCount resultsNumber={resultsNumber} />
      <SearchResults
        resultsArray={moviesArray}
        changeIdToDelete={changeIdToDelete}
      />
      {isDeleteModalOpen && (
        <DeleteMovieModal
          handleDeleteModalOpen={handleDeleteModalOpen}
          handleMovieDelete={handleMovieDelete}
        />
      )}
    </div>
  );
}

export default SearchResultsPanel;

SearchResultsPanel.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};
