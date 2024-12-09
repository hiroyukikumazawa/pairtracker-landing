// src/components/FeaturesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, BellIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Comprehensive Coverage',
      description: 'Access pair data from all major AMMs and blockchains seamlessly.',
      icon: <ChartBarIcon className="mx-auto w-20 h-20 mb-6 text-electricBlue" />,
    },
    {
      title: 'Instant Pair Alerts',
      description: 'Receive real-time notifications for newly created pairs.',
      icon: <BellIcon className="mx-auto w-20 h-20 mb-6 text-electricBlue" />,
    },
    {
      title: 'Developer API',
      description: 'Integrate our robust API to power your DeFi projects effortlessly.',
      icon: <CodeBracketIcon className="mx-auto w-20 h-20 mb-6 text-electricBlue" />,
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="features"
      className="py-24 pt-0 bg-deepSpace"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-display text-electricBlue mb-12"
        >
          Why Choose PairTracker?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass-card hover:shadow-neon transition-fast"
            >
              <div className="group p-2">
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ 
                    duration: 1,
                    ease: "easeInOut",
                    type: "tween"
                  }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4 text-white"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-slateGray"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <motion.div 
          className="absolute left-0 w-96 h-96 bg-electricBlue/10 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute right-0 w-96 h-96 bg-vibrantPink/10 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
