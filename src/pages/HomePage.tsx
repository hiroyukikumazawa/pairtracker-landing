// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AnalyticsSection from '../components/AnalyticsSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AnalyticsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
