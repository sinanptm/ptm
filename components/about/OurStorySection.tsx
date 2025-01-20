"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        <motion.div
          className="lg:sticky lg:top-8 lg:self-start"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/images/home-about.jpg"
              alt="Kalarippayattu performers demonstrating synchronized movements"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
              <span className="bg-orange-500/80 px-3 py-1 rounded-full">Est. 1994</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Our Story
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 space-y-6 leading-relaxed"
          >
            <p className="text-lg">
              PTM Kalari Pavukandy was founded with a vision to preserve and promote the ancient art of Kalarippayattu,
              Kalari Marma, and Ayurveda. Our journey began with a deep commitment to maintaining the authenticity and
              purity of these traditional practices, rooted in centuries of martial arts wisdom.
            </p>

            <div className="bg-gray-900/50 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold text-orange-500">A Legacy of Excellence</h3>
              <p>
                Over the decades, PTM Kalari has evolved into a comprehensive center for martial arts excellence,
                offering various programs that cater to different aspects of Kalarippayattu:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Traditional Combat Training: Mastering ancient fighting techniques and weapons</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Healing Arts: Teaching Kalari Marma therapy and traditional healing methods</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Physical Conditioning: Developing strength, flexibility, and mental focus</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Cultural Preservation: Documenting and teaching the philosophical aspects</span>
                </li>
              </ul>
            </div>
            <blockquote className="border-l-4 border-orange-500 pl-6 italic text-lg">
              &quot;At PTM Kalari, we believe in not just teaching techniques, but in nurturing complete warriors who
              understand the deep philosophy and healing aspects of Kalarippayattu. Our success lies in the perfect
              blend of tradition and accessibility.&quot;
            </blockquote>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(OurStorySection)

