import React from 'react';
import LivePairsTable from '../components/LivePairsTable';
import AnalyticsCharts from '../components/AnalyticsCharts';
import { useWebSocket } from '../hooks/useWebSocket';

const AppPage: React.FC = () => {
  useWebSocket();

  return (
    <div>
      <LivePairsTable />
      <AnalyticsCharts />
    </div>
  );
};

export default AppPage;
