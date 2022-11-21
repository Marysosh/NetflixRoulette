import React, { useState, useContext } from "react";
import UserContext from "../../utils/contexts";

import "./Header.scss";

import Logo from "../logo/Logo";
import AddMovieButton from "../add-movie-button/AddMovieButton";
import EditMovieModal from "../modals/edit-movie-modal/EditMovieModal";
import CongratsModal from "../modals/congrats-modal/CongratsModal";

function Header() {
  const [isAddMovieModalOpen, setAddMovieModalOpen] = useState(false);
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);

  const { openModalHandler } = useContext(UserContext);
  const { addNewMovieHandler } = useContext(UserContext);

  const setIsModalOpen = (value) => {
    setAddMovieModalOpen(value);
    openModalHandler(value);
  };

  const handleMovieEdit = (newMovieData) => {
    addNewMovieHandler(newMovieData);
    setIsModalOpen(false);
  };

  const setCongratsModalOpen = (value) => {
    setIsCongratsModalOpen(value);
    openModalHandler(value);
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

export default Header;
