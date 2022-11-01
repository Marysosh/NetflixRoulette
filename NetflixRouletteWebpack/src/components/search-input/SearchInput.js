import React from "react";
import "./SearchInput.scss";

class SearchInput extends React.PureComponent {
  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="What do you want to watch?"
      />
    );
  }
}
export default SearchInput;
