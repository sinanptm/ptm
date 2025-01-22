'use client';

import HomeSectionWrapper from '@/components/hoc/HomeSectionWrapper';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, courseTimeLine, itemVariants } from '@/constants';

const KalariTraining = () => {
  return (
    <HomeSectionWrapper>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="flex flex-col justify-center space-y-6" variants={itemVariants}>
          <motion.h3 className="text-orange-500 font-russo-one text-xl uppercase tracking-wide" variants={itemVariants}>
            Kalari Training
          </motion.h3>
          <motion.h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight" variants={itemVariants}>
            The <span className="text-orange-500">Ancient Art</span> of
            <br /> Mastery, Healing, and Strength
          </motion.h2>
          <motion.div className="prose prose-invert max-w-none" variants={itemVariants}>
            <p className="text-gray-300 leading-relaxed">
              Kalarippayattu is not just a martial art—it is a holistic journey of discipline, physical fitness, and mental clarity.
              This ancient practice combines dynamic movements, weapon training, and healing techniques passed down through generations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Training is divided into {courseTimeLine.length} phases:
              <span className="text-white font-medium"> {courseTimeLine.map(el => el.title).join(", ")} </span>
              These phases teach not only combat skills but also mastery over the 107 vital energy points (marmas) of the human body.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through Kalari, practitioners achieve
              <span className="text-white font-semibold"> "A Sound Mind in a Sound Body"</span>,
              becoming healers and warriors of unparalleled skill and balance.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href="https://en.wikipedia.org/wiki/Kalaripayattu"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-orange-500 hover:text-white transition-colors duration-300 text-base lg:text-lg font-russo-one tracking-wide"
            >
              Learn More About Kalari
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-video md:aspect-square lg:aspect-video">
            <Image
              src="/assets/images/training2.jpg"
              alt="AVM Ayurvedic Pharmacy & Research Center"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </HomeSectionWrapper>
  );
};

export default memo(KalariTraining);
