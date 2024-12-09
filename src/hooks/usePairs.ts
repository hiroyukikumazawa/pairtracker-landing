// src/hooks/usePairs.ts
import { useQuery } from 'react-query';
import axios from 'axios';

export interface Token {
  id: string;
  symbol: string;
  name: string;
  decimals: number;
}

export interface Pair {
  id: string;
  token0: Token;
  token1: Token;
  reserve0: string;
  reserve1: string;
  totalSupply: string;
  reserveUSD: string;
  volumeUSD: string;
  txCount: number;
  createdAtTimestamp: number;
}

const dummyPairs: Pair[] = [
  {
    id: '0x123...',
    token0: {
      id: '0xToken0',
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
    },
    token1: {
      id: '0xToken1',
      symbol: 'USDT',
      name: 'Tether',
      decimals: 6,
    },
    reserve0: '5000',
    reserve1: '10000000',
    totalSupply: '100000',
    reserveUSD: '2000000',
    volumeUSD: '500000',
    txCount: 1500,
    createdAtTimestamp: 1625097600, // Example timestamp
  },
  {
    id: '0x456...',
    token0: {
      id: '0xToken2',
      symbol: 'BTC',
      name: 'Bitcoin',
      decimals: 8,
    },
    token1: {
      id: '0xToken3',
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
    },
    reserve0: '3000',
    reserve1: '9000000',
    totalSupply: '80000',
    reserveUSD: '1500000',
    volumeUSD: '300000',
    txCount: 1200,
    createdAtTimestamp: 1625184000,
  },
  // Add more dummy pairs as needed
];

const fetchPairs = async (): Promise<Pair[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyPairs);
    }, 1000); // 1 second delay
  });
};

export const usePairs = () => {
  return useQuery<Pair[], Error>('pairs', fetchPairs, {
    refetchInterval: 10000, // Poll every 10 seconds for live updates (simulated)
    staleTime: 5000,
  });
};
