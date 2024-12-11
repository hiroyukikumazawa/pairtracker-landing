// src/hooks/useWebSocket.ts
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import io from 'socket.io-client';
import { Pair } from './usePairs';

const SOCKET_SERVER_URL = 'https://api.pairtracker.org'; // Replace with your server URL

export const useWebSocket = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('new-pair', (newPair: Pair) => {
      // Update the 'pairs' query data
      queryClient.setQueryData<Pair[]>('pairs', (oldData = []) => [newPair, ...oldData]);
    });

    socket.on('update-pair', (updatedPair: Pair) => {
      queryClient.setQueryData<Pair[]>('pairs', (oldData = []) =>
        oldData.map((pair) => (pair.id === updatedPair.id ? updatedPair : pair))
      );
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socket.disconnect();
    };
  }, [queryClient]);
};
