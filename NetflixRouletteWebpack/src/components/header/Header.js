import React, { useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserContext from "../../utils/contexts";

import {
  openAddMovieModal,
  closeAddMovieModal,
  openCongratsModal,
  closeCongratsModal,
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
  } = props;

  const { addNewMovieHandler } = useContext(UserContext);

  const setIsModalOpen = (value) => {
    value ? openAddMovieModal() : closeAddMovieModal();
  };

  const handleMovieEdit = (newMovieData) => {
    addNewMovieHandler(newMovieData);
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
  };
};

Header.propTypes = {
  isAddMovieModalOpen: PropTypes.bool.isRequired,
  openAddMovieModal: PropTypes.func.isRequired,
  closeAddMovieModal: PropTypes.func.isRequired,
  isCongratsModalOpen: PropTypes.bool.isRequired,
  openCongratsModal: PropTypes.func.isRequired,
  closeCongratsModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
