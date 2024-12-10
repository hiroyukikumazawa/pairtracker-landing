// src/hooks/usePairs.ts
import axios from 'axios';
import { useQuery } from 'react-query';

export interface Token {
  id: string;
  symbol: string;
  name: string;
  address: string;
  networkId: string;
}

export interface Network {
  id: string;
  name: string;
  rpcUrl: string;
  explorerUrl: string;
}

export interface Amm {
  networkId: string;
}

export interface Pair {
  id: string;
  amm: Amm;
  ammId: string;
  token0: Token;
  token1: Token;
  token0Id: Token;
  token1Id: Token;
  pairAddress: string;
  createdAt: number;
}

// const dummyPairs: Pair[] = [
//   {
//     id: '0x123...',
//     token0: {
//       id: '0xToken0',
//       symbol: 'ETH',
//       name: 'Ethereum',
//       decimals: 18,
//     },
//     token1: {
//       id: '0xToken1',
//       symbol: 'USDT',
//       name: 'Tether',
//       decimals: 6,
//     },
//     reserve0: '5000',
//     reserve1: '10000000',
//     totalSupply: '100000',
//     reserveUSD: '2000000',
//     volumeUSD: '500000',
//     txCount: 1500,
//     createdAtTimestamp: 1625097600, // Example timestamp
//   },
//   {
//     id: '0x456...',
//     token0: {
//       id: '0xToken2',
//       symbol: 'BTC',
//       name: 'Bitcoin',
//       decimals: 8,
//     },
//     token1: {
//       id: '0xToken3',
//       symbol: 'USDC',
//       name: 'USD Coin',
//       decimals: 6,
//     },
//     reserve0: '3000',
//     reserve1: '9000000',
//     totalSupply: '80000',
//     reserveUSD: '1500000',
//     volumeUSD: '300000',
//     txCount: 1200,
//     createdAtTimestamp: 1625184000,
//   },
//   // Add more dummy pairs as needed
// ];

const fetchPairs = async (): Promise<Pair[]> => {
  // Simulate network delay
  const response = await axios.get(`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/api/swap-pairs/2`);
  console.log(response.data);
  return response.data;
};

const fetchNetworks: () => Promise<Network[]> = async () => {
  const response = await axios.get(`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/api/networks`);
  console.log(response.data);
  return response.data;
};

export const usePairs = () => {
  return useQuery<Pair[], Error>('pairs', fetchPairs);
};

export const useNetworks = () => {
  return useQuery<Network[], Error>('networks', fetchNetworks);
};
