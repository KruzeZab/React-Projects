import React from 'react';

const Searchbar = ({ handleSearch, query }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search country by name..."
      value={query}
      onChange={e => handleSearch(e.target.value)}
      autoFocus
    />
  );
};

export default Searchbar;
