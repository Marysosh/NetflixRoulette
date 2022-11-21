import React from "react";
import "./Header.scss";

import Logo from "../logo/Logo";
import AddMovieButton from "../add-movie-button/AddMovieButton";

function Header() {
  return (
    <div className="header">
      <Logo />
      <AddMovieButton />
    </div>
  );
}

export default Header;
