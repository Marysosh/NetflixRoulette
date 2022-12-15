import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SearchForm.scss";
// import SearchInput from "../search-input/SearchInput";
import FilledButton from "../filled-button/FilledButton";

function SearchForm() {
  const { searchQuery } = useParams();
  const navigate = useNavigate();

  const searchValue = useRef();
  useEffect(() => {
    searchValue.current.value = searchQuery || "";
  }, [searchQuery]);

  const btnHandler = (e) => {
    e.preventDefault();
    return searchValue.current.value
      ? navigate(`${searchValue.current.value}`)
      : navigate(`/`);
  };

  return (
    <form onSubmit={btnHandler}>
      <div className="search-form">
        {/* <SearchInput /> */}
        <input
          className="search-input"
          type="text"
          placeholder="What do you want to watch?"
          ref={searchValue}
        />
        <FilledButton message="Search" handler={btnHandler} />
      </div>
    </form>
  );
}

export default SearchForm;
