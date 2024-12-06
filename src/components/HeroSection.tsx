// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            // className="bg-deepSpace text-white py-24 relative"
        >
            <section className="bg-deepSpace text-white py-24 relative">
                {/* Geometric Shapes */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-purpleHaze opacity-20 rotate-45"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-neonGreen opacity-15 -rotate-12"></div>

                <div className="container mx-auto text-center px-6 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-display mb-6 neon-glow">
                        Discover Every <span className="text-electricBlue">DeFi Pair</span>
                    </h1>
                    <p className="text-lg md:text-2xl mb-8">
                        Track and explore all trading pairs across global Automated Market Makers instantly.
                    </p>
                    <button className="bg-electricBlue hover:bg-neonGreen text-deepSpace py-3 px-8 rounded-lg text-lg font-semibold shadow-neon transition-fast">
                        Get Started
                    </button>
                </div>
            </section>
        </motion.section>
    );
};

export default HeroSection;
