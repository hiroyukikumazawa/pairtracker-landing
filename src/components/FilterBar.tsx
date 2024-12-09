// src/components/FilterBar.tsx
import React from 'react';

interface FilterBarProps {
  filter: 'all' | 'active' | 'new';
  setFilter: (filter: 'all' | 'active' | 'new') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-lg ${
          filter === 'all'
            ? 'bg-electricBlue text-deepSpace'
            : 'bg-gray-700 text-slateGray hover:bg-electricBlue hover:text-deepSpace'
        } transition-fast`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-4 py-2 rounded-lg ${
          filter === 'active'
            ? 'bg-electricBlue text-deepSpace'
            : 'bg-gray-700 text-slateGray hover:bg-electricBlue hover:text-deepSpace'
        } transition-fast`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('new')}
        className={`px-4 py-2 rounded-lg ${
          filter === 'new'
            ? 'bg-electricBlue text-deepSpace'
            : 'bg-gray-700 text-slateGray hover:bg-electricBlue hover:text-deepSpace'
        } transition-fast`}
      >
        New
      </button>
    </div>
  );
};

export default FilterBar;
