// src/components/CTASection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="cta" className="py-24 bg-deepSpace text-white relative">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-electricBlue opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-neonGreen opacity-15 rounded-full animate-bounce"></div>

      <div className="container mx-auto text-center px-6 relative z-10">
        <h2 className="text-5xl font-display mb-6">Ready to Explore?</h2>
        <p className="text-lg md:text-xl mb-8 text-slateGray">
          Discover new trading pairs and stay ahead in the dynamic DeFi markets.
        </p>
        <button onClick={() => navigate('/app')} className="bg-vibrantPink hover:bg-brightYellow text-deepSpace py-3 px-8 rounded-lg text-lg font-semibold shadow-neon transition-fast">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
