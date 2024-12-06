// src/components/AnalyticsSection.tsx
import React from 'react';

const AnalyticsSection: React.FC = () => {
  return (
    <section id="analytics" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-display text-electricBlue mb-12">Advanced Analytics Dashboard</h2>
        <p className="text-lg md:text-xl mb-12 text-slateGray">
          Dive deep into DeFi markets with interactive charts, liquidity data, and comprehensive pair performance metrics.
        </p>
        <div className="relative">
          <img src="/images/analytics-dashboard.svg" alt="Analytics Dashboard" className="mx-auto w-full max-w-5xl" />
          {/* Add interactive overlays or animations as needed */}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
