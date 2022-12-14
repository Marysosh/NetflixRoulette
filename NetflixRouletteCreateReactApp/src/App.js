import React from "react";
import Counter from "./components/counter/Counter.js";
import SearchInput from "./components/search-input/SearchInput.js";
import GenreDropdown from "./components/genre-dropdown/GenreDropdown.js";
import { filledBtn } from "./components/filled-button/FilledButton.js";
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
