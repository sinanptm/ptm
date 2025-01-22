'use client'
import { motion } from 'framer-motion';
import { memo } from 'react';

const LogoText = () => {
    return (
        <motion.h1 whileHover={{ scale: 1.1 }}>
            <span className='font-bold text-orange-500 text-3xl'>PTM</span> {' '}
            <span className='font-bebas text-lg'>Kalari</span>
        </motion.h1>
    );
};

export default memo(LogoText);