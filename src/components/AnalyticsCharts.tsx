// src/components/AnalyticsCharts.tsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { usePairs } from '../hooks/usePairs';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const AnalyticsCharts: React.FC = () => {
  const { data, isLoading, isError, error } = usePairs();

  // Example: Top 5 pairs by volume
  const topPairs = data
    ? [...data]
        .sort((a, b) => parseFloat(b.volumeUSD) - parseFloat(a.volumeUSD))
        .slice(0, 5)
        .map((pair) => ({
          name: `${pair.token0.symbol}/${pair.token1.symbol}`,
          Volume: parseFloat(pair.volumeUSD),
        }))
    : [];

  // Example: Volume over time (mock data)
  const volumeOverTime = [
    { name: 'Jan', Volume: 4000 },
    { name: 'Feb', Volume: 3000 },
    { name: 'Mar', Volume: 5000 },
    { name: 'Apr', Volume: 4000 },
    { name: 'May', Volume: 6000 },
    { name: 'Jun', Volume: 7000 },
  ];

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message={error?.message || 'An error occurred'} />;

  return (
    <div className="container mx-auto px-6 py-8" id="analytics">
      <h2 className="text-3xl font-display text-electricBlue mb-6">Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Pairs by Volume */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-white mb-4">Top 5 Pairs by Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topPairs}>
              <CartesianGrid strokeDasharray="3 3" stroke="#64748B" />
              <XAxis dataKey="name" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Volume" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Volume Over Time */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-white mb-4">Volume Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={volumeOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#64748B" />
              <XAxis dataKey="name" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Volume" stroke="#3B82F6" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
