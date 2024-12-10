import React from 'react';
import LivePairsTable from '../components/LivePairsTable';
import { useWebSocket } from '../hooks/useWebSocket';

const AppPage: React.FC = () => {
  useWebSocket();

  return (
    <div>
      <LivePairsTable />
    </div>
  );
};

export default AppPage;
