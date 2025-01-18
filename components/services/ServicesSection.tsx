'use client'
import { motion } from 'framer-motion';
import { services } from '@/constants';
import Image from 'next/image';
import { memo } from 'react';

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {services.map((service, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          key={service.name}
          className={`mb-24 last:mb-0 ${
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } flex flex-col lg:flex-row gap-12 items-center`}
        >
          <motion.div 
            className="lg:w-1/2 w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full aspect-[4/3] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-40`}></div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 w-full">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-orange-500 text-xl uppercase tracking-wide mb-4"
            >
              {service.name}
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {service.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 mb-8 leading-relaxed"
            >
              {service.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.details.map((detail, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  key={idx}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default memo(ServicesSection);