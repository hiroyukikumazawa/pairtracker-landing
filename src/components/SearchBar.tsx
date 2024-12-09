// src/components/SearchBar.tsx
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center bg-gray-700 bg-opacity-30 rounded-lg px-4 py-2">
      <MagnifyingGlassIcon className="h-5 w-5 text-slateGray mr-2" />
      <input
        type="text"
        placeholder="Search pairs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent focus:outline-none text-slateGray w-full"
      />
    </div>
  );
};

export default SearchBar;
