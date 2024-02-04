
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleChange = (e) => {
    setSearchItem(e.target.value);
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
