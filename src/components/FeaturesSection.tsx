// src/components/FeaturesSection.tsx
import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Comprehensive Coverage',
      description: 'Access pair data from all major AMMs and blockchains seamlessly.',
      image: '/images/all-pairs.svg',
    },
    {
      title: 'Instant Pair Alerts',
      description: 'Receive real-time notifications for newly created pairs.',
      image: '/images/real-time.svg',
    },
    {
      title: 'Developer API',
      description: 'Integrate our robust API to power your DeFi projects effortlessly.',
      image: '/images/developer-api.svg',
    },
  ];

  return (
    <section id="features" className="py-24 pt-0 bg-deepSpace">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-display text-electricBlue mb-12">Why Choose PairTracker?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="glass-card hover:shadow-neon transition-fast">
              <img src={feature.image} alt={feature.title} className="mx-auto w-20 h-20 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-slateGray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
