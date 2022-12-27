import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  openAddMovieModal,
  closeAddMovieModal,
  openCongratsModal,
  closeCongratsModal,
  addMovie,
  sortAndFilterResults,
} from "../../store/actionCreators";
import {
  getAddMovieModalStatus,
  getCongratsModalStatus,
  getSelectedFilters,
  getSortingOrder,
  getSortingType,
} from "../../store/selectors";

import "./Header.scss";

import Logo from "../logo/Logo";
import AddMovieButton from "../add-movie-button/AddMovieButton";
import EditMovieModal from "../modals/edit-movie-modal/EditMovieModal";
import CongratsModal from "../modals/congrats-modal/CongratsModal";
import { MODAL_TITLES } from "../../utils/constants";

function Header(props) {
  const {
    isAddMovieModalOpen,
    openAddMovieModal,
    closeAddMovieModal,
    isCongratsModalOpen,
    openCongratsModal,
    closeCongratsModal,
    addMovie,
    sortingType,
    sortingOrder,
    selectedFilters,
    sortAndFilterResults,
  } = props;

  const setIsModalOpen = (value) => {
    value ? openAddMovieModal() : closeAddMovieModal();
  };

  const handleMovieEdit = (newMovieData) => {
    const { title, movieURL, overview, genres, rating, releaseDate, runtime } =
      newMovieData;

    const refactoredNewMovieData = {
      title,
      vote_average: Number(rating),
      release_date: releaseDate,
      poster_path: movieURL,
      overview,
      runtime: Number(runtime),
      genres: genres.split(", "),
    };
    addMovie(
      refactoredNewMovieData,
      sortAndFilterResults.bind(
        null,
        sortingType,
        sortingOrder,
        selectedFilters
      )
    );

    closeAddMovieModal();
  };

  const setCongratsModalOpen = (value) => {
    value ? openCongratsModal() : closeCongratsModal();
  };

  const formInitialValues = {
    title: "My custom title",
    movieURL: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
    releaseDate: "2020-10-10",
    rating: "8.0",
    runtime: "100",
    overview: "My overview",
  };

  return (
    <div className="header">
      <Logo />
      <AddMovieButton onClick={() => setIsModalOpen(true)} />
      {isAddMovieModalOpen && (
        <EditMovieModal
          modalTitle={MODAL_TITLES.ADD_MOVIE}
          handleEditModalOpen={setIsModalOpen}
          handleMovieEdit={handleMovieEdit}
          showCongratsModal={setCongratsModalOpen}
          initialValues={formInitialValues}
        />
      )}
      {isCongratsModalOpen && (
        <CongratsModal handleCongratsModalOpen={setCongratsModalOpen} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAddMovieModalOpen: getAddMovieModalStatus(state),
    isCongratsModalOpen: getCongratsModalStatus(state),
    selectedFilters: getSelectedFilters(state),
    sortingType: getSortingType(state),
    sortingOrder: getSortingOrder(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openAddMovieModal: () => dispatch(openAddMovieModal()),
    closeAddMovieModal: () => dispatch(closeAddMovieModal()),
    openCongratsModal: () => dispatch(openCongratsModal()),
    closeCongratsModal: () => dispatch(closeCongratsModal()),
    addMovie: (data) => dispatch(addMovie(data)),
    sortAndFilterResults: (sortingType, sortingOrder, selectedFilters) =>
      dispatch(
        sortAndFilterResults(sortingType, sortingOrder, selectedFilters)
      ),
  };
};

Header.propTypes = {
  isAddMovieModalOpen: PropTypes.bool,
  openAddMovieModal: PropTypes.func.isRequired,
  closeAddMovieModal: PropTypes.func.isRequired,
  isCongratsModalOpen: PropTypes.bool,
  openCongratsModal: PropTypes.func.isRequired,
  closeCongratsModal: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  sortingOrder: PropTypes.string,
  sortingType: PropTypes.string,
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  sortAndFilterResults: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isAddMovieModalOpen: false,
  isCongratsModalOpen: false,
  sortingType: "vote_average",
  sortingOrder: "desc",
  selectedFilters: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
