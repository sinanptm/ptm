'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink } from 'lucide-react';
import { centers } from '@/constants';
import { Center } from '@/types';
import Link from 'next/link';

const AllCenters = () => {
  const [selectedCenter, setSelectedCenter] = useState<Center | null>(null);
  useEffect(() => {
    if (!selectedCenter && centers.length > 0) {
      setSelectedCenter(centers[0]);
    }
  }, [selectedCenter]);

  const handleCenterClick = useCallback((center: Center) => {
    setSelectedCenter(center);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl mb-6 relative inline-block">
            Our <span className="text-orange-500">Centers</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our network of Kalari centers across Kerala, each offering unique
            experiences in the ancient art of Kalarippayattu.
          </p>
        </motion.div>

        <div className="space-y-8">
          {centers.map((center, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`overflow-hidden transition-all duration-500 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500 group cursor-pointer ${selectedCenter?.name === center.name ? 'border-orange-500 ring-1 ring-orange-500/20' : ''
                  }`}
                onClick={() => handleCenterClick(center)}
              >
                <div className="grid md:grid-cols-[1fr,2fr] gap-6 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${selectedCenter?.name === center.name ? 'bg-orange-500' : 'bg-gray-600 group-hover:bg-orange-500/50'
                        } transition-colors duration-300`} />
                      <h2 className="text-xl">{center.name}</h2>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin size={16} className="text-orange-500" />
                      <Link
                        prefetch={false}
                        href={center.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {center.location}
                      </Link>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                      {center.description}
                    </p>
                    <p className="text-sm text-orange-400">
                      <span className="font-bold text-gray-300">Instructor:</span> {center.instructor} Gurukkal
                    </p>
                    <Link
                      prefetch={false}
                      href={center.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-2 underline text-gray-400 hover:text-gray-200"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={14} />
                    </Link>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedCenter?.name === center.name ? 'map' : 'hidden'}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: selectedCenter?.name === center.name ? 1 : 0,
                        height: selectedCenter?.name === center.name ? 'auto' : 0
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-xl overflow-hidden"
                      suppressHydrationWarning
                    >
                      {selectedCenter?.name === center.name && (
                        <div className="relative rounded-xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                          <div className="w-full h-full aspect-video relative rounded-xl overflow-hidden">
                            <iframe
                              src={`${center.embedUrl}`}
                              width="100%"
                              height="100%"
                              title={`${center.location}`}
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="absolute inset-0"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(AllCenters);
