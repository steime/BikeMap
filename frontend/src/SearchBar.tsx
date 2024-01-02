import React, { useState } from 'react';
import { Gebiet } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  gebiete: Gebiet[];
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="SearchContainer">
      <input
        className='SearchBar'
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search Gebiete..."
      />
      <button className="SearchIcon">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;