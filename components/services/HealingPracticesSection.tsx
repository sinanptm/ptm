'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { practices } from '@/constants';

const HealingPracticesSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 py-4'>
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-3xl" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-8 -right-8 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" 
          />

          <div className="relative lg:grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] mb-12 lg:mb-0"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/practices.jpg"
                  alt="Traditional Healing Practices"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -right-6 top-1/4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-xl w-64"
              >
                <h4 className="text-orange-500 font-semibold">Kalarippayattu</h4>
                <p className="text-sm text-gray-300 mt-1">Ancient martial art and healing system</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -left-6 top-2/4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-xl w-64"
              >
                <h4 className="text-orange-500 font-semibold">Ayurveda</h4>
                <p className="text-sm text-gray-300 mt-1">Science of life and longevity</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute right-12 bottom-12 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-xl w-64"
              >
                <h4 className="text-orange-500 font-semibold">Unani</h4>
                <p className="text-sm text-gray-300 mt-1">Traditional Persian medicine</p>
              </motion.div>
            </motion.div>

            <div className="relative">
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  Our traditional healing practices represent the culmination
                  of thousands of years of refined knowledge and practice. These time-tested methods focus on prevention,
                  natural healing, and maintaining the body&apos;s innate balance.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  Unlike modern approaches that often treat symptoms in isolation, our holistic methods address the root
                  causes of health issues while promoting overall wellbeing.
                </motion.p>

                <motion.div 
                  variants={containerVariants}
                  className="mt-12 space-y-4"
                >
                  {practices.map((practice, index) => (
                    <motion.div
                      key={practice.title}
                      variants={itemVariants}
                      whileHover={{ scale: activeCard === index ? 1.02 : 1.05 }}
                      className={`transform transition-all duration-300 cursor-pointer`}
                      onMouseEnter={() => setActiveCard(index)}
                    >
                      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            whileHover={{ rotate: 5 }}
                            className="p-2 bg-gray-700/50 rounded-lg"
                          >
                            {practice.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{practice.title}</h3>
                            <p className="text-gray-400 text-sm">{practice.description}</p>
                          </div>
                        </div>
                        <motion.div 
                          animate={{ 
                            height: activeCard === index ? "auto" : 0,
                            opacity: activeCard === index ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4"
                        >
                          <p className="text-gray-300 text-sm">{practice.details}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HealingPracticesSection;