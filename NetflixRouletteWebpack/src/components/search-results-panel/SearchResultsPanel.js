import React from "react";
import "./SearchResultsPanel.scss";

import ResultsHeader from "../results-header/ResultsHeader";
import ResultsCount from "../results-count/ResultsCount";
import SearchResults from "../search-results/SearchResults";

import PulpFiction from "./PulpFiction.png";
import BohemianRapsody from "./BohemianRapsody.png";
import BillVol2 from "./BillVol2.png";
import Avengers from "./Avengers.png";
import Inception from "./Inception.png";
import ReservoirDogs from "./ReservoirDogs.png";

const resultsNumber = 39;

const resultsArray = [
  {
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: 2004,
    image: PulpFiction,
    id: "m1",
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    releaseDate: 2003,
    image: BohemianRapsody,
    id: "m2",
  },
  {
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning movie",
    releaseDate: 1994,
    image: BillVol2,
    id: "m3",
  },
  {
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: 2004,
    image: Avengers,
    id: "m4",
  },
  {
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: 2003,
    image: Inception,
    id: "m5",
  },
  {
    title: "Reservoir dogs",
    genre: "Oscar winning movie",
    releaseDate: 1994,
    image: ReservoirDogs,
    id: "m6",
  },
];

function SearchResultsPanel() {
  return (
    <div className="search-results-panel">
      <ResultsHeader />
      <ResultsCount resultsNumber={resultsNumber} />
      <SearchResults resultsArray={resultsArray} />
    </div>
  );
}

export default SearchResultsPanel;
