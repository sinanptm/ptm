'use client'
import { courseTimeLine, features } from '@/constants';
import { motion } from 'framer-motion';
import { memo } from 'react';

const HistorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
          Legacy of  <span className='text-orange-500'>Kalarippayattu</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Journey through the centuries-old tradition of one of the world&apos;s most ancient and sophisticated martial arts
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="prose prose-invert">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-xl backdrop-blur-sm mb-8"
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Ancient Origins</h3>
              <p className="text-gray-300 leading-relaxed">
                Kalarippayattu emerged over 3000 years ago from the ancient Indian scripture Dhanur Veda. What began as a sophisticated system of guerrilla warfare evolved into a comprehensive martial art that encompasses combat techniques, spiritual development, and healing practices.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-900/50 transition-colors"
                >
                  <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Training System</h3>
            <div className="space-y-6">
              {courseTimeLine.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:to-transparent"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 bg-orange-500 rounded-full -translate-x-[3px]" />
                  <h4 className="font-semibold mb-2">{stage.title}</h4>
                  <p className="text-gray-300 text-sm">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-l-4 border-orange-500 pl-6 py-4 italic text-gray-300"
          >
            &quot;Kalarippayattu transcends mere combat training - it&apos;s a harmonious blend of martial prowess, spiritual growth, and healing wisdom, representing the complete evolution of ancient Indian martial traditions.&quot;
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HistorySection);