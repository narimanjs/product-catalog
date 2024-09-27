import React, { useState } from "react";

interface PriceSortButtonProps {
  onSort: (direction: "asc" | "desc") => void;
}

const PriceSortButton: React.FC<PriceSortButtonProps> = ({ onSort }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);
    onSort(newDirection);
  };

  return (
    <button
      onClick={handleSort}
      className='mt-6 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
    >
      <span className='mr-2'>Сортировка по цене</span>
      {sortDirection === "asc" ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 15l7-7 7 7'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      )}
    </button>
  );
};

export default PriceSortButton;
