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
  getSortingType,
  getSortingOrder,
} from "../../store/selectors";
import {
  closeDeleteModal,
  closeEditModal,
  deleteMovie,
  openEditModal,
  setSelectedFilters,
  sortAndFilterResults,
  updateMovie,
} from "../../store/actionCreators";

function SearchResultsPanel(props) {
  const {
    movies: resultsArray,
    sortAndFilterResults,
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
    sortingType,
    sortingOrder,
    selectedFilters,
  } = props;

  // useEffect(() => {
  //   sortAndFilterResults();
  // }, []);

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
    const {
      title,
      runtime,
      releaseDate,
      rating,
      overview,
      movieURL,
      genres,
      id,
    } = newMovieData;
    const parsedMovieData = {
      title,
      vote_average: Number(rating),
      release_date: releaseDate,
      poster_path: movieURL,
      overview,
      runtime: Number(runtime),
      genres: genres.split(", "),
      id,
    };
    editMovie(
      parsedMovieData,
      sortAndFilterResults.bind(
        null,
        sortingType,
        sortingOrder,
        selectedFilters
      )
    );
    closeEditModal();
  };

  const handleMovieDelete = () => {
    deleteMovie(
      movieToDeleteId,
      sortAndFilterResults.bind(
        null,
        sortingType,
        sortingOrder,
        selectedFilters
      )
    );
    closeDeleteModal();
  };

  const { title, image, runtime, releaseDate, rating, genre, overview, id } =
    movieToEdit;

  const movieToEditParsedData = {
    movieURL: image,
    overview,
    rating,
    releaseDate,
    runtime,
    title,
    genre,
    id,
  };

  return (
    <div className="search-results-panel">
      <ResultsHeader />
      <ResultsCount resultsNumber={resultsArray?.length} />
      <SearchResults resultsArray={resultsArray} />
      {isEditModalOpen && (
        <EditMovieModal
          modalTitle="Edit movie"
          handleEditModalOpen={handleEditModalOpen}
          handleMovieEdit={handleMovieEdit}
          initialValues={movieToEditParsedData}
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
    sortingType: getSortingType(state),
    sortingOrder: getSortingOrder(state),
    movieToEdit: getMovieToEdit(state),
    isAnyModalOpen: getIsAnyModalOpen(state),
    movieDetailsStatus: getMovieDetailsStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortAndFilterResults: (sortingType, sortingOrder, selectedFilters) =>
      dispatch(
        sortAndFilterResults(sortingType, sortingOrder, selectedFilters)
      ),
    editMovie: (movieData, callbackFn) =>
      dispatch(updateMovie(movieData, callbackFn)),
    deleteMovie: (id, callbackFn) => dispatch(deleteMovie(id, callbackFn)),
    openEditModal: () => dispatch(openEditModal()),
    closeEditModal: () => dispatch(closeEditModal()),
    closeDeleteModal: () => dispatch(closeDeleteModal()),
    setSelectedFilters: (filterArray) =>
      dispatch(setSelectedFilters(filterArray)),
  };
};
SearchResultsPanel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      genre: PropTypes.string,
      releaseDate: PropTypes.string,
      rating: PropTypes.number,
      runtime: PropTypes.string,
      image: PropTypes.string,
      overview: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
  sortAndFilterResults: PropTypes.func.isRequired,
  isEditModalOpen: PropTypes.bool,
  isDeleteModalOpen: PropTypes.bool,
  movieToDeleteId: PropTypes.number,
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
    genre: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
  }),
  editMovie: PropTypes.func.isRequired,
  isAnyModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func.isRequired,
  setIsMovieDetailsOpen: PropTypes.func.isRequired,
  movieDetailsStatus: PropTypes.bool,
  sortingType: PropTypes.string,
  sortingOrder: PropTypes.string,
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
};

SearchResultsPanel.defaultProps = {
  isEditModalOpen: false,
  isDeleteModalOpen: false,
  movieToDeleteId: null,
  movieToEdit: {},
  isAnyModalOpen: false,
  movieDetailsStatus: false,
  sortingType: "vote_average",
  sortingOrder: "desc",
  selectedFilters: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel);
