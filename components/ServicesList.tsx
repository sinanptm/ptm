'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '@/constants';

const ServicesList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextService = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevService = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextService();
      } else if (e.key === 'ArrowLeft') {
        prevService();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextService, prevService]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-russo-one text-center mb-12 text-orange-500"
      >
        Holistic Healing Practices
      </motion.h2>
      <motion.div
        className="relative"
        aria-roledescription="carousel"
        aria-label="Holistic Healing Practices"
        variants={containerVariants}
      >
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.name}
                service={service}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                hasButton
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default memo(ServicesList);
