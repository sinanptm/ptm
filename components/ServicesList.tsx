'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '@/constants';

const ServicesList = ({ hasButton = true }: { hasButton?: boolean; }) => {
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

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-russo-one text-center mb-12 text-orange-500"
      >
        Holistic Healing Practices
      </motion.h2>
      <div className="relative" aria-roledescription="carousel" aria-label="Holistic Healing Practices">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              hasButton={hasButton}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2" role="tablist">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 hidden rounded-full sm:block ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-400'
              }`}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Select ${service.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ServicesList)

