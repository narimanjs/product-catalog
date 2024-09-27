import React from "react";

interface HeaderProps {
  onSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <header className='fixed top-0 left-0 w-full bg-blue-500 text-white p-4 flex justify-between items-center shadow-md z-50'>
      <h1 className='text-2xl font-semibold'>Product Catalog</h1>
      <input
        type='text'
        placeholder='Search...'
        onChange={handleSearchChange}
        className='px-4 py-2 rounded-lg text-black'
      />
    </header>
  );
};

export default Header;
