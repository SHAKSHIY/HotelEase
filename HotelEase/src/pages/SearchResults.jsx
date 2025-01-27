import React from "react";

const SearchResults = () => {
  // Simulate fetching search results
  const results = [
    { id: 1, name: "Hotel A", location: "Paris", price: "$100/night" },
    { id: 2, name: "Hotel B", location: "London", price: "$200/night" },
  ];

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.name} - {result.location} - {result.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
