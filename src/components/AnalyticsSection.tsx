// src/components/AnalyticsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, CurrencyDollarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const AnalyticsSection: React.FC = () => {
  const metrics = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      label: 'Total Pairs',
      value: '10,000+',
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      label: 'Total Liquidity',
      value: '$500M+',
    },
    {
      icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
      label: 'Daily Volume',
      value: '$50M+',
    },
  ];

  return (
    <section id="analytics" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-display text-electricBlue mb-12"
        >
          Advanced Analytics Dashboard
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 text-slateGray"
        >
          Dive deep into DeFi markets with interactive charts, liquidity data, and comprehensive pair performance metrics.
        </motion.p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card flex flex-col items-center p-6"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-electricBlue mb-4"
              >
                {metric.icon}
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-2">{metric.value}</h3>
              <p className="text-slateGray">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-5xl mx-auto"
          >
            <img 
              src="/images/analytics-dashboard.png" 
              alt="Analytics Dashboard" 
              className="mx-auto rounded-lg shadow-2xl"
            />
            
            {/* Interactive Overlay Elements */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-deepSpace/80 to-deepSpace/40 opacity-50 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-electricBlue hover:bg-neonGreen text-white px-8 py-3 rounded-full font-semibold shadow-neon transition-colors duration-300"
              >
                Explore Dashboard
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Animated Background Elements */}
          <motion.div 
            className="absolute top-1/2 left-0 w-64 h-64 bg-electricBlue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-vibrantPink/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
