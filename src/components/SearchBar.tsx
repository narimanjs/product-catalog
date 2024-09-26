import React from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type='text'
      placeholder='Поиск по названию...'
      onChange={e => onSearch(e.target.value)}
      className='border border-gray-300 rounded-lg p-2 w-full sm:w-80'
    />
  );
};

export default SearchBar;
