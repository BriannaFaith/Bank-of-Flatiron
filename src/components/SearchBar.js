
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };



  return (
    <input
      type="text"
      placeholder="Search by description"
      value={searchItem}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
