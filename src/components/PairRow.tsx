// src/components/PairRow.tsx
import React from 'react';
import { Pair, useNetworks } from '../hooks/usePairs';
import { LinkIcon } from '@heroicons/react/24/outline';

interface PairRowProps {
  pair: Pair;
}

const PairRow: React.FC<PairRowProps> = ({ pair }) => {
  const { data: networks } = useNetworks();
  // Function to get Etherscan or appropriate block explorer URL based on blockchain
  const getBlockExplorerUrl = (address: string) => {
    // Placeholder: Replace with actual logic based on blockchain
    const network = networks?.find((n) => n.id === pair.amm.networkId);
    return `${network?.explorerUrl}address/${address}`;
  };

  return (
    <tr className="bg-gray-800 hover:bg-gray-700 transition-fast">
      <td className="px-4 py-2 text-slateGray">
        <a href={getBlockExplorerUrl(pair.token0.address)} target="_blank" rel="noopener noreferrer">
          {pair.token0.address}
        </a>
      </td>
      <td className="px-4 py-2 text-slateGray">
        <a href={getBlockExplorerUrl(pair.token1.address)} target="_blank" rel="noopener noreferrer">
          {pair.token1.address}
        </a>
      </td>
      <td className="px-4 py-2 text-slateGray">
        <a href={getBlockExplorerUrl(pair.pairAddress)} target="_blank" rel="noopener noreferrer">
          {pair.pairAddress}
        </a>
      </td>
      <td className="px-4 py-2 text-slateGray">
        <a
          href={getBlockExplorerUrl(pair.pairAddress)}
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
