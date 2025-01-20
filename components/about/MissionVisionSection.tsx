'use client'
import { motion } from "framer-motion";
import { memo } from "react";
import { ArrowUpRight, Target, Eye } from "lucide-react";

const MissionVisionSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Preserving ancient wisdom while embracing modern innovation
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-lg">
              <Target className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              To preserve and promote the authentic traditions of Kalarippayattu, Kalari Marma, and Ayurveda while making these ancient practices accessible to modern practitioners.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-orange-500" />
                <span>Maintain the purity of traditional teachings</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-orange-500" />
                <span>Foster physical and spiritual growth</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-orange-500" />
                <span>Build a global community of practitioners</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-lg">
              <Eye className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              To be the world&apos;s leading center for authentic Kalarippayattu training, creating a bridge between ancient wisdom and contemporary wellness needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-orange-500" />
                <span>Establish centers of excellence worldwide</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-orange-500" />
                <span>Innovate while preserving tradition</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-orange-500" />
                <span>Empower the next generation of practitioners</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(MissionVisionSection);