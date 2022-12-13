/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
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
  getMovieToEdit,
  getSelectedFilters,
  getIsAnyModalOpen,
  getMovieDetailsStatus,
} from "../../store/selectors";
import {
  closeDeleteModal,
  closeEditModal,
  deleteMovie,
  fetchMovies,
  getFilteredSearchResults,
  openEditModal,
  setSelectedFilters,
  updateMovie,
} from "../../store/actionCreators";

function SearchResultsPanel(props) {
  const {
    movies: resultsArray,
    fetchMovies,
    isEditModalOpen,
    isDeleteModalOpen,
    movieToEdit,
    editMovie,
    movieToDeleteId,
    deleteMovie,
    openEditModal,
    closeEditModal,
    closeDeleteModal,
    setSelectedFilters,
    isAnyModalOpen,
    setIsModalOpen,
    setIsMovieDetailsOpen,
    movieDetailsStatus,
  } = props;

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setIsModalOpen(isAnyModalOpen);
  }, [isAnyModalOpen]);

  useEffect(() => {
    setIsMovieDetailsOpen(movieDetailsStatus);
  }, [setIsMovieDetailsOpen, movieDetailsStatus]);

  const handleEditModalOpen = (value) => {
    value ? openEditModal() : closeEditModal();
  };

  const handleMovieEdit = (newMovieData) => {
    const { title, runtime, releaseDate, rating, overview, image, genre, id } =
      newMovieData;
    const parsedMovieData = {
      title,
      vote_average: Number(rating),
      release_date: releaseDate,
      poster_path: image,
      overview,
      runtime: Number(runtime),
      genres: genre.split(", "),
      id,
    };
    setSelectedFilters([]);
    editMovie(parsedMovieData);
    closeEditModal();
  };

  const handleMovieDelete = () => {
    setSelectedFilters([]);
    deleteMovie(movieToDeleteId);
    closeDeleteModal();
  };

  return (
    <div className="search-results-panel">
      <ResultsHeader />
      <ResultsCount resultsNumber={resultsArray.length} />
      <SearchResults resultsArray={resultsArray} />
      {isEditModalOpen && (
        <EditMovieModal
          modalTitle="Edit movie"
          handleEditModalOpen={handleEditModalOpen}
          handleMovieEdit={handleMovieEdit}
          editingValues={movieToEdit}
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
    movieToDeleteId: getMovieToDeleteId(state),
    selectedFilters: getSelectedFilters(state),
    movieToEdit: getMovieToEdit(state),
    isAnyModalOpen: getIsAnyModalOpen(state),
    movieDetailsStatus: getMovieDetailsStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    editMovie: (movieData) => dispatch(updateMovie(movieData)),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    openEditModal: () => dispatch(openEditModal()),
    closeEditModal: () => dispatch(closeEditModal()),
    closeDeleteModal: () => dispatch(closeDeleteModal()),
    getFilteredSearchResults: (filterArray) =>
      dispatch(getFilteredSearchResults(filterArray)),
    setSelectedFilters: (filterArray) =>
      dispatch(setSelectedFilters(filterArray)),
  };
};
SearchResultsPanel.propTypes = {
  movies: PropTypes.arrayOf({
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
  movieToDeleteId: PropTypes.number.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  closeEditModal: PropTypes.func.isRequired,
  closeDeleteModal: PropTypes.func.isRequired,
  setSelectedFilters: PropTypes.func.isRequired,
  movieToEdit: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    releaseDate: PropTypes.number,
    rating: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  editMovie: PropTypes.func.isRequired,
  isAnyModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setIsMovieDetailsOpen: PropTypes.func.isRequired,
  movieDetailsStatus: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel);
