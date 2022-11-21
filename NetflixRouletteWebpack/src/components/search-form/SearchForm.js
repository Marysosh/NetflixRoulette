import React from "react";
import "./SearchForm.scss";
import SearchInput from "../search-input/SearchInput";
import FilledButton from "../filled-button/FilledButton";

function SearchForm() {
  return (
    <div className="search-form">
      <SearchInput />
      <FilledButton />
    </div>
  );
}

export default SearchForm;
