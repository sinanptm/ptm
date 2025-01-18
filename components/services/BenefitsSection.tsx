'use client'

import { motion } from 'framer-motion';
import { benefits } from '@/constants';
import { memo } from 'react';

const BenefitsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-orange-500 text-sm uppercase tracking-wider font-semibold mb-2 block"
        >
          Traditional vs Modern
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Why Choose <span className="text-orange-500">Traditional Healing</span>?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-gray-300 max-w-3xl mx-auto"
        >
          While modern medicine has its place, our traditional healing practices offer unique benefits
          that have been perfected over thousands of years. Discover the advantages of our holistic approach.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            key={benefit.title}
            className={`bg-gradient-to-br ${benefit.color} p-6 rounded-xl border border-gray-800 transition-transform duration-300`}
          >
            <div className="flex flex-col h-full">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="flex items-center mb-4"
              >
                <span className="text-3xl mr-3 bg-gray-900/50 p-2 rounded-lg">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-orange-500">{benefit.title}</h3>
              </motion.div>
              <div className="space-y-4 flex-grow">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="bg-gray-900/50 p-4 rounded-lg"
                >
                  <p className="text-red-400 text-sm font-medium mb-2">Modern Medicine</p>
                  <p className="text-gray-300">{benefit.modern}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="bg-gray-900/50 p-4 rounded-lg"
                >
                  <p className="text-green-400 text-sm font-medium mb-2">Our Approach</p>
                  <p className="text-gray-300">{benefit.traditional}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(BenefitsSection);