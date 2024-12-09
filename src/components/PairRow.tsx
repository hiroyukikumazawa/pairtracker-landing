// src/components/PairRow.tsx
import React from 'react';
import { Pair } from '../hooks/usePairs';
import { LinkIcon } from '@heroicons/react/24/outline';

interface PairRowProps {
  pair: Pair;
}

const PairRow: React.FC<PairRowProps> = ({ pair }) => {
  // Function to get Etherscan or appropriate block explorer URL based on blockchain
  const getBlockExplorerUrl = (pairId: string) => {
    // Placeholder: Replace with actual logic based on blockchain
    return `https://etherscan.io/token/${pairId}`;
  };

  return (
    <tr className="bg-gray-800 hover:bg-gray-700 transition-fast">
      <td className="px-4 py-2 flex items-center space-x-2">
        <img
          src={`https://logo.clearbit.com/${pair.token0.id}.png`}
          alt={pair.token0.symbol}
          className="h-6 w-6 rounded-full"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = '/images/default-token.png'; // Fallback image
          }}
        />
        <img
          src={`https://logo.clearbit.com/${pair.token1.id}.png`}
          alt={pair.token1.symbol}
          className="h-6 w-6 rounded-full"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = '/images/default-token.png'; // Fallback image
          }}
        />
        <span className="text-slateGray font-semibold">
          {pair.token0.symbol}/{pair.token1.symbol}
        </span>
      </td>
      <td className="px-4 py-2 text-slateGray">${parseFloat(pair.reserveUSD).toLocaleString()}</td>
      <td className="px-4 py-2 text-slateGray">${parseFloat(pair.volumeUSD).toLocaleString()}</td>
      <td className="px-4 py-2 text-slateGray">{pair.txCount}</td>
      <td className="px-4 py-2 text-slateGray">
        <a
          href={getBlockExplorerUrl(pair.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-electricBlue hover:text-neonGreen"
        >
          <LinkIcon className="h-5 w-5 inline" />
        </a>
      </td>
    </tr>
  );
};

export default PairRow;
