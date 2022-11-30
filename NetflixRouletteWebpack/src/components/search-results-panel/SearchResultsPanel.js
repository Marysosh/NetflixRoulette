/* eslint-disable no-unused-vars */
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

import {
  getMovies,
  getDeleteModalStatus,
  getEditModalStatus,
  getMovieToDeleteId,
  getMovieToEditId,
  getSelectedFilters,
} from "../../store/selectors";
import {
  closeDeleteModal,
  closeEditModal,
  deleteMovie,
  fetchMovies,
  getFilteredSearchResults,
  setSelectedFilters,
} from "../../store/actionCreators";

const resultsNumber = 6;

function SearchResultsPanel(props) {
  const {
    openModalHandler,
    newMovieData,
    movies: resultsArray,
    fetchMovies,
    isEditModalOpen,
    isDeleteModalOpen,
    movieToEditId,
    movieToDeleteId,
    deleteMovie,
    closeEditModal,
    closeDeleteModal,
    setSelectedFilters,
  } = props;
  const [moviesArray, setMoviesArray] = useState(resultsArray);

  // const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState("");

  const [editingValues, setEditingValues] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setMoviesArray(resultsArray);
  }, [resultsArray]);

  useEffect(() => {
    newMovieData.genre &&
      setMoviesArray([
        ...moviesArray,
        { ...newMovieData, id: (Math.random() + 1).toString() },
      ]);
  }, [newMovieData]);

  const handleEditModalOpen = (value) => {
    // setEditModalOpen(value);
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

  const handleMovieDelete = () => {
    deleteMovie(movieToDeleteId);
    setSelectedFilters([]);
    fetchMovies();
    closeDeleteModal();
  };

  return (
    <div className="search-results-panel">
      <ResultsHeader />
      <ResultsCount resultsNumber={resultsNumber} />
      <SearchResults
        resultsArray={moviesArray}
        changeIdToEdit={changeIdToEdit}
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
          handleMovieDelete={handleMovieDelete}
          handleDeleteModalClose={closeDeleteModal}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: getMovies(state),
    isEditModalOpen: getEditModalStatus(state),
    isDeleteModalOpen: getDeleteModalStatus(state),
    movieToEditId: getMovieToEditId(state),
    movieToDeleteId: getMovieToDeleteId(state),
    selectedFilters: getSelectedFilters(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    closeEditModal: () => dispatch(closeEditModal()),
    closeDeleteModal: () => dispatch(closeDeleteModal()),
    getFilteredSearchResults: (filterArray) =>
      dispatch(getFilteredSearchResults(filterArray)),
    setSelectedFilters: (filterArray) =>
      dispatch(setSelectedFilters(filterArray)),
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
  isEditModalOpen: PropTypes.bool.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  movieToEditId: PropTypes.number.isRequired,
  movieToDeleteId: PropTypes.number.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  closeEditModal: PropTypes.func.isRequired,
  closeDeleteModal: PropTypes.func.isRequired,
  setSelectedFilters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel);
