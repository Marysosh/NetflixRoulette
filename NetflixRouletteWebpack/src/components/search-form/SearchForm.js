import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./SearchForm.scss";
// import SearchInput from "../search-input/SearchInput";
import FilledButton from "../filled-button/FilledButton";

function SearchForm() {
  const { searchQuery } = useParams();
  const searchValue = useRef();
  useEffect(() => {
    searchValue.current.value = searchQuery || "";
  });
  const btnHandler = () => console.log(searchValue.current.value);
  return (
    <div className="search-form">
      {/* <SearchInput /> */}
      <input
        className="search-input"
        type="text"
        placeholder="What do you want to watch?"
        value={searchValue.current?.value}
        ref={searchValue}
      />
      <FilledButton message="Search" handler={btnHandler} />
    </div>
  );
}

export default SearchForm;
