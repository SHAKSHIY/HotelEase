import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { state } = useLocation();
  const { searchType } = state || {};

  return (
    <div className="results">
      <h2>Search Results - {searchType || "General"}</h2>
      {searchType === "voice" && <p>Implement Voice Search Results Here</p>}
      {searchType === "image" && <p>Implement Image Search Results Here</p>}
    </div>
  );
};

export default SearchResults;