// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deepSpace text-slateGray py-10">
      <div className="container mx-auto text-center">
        <p className="mb-6">&copy; {new Date().getFullYear()} PairTracker.org. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com/pairtracker" className="hover:text-electricBlue transition-fast">Twitter</a>
          <a href="https://discord.com/invite/pairtracker" className="hover:text-electricBlue transition-fast">Discord</a>
          <a href="https://github.com/pairtracker" className="hover:text-electricBlue transition-fast">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
