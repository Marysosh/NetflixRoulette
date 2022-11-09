import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Header.scss";

import Logo from "../logo/Logo";
import AddMovieButton from "../add-movie-button/AddMovieButton";
import EditMovieModal from "../modals/edit-movie-modal/EditMovieModal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMovieModalOpen: false,
    };
  }

  setIsModalOpen = (value) => {
    const { openModalHandler } = this.props;

    this.setState({ isAddMovieModalOpen: value });
    openModalHandler(value);
  };

  handleMovieEdit = (newMovieData) => {
    // const movieOldData = moviesArray.find((item) => item.id === movieToEdit);
    // setMoviesArray([
    //   ...moviesArray.filter((item) => item.id !== movieToEdit),
    //   { ...movieOldData, ...newMovieData },
    // ]);
    // handleEditModalOpen(false);
    console.log(newMovieData);
    this.setIsModalOpen(false);
  };

  render() {
    const { isAddMovieModalOpen } = this.state;

    return (
      <div className="header">
        <Logo />
        <AddMovieButton onClick={() => this.setIsModalOpen(true)} />
        {isAddMovieModalOpen && (
          <EditMovieModal
            modalTitle="Add movie"
            handleEditModalOpen={this.setIsModalOpen}
            handleMovieEdit={this.handleMovieEdit}
          />
        )}
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};
