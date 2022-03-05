import React, { useState } from 'react';
import Countries from './Countries';
import Searchbar from './Searchbar';

import data from '../data.json';

const App = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState(data.countries);

  const handleSearch = term => {
    setQuery(term);
  };

  return (
    <div className="App container mt-5 p-2 border">
      <h4 className="text-center">Search a Country</h4>
      <Searchbar query={query} handleSearch={handleSearch} />
      <Countries countries={countries} query={query} />
    </div>
  );
};

export default App;
