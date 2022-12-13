import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  openAddMovieModal,
  closeAddMovieModal,
  openCongratsModal,
  closeCongratsModal,
  addMovie,
} from "../../store/actionCreators";
import {
  getAddMovieModalStatus,
  getCongratsModalStatus,
} from "../../store/selectors";

import "./Header.scss";

import Logo from "../logo/Logo";
import AddMovieButton from "../add-movie-button/AddMovieButton";
import EditMovieModal from "../modals/edit-movie-modal/EditMovieModal";
import CongratsModal from "../modals/congrats-modal/CongratsModal";

function Header(props) {
  const {
    isAddMovieModalOpen,
    openAddMovieModal,
    closeAddMovieModal,
    isCongratsModalOpen,
    openCongratsModal,
    closeCongratsModal,
    addMovie,
  } = props;

  const setIsModalOpen = (value) => {
    value ? openAddMovieModal() : closeAddMovieModal();
  };

  const handleMovieEdit = (newMovieData) => {
    const { title, image, overview, genre, rating, releaseDate, runtime } =
      newMovieData;

    const refactoredNewMovieData = {
      title,
      vote_average: Number(rating),
      release_date: releaseDate,
      poster_path: image,
      overview,
      runtime: Number(runtime),
      genres: genre.split(", "),
    };
    addMovie(refactoredNewMovieData);

    closeAddMovieModal();
  };

  const setCongratsModalOpen = (value) => {
    value ? openCongratsModal() : closeCongratsModal();
  };

  return (
    <div className="header">
      <Logo />
      <AddMovieButton onClick={() => setIsModalOpen(true)} />
      {isAddMovieModalOpen && (
        <EditMovieModal
          modalTitle="Add movie"
          handleEditModalOpen={setIsModalOpen}
          handleMovieEdit={handleMovieEdit}
          showCongratsModal={setCongratsModalOpen}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openAddMovieModal: () => dispatch(openAddMovieModal()),
    closeAddMovieModal: () => dispatch(closeAddMovieModal()),
    openCongratsModal: () => dispatch(openCongratsModal()),
    closeCongratsModal: () => dispatch(closeCongratsModal()),
    addMovie: (data) => dispatch(addMovie(data)),
  };
};

Header.propTypes = {
  isAddMovieModalOpen: PropTypes.bool.isRequired,
  openAddMovieModal: PropTypes.func.isRequired,
  closeAddMovieModal: PropTypes.func.isRequired,
  isCongratsModalOpen: PropTypes.bool.isRequired,
  openCongratsModal: PropTypes.func.isRequired,
  closeCongratsModal: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
