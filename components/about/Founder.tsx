'use client';
import { motion } from "framer-motion";
import { memo } from "react";
import Image from "next/image";

const FounderSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          About Our <span className="text-orange-500">Founder</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300/40 to-transparent rounded-2xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-gray-800"
            >
              <Image
                src="/assets/images/founder1.jpeg"
                alt="Sri. Moidu Gurukkal - Founder of PTM Kalari"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
               <div className="absolute inset-0 bg-gradient-to-t from-orange-800/15 to-transparent" />
            </motion.div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Late: Sri. Moidu Gurukkal
            </h3>
            <div className="h-1 w-24 bg-orange-500/20 rounded mb-4" />
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Guru Sri P. Moidu Gurukkal, the esteemed founder of PTM Kalari, was a beacon of wisdom and an enduring source of inspiration. His journey in Kalaripayattu began at a young age, studying under renowned masters of the art.
            </p>
            <p>
              Through his unmatched dedication to the art of Kalaripayattu, he not only preserved a rich cultural heritage but also empowered countless individuals with knowledge, discipline, and a passion for excellence. His teaching methods combined traditional wisdom with accessible modern approaches.
            </p>
            <p>
              Under his guidance, PTM Kalari became a center of excellence, attracting students from across the globe. His deep understanding of Kalari Marma and Ayurveda complemented his martial arts expertise, offering students a holistic approach to well-being.
            </p>
            <p>
              His legacy continues to inspire generations, guiding them on the path of mastery and self-realization. The principles he established - respect for tradition, dedication to practice, and service to society - remain the cornerstone of PTM Kalari&apos;s philosophy.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <div className="text-lg font-semibold text-orange-500">
                &quot;Preserving Tradition, Empowering Lives&quot;
              </div>
              <div className="text-sm text-gray-400">- Sri. Moidu Gurukkal</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(FounderSection);