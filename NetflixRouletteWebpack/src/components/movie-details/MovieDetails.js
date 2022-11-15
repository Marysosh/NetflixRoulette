import React from "react";

import "./MovieDetails.scss";
import thinLogo from "./logo_thin.png";
import searchIcon from "./search_icon.png";
import PulpFiction from "./PulpFiction.png";
import ratingBorder from "./rating-frame.png";

const movieInfo = {
  title: "Pulp Fiction",
  genre: "Action & Adventure",
  releaseDate: "2004",
  rating: "8.9",
  runtime: "2h 34min",
  image: PulpFiction,
  overview:
    "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
  id: "m1",
};

function MovieDetails() {
  const { title, genre, releaseDate, rating, runtime, image, overview } =
    movieInfo;
  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <div className="logo">
          <img src={thinLogo} alt="thin logo" />
        </div>
        <div className="search-icon">
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>
      <div className="movie-details-body">
        <div className="movie-details-image">
          <img src={image} alt="movie cover" />
        </div>
        <div className="movie-details-info">
          <div className="movie-header">
            <div className="movie-title">{title}</div>
            <div className="movie-rating">
              <img
                className="rating-border"
                src={ratingBorder}
                alt="rating border"
              />
              {rating}
            </div>
          </div>
          <div className="movie-genre">{genre}</div>
          <div className="movie-release-runtime-container">
            <div className="release-date">{releaseDate}</div>
            <div className="runtime">{runtime}</div>
          </div>
          <div className="movie-overview">{overview}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
