"use client";

import { memo } from "react";
import Image from "next/image";
import HomeSectionWrapper from "@/components/hoc/HomeSectionWrapper";
import { FlaskRoundIcon as Flask, Leaf, Pill, TestTube, Clipboard, HeartPulse } from 'lucide-react';
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/constants";

const ResearchCenter = () => {
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
            Pharmacy <span className="text-white">&</span> Research Center
          </motion.h3>
          <motion.h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight" variants={itemVariants}>
            AVM <span className="text-orange-500">Ayurvedic</span>
            <br /> Pharmaceutical Excellence
          </motion.h2>
          <motion.div
            className="relative w-full aspect-video md:aspect-square lg:aspect-video"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/images/centers/avm2.jpeg"
              alt="AVM Ayurvedic Pharmacy & Research Center"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col justify-center space-y-6" variants={itemVariants}>
          <motion.h3 className="text-2xl md:text-3xl text-white font-semibold" variants={itemVariants}>
            Modern Pharmaceutical Innovation Meets Ancient Wisdom
          </motion.h3>
          <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
            At AVM Ayurvedic Pharmacy & Research Center, we maintain the highest standards of pharmaceutical
            excellence while honoring traditional Ayurvedic and Unani principles. Our state-of-the-art facility combines
            advanced manufacturing processes with authentic Ayurvedic formulations to create remedies that meet
            both classical requirements and modern quality standards.
          </motion.p>
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h4 className="text-xl text-orange-500 font-semibold" variants={itemVariants}>
              Our Expertise:
            </motion.h4>
            <motion.ul className="space-y-3" variants={itemVariants}>
              {[
                {
                  icon: Pill,
                  text: "GMP-Certified Pharmaceutical Manufacturing"
                },
                {
                  icon: TestTube,
                  text: "Quality Control & Standardization"
                },
                {
                  icon: Flask,
                  text: "Research & Development of New Formulations"
                },
                {
                  icon: Leaf,
                  text: "Authentic Herbal Processing & Extraction"
                },
                {
                  icon: Clipboard,
                  text: "Documentation & Clinical Validation"
                },
                {
                  icon: HeartPulse,
                  text: "Traditional & Modern Treatment Integration"
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-gray-200"
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <item.icon className="w-5 h-5 text-orange-500" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </HomeSectionWrapper>
  );
};

export default memo(ResearchCenter);
