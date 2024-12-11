// src/components/LivePairsTable.tsx
import React, { useState, useMemo } from 'react';
import { usePairs } from '../hooks/usePairs';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import PairRow from './PairRow';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

const LivePairsTable: React.FC = () => {
  const { data, isLoading, isError, error } = usePairs();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'new'>('all');

  const filteredPairs = useMemo(() => {
    if (!data) return [];
    return data.filter((pair) => {
      const searchMatch =
        pair.token0.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pair.token1.symbol.toLowerCase().includes(searchTerm.toLowerCase());

      let filterMatch = true;
      if (filter === 'active') {
        filterMatch = parseFloat(pair.volumeUSD) > 1000; // Example criterion
      } else if (filter === 'new') {
        const createdDate = new Date(pair.createdAtTimestamp * 1000);
        const now = new Date();
        const diffDays = (now.getTime() - createdDate.getTime()) / (1000 * 3600 * 24);
        filterMatch = diffDays <= 7; // Pairs created within the last 7 days
      }

      return searchMatch && filterMatch;
    });
  }, [data, searchTerm, filter]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message={error?.message || 'An error occurred'} />;

  return (
    <div className="container mx-auto px-6 py-8" id="live-pairs">
      <h2 className="text-3xl font-display text-electricBlue mb-6">Live Trading Pairs</h2>
      <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-slateGray">Pair</th>
              <th className="px-4 py-2 text-left text-slateGray">Reserve (USD)</th>
              <th className="px-4 py-2 text-left text-slateGray">Volume (24h)</th>
              <th className="px-4 py-2 text-left text-slateGray">Transactions</th>
              <th className="px-4 py-2 text-left text-slateGray">Link</th>
            </tr>
          </thead>
          <tbody>
            {filteredPairs.length > 0 ? (
              filteredPairs.map((pair) => <PairRow key={pair.id} pair={pair} />)
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-slateGray">
                  No pairs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LivePairsTable;
