import React, { useState } from "react";
import PropTypes from "prop-types";

import "./SearchResultsPanel.scss";

import ResultsHeader from "../results-header/ResultsHeader";
import ResultsCount from "../results-count/ResultsCount";
import SearchResults from "../search-results/SearchResults";
import EditMovieModal from "../modals/edit-movie-modal/EditMovieModal";
import DeleteMovieModal from "../modals/delete-movie-modal/DeleteMovieModal";

import PulpFiction from "./PulpFiction.png";
import BohemianRapsody from "./BohemianRapsody.png";
import BillVol2 from "./BillVol2.png";
import Avengers from "./Avengers.png";
import Inception from "./Inception.png";
import ReservoirDogs from "./ReservoirDogs.png";

const resultsNumber = 39;

const resultsArray = [
  {
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: "2004",
    rating: "9.1",
    runtime: "246 min",
    image: PulpFiction,
    overview: "badibclaidhbc libc ileabc i;b e;v",
    id: "m1",
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    releaseDate: "2003",
    rating: "9.2",
    runtime: "247 min",
    image: BohemianRapsody,
    overview: "hrb vehir v;jer b;vf ej;r bfvoejr bv",
    id: "m2",
  },
  {
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning movie",
    releaseDate: "1994",
    rating: "9.3",
    runtime: "248 min",
    image: BillVol2,
    overview: "cbe ichbv eic ie cikejr bfco;r jeco;e q",
    id: "m3",
  },
  {
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: "2004",
    rating: "9.4",
    runtime: "249 min",
    image: Avengers,
    overview: "hebr coeijbqu fcoebfqu3 co eu3bf o234ubf [o4u3bf",
    id: "m4",
  },
  {
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: "2003",
    rating: "9.5",
    runtime: "250 min",
    image: Inception,
    overview: "cidhewb cuwe bcfo2ub 3df[ou23b df[o23ub fd[o32ub fdo32ub fd",
    id: "m5",
  },
  {
    title: "Reservoir dogs",
    genre: "Oscar winning movie",
    releaseDate: "1994",
    rating: "9.6",
    runtime: "251 min",
    image: ReservoirDogs,
    overview:
      "ewkh coe ufbnc 2of]p2n3jdfp0in23fdp23fbn23pfbnnjfbnj4n444 c  ejf d2",
    id: "m6",
  },
];

function SearchResultsPanel(props) {
  const { openModalHandler } = props;
  const [moviesArray, setMoviesArray] = useState(resultsArray);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState("");

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState("");

  const [editingValues, setEditingValues] = useState("");

  const handleEditModalOpen = (value) => {
    setEditModalOpen(value);
    openModalHandler(value);
  };

  const updateFormValues = (id) => {
    const {
      title,
      image: movieUrl,
      releaseDate,
      rating,
      runtime,
      overview,
    } = { ...moviesArray.find((item) => item.id === id) };
    setEditingValues({
      titleValue: title,
      movieUrlValue: movieUrl,
      releaseDateValue: releaseDate,
      ratingValue: rating,
      runtimeValue: runtime,
      overviewValue: overview,
    });
  };

  const changeIdToEdit = (idToEdit) => {
    setMovieToEdit(idToEdit);
    updateFormValues(idToEdit);
    handleEditModalOpen(true);
  };

  const handleMovieEdit = (newMovieData) => {
    const movieOldData = moviesArray.find((item) => item.id === movieToEdit);
    setMoviesArray([
      ...moviesArray.filter((item) => item.id !== movieToEdit),
      { ...movieOldData, ...newMovieData },
    ]);
    handleEditModalOpen(false);
  };

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
        changeIdToEdit={changeIdToEdit}
        changeIdToDelete={changeIdToDelete}
      />
      {isEditModalOpen && (
        <EditMovieModal
          modalTitle="Edit movie"
          handleEditModalOpen={handleEditModalOpen}
          handleMovieEdit={handleMovieEdit}
          editingValues={editingValues}
        />
      )}
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
