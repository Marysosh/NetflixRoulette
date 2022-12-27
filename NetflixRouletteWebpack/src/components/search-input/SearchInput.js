import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./SearchInput.scss";

function SearchInput() {
  const { searchQuery } = useParams();
  const searchValue = useRef();
  useEffect(() => {
    searchValue.current.value = searchQuery;
  });
  return (
    <input
      className="search-input"
      type="text"
      placeholder="What do you want to watch?"
      value={searchValue.current?.value}
      ref={searchValue}
    />
  );
}

export default SearchInput;
