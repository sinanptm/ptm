'use client'
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { getYears } from '@/lib/utils';

const HeroSection = () => {
    const years = useMemo(getYears, []);

    return (
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 py-12'>
            <div className="text-center max-w-7xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                    About <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-orange-500"
                    >
                        PTM Kalari
                    </motion.span> Pavukandy
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4"
                >
                    Discover our rich history, mission, and the dedicated team behind our traditional healing and martial arts center.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold "
                >
                    <span className='text-orange-500 lg:text-6xl text-3xl '>{years}</span> Years of Tradition and Excellence
                </motion.div>
            </div>
        </section>
    );
};

export default memo(HeroSection);
