'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="min-h-fit flex items-center justify-center">
      <div className="text-center space-y-8 px-4 py-14">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-orange-500"
        >
          404
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-russo-one"
        >
          Page Not Found
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-400 max-w-md mx-auto"
        >
          Oops! It seems you've ventured into uncharted territory. Let's get you back on track.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link 
            href="/"
            prefetch
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-black rounded-full font-medium transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;

