import React from "react";
import "./search.css";

const Search = (props) => {
  const handler = (e) => {
    if (e.target.value === "") {
      props.setSearch(" ");
    } else {
      props.setSearch(e.target.value);
    }
  };

  return (
    <div>
      <h1 className="search">Search Movies</h1>
      <input
        className="input"
        placeholder="Browse over 280,000 titles"
        onChange={(e) => {
          handler(e);
        }}
      />
    </div>
  );
};

export default Search;
