import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search">
      <label className="query">Procurar:</label>
      <input
        type="search"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => {
          onSearch(query);
          setQuery("");
        }}
      >
        Procurar
      </button>
    </div>
  );
};

export default Search;
