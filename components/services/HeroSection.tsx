'use client'
import { motion } from 'framer-motion';
import { memo } from 'react';

const HeroSection = () => {
    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-7xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                    Our <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-orange-500"
                    >
                        Healing
                    </motion.span> Services
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
                >
                    Discover our comprehensive range of traditional healing practices, combining ancient wisdom with modern understanding.
                </motion.p>
            </div>
        </section>
    );
};

export default memo(HeroSection);