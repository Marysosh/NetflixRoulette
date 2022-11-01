// eslint-disable-next-line no-unused-vars
import React from "react";
import Counter from "./components/counter/Counter";
import SearchInput from "./components/search-input/SearchInput";
import GenreDropdown from "./components/genre-dropdown/GenreDropdown";
import filledBtn from "./components/filled-button/FilledButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Counter />
      <div className="search-form">
        <SearchInput />
        {filledBtn}
      </div>
      <GenreDropdown />
    </div>
  );
}

export default App;
