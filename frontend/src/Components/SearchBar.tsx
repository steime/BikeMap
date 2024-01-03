import React, { useState } from 'react';
import { Gebiet } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  gebiete: Gebiet[];
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div className="SearchContainer">
      <input
        className='SearchBar'
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Gebiete durchsuchen..."
      />
      <button className="SearchIcon">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;