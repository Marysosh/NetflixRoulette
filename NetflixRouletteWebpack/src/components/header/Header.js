import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Header.scss";

import Logo from "../logo/Logo";
import AddMovieButton from "../add-movie-button/AddMovieButton";
import AddMovieModal from "../modals/add-movie-modal/AddMovieModal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  setIsOpen = (value) => {
    const { openModalHandler } = this.props;

    this.setState({ isOpen: value });
    openModalHandler(value);
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="header">
        <Logo />
        <AddMovieButton onClick={() => this.setIsOpen(true)} />
        {isOpen && <AddMovieModal setIsOpen={this.setIsOpen} />}
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};
