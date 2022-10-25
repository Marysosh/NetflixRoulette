import React from "react";
import "./GenreDropdown.scss";

const genreArray = ["Crime", "Documentary", "Horror", "Comedy"];

function GenreDropdown() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="genre-dropdown">
      <button className="genre-dropdown-btn" onClick={handleOpen}>
        Select Genre
      </button>
      {open ? (
        <ul className="genre-dropdown-list">
          {genreArray.map((item) => (
            <li className="genre-dropdown-item">
              <input
                type="checkbox"
                className="genre-dropdown-checkbox"
              ></input>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default GenreDropdown;
