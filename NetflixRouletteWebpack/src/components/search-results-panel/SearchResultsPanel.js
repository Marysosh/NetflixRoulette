/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./SearchResultsPanel.scss";

import ResultsHeader from "../results-header/ResultsHeader";
import ResultsCount from "../results-count/ResultsCount";
import SearchResults from "../search-results/SearchResults";
import EditMovieModal from "../modals/edit-movie-modal/EditMovieModal";
import DeleteMovieModal from "../modals/delete-movie-modal/DeleteMovieModal";

import { getMovies } from "../../store/selectors";
import { fetchMovies } from "../../store/actionCreators";

const resultsNumber = 6;

function SearchResultsPanel(props) {
  const {
    openModalHandler,
    newMovieData,
    movies: resultsArray,
    fetchMovies,
  } = props;
  const [moviesArray, setMoviesArray] = useState(resultsArray);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState("");

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState("");

  const [editingValues, setEditingValues] = useState("");

  useEffect(() => {
    fetchMovies();
  });

  useEffect(() => {
    newMovieData.genre &&
      setMoviesArray([
        ...moviesArray,
        { ...newMovieData, id: (Math.random() + 1).toString() },
      ]);
  }, [newMovieData]);

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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies: getMovies(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  };
};
SearchResultsPanel.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
  newMovieData: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      movieUrlValue: PropTypes.string,
      releaseDate: PropTypes.string,
      genre: PropTypes.string,
      rating: PropTypes.string,
      runtime: PropTypes.string,
      overview: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
  movies: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.string,
    image: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel);
