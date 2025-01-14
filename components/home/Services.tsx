'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import HomeSectionWrapper from '@/components/hoc/HomeSectionWrapper';
import ServiceCard from '../ServiceCard';
import { Service } from '@/types';

export const services: Service[] = [
  {
    name: 'Kalari',
    description: 'Ancient Indian martial art and healing system that combines combat techniques with therapeutic practices to promote physical and mental well-being.',
    image: '/assets/images/training.jpg',
    color: 'from-red-600 to-red-800',
  },
  {
    name: 'Ayurveda',
    description: 'Ancient Indian system of natural healing that focuses on balancing the body, mind, and spirit using herbs, diet, and lifestyle practices.',
    image: '/assets/images/uyichil.avif',
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'Unani',
    description: 'Traditional Persian medicine that emphasizes the use of natural remedies and focuses on the four humors to maintain health and treat illnesses.',
    image: '/assets/images/unani.webp',
    color: 'from-blue-500 to-blue-700',
  }
];

const HolisticServices = () => {
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
    <HomeSectionWrapper>
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
    </HomeSectionWrapper>
  );
};
export default memo(HolisticServices)

