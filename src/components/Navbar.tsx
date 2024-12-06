// Example: src/components/Navbar.tsx
import React from 'react';
import FaviconLogo from './FaviconLogo'; // Adjust the path if necessary

const Navbar: React.FC = () => {
  return (
    <header className="bg-deepSpace text-slateGray sticky top-0 z-50 shadow-neon">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <FaviconLogo />
          <span className="ml-6 text-3xl font-display text-electricBlue">PairTracker</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-neonGreen transition-fast">Features</a>
          <a href="#analytics" className="hover:text-neonGreen transition-fast">Analytics</a>
          <a href="#cta" className="hover:text-neonGreen transition-fast">Get Started</a>
        </nav>
        <button className="md:hidden text-electricBlue hover:text-neonGreen transition-fast">Menu</button>
      </div>
    </header>
  );
};

export default Navbar;
