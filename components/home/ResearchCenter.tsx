"use client";

import { memo } from "react";
import Image from "next/image";
import HomeSectionWrapper from "@/components/hoc/HomeSectionWrapper";
import {
  FlaskRoundIcon as Flask,
  Leaf,
  Pill,
  TestTube,
  Clipboard,
  HeartPulse
} from "lucide-react";

const ResearchCenter = () => {
  return (
    <HomeSectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-orange-500 font-russo-one text-xl uppercase tracking-wide">
            Pharmacy <span className="text-white">&</span> Research Center
          </h3>
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            AVM <span className="text-orange-500">Ayurvedic</span>
            <br /> Pharmaceutical Excellence
          </h2>
          <div className="relative w-full aspect-video md:aspect-square lg:aspect-video">
            <Image
              src="/assets/images/centers/avm2.jpeg"
              alt="AVM Ayurvedic Pharmacy & Research Center"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl md:text-3xl text-white font-semibold">
            Modern Pharmaceutical Innovation Meets Ancient Wisdom
          </h3>
          <p className="text-gray-300 leading-relaxed">
            At AVM Ayurvedic Pharmacy & Research Center, we maintain the highest standards of pharmaceutical
            excellence while honoring traditional Ayurvedic and Unani principles. Our state-of-the-art facility combines
            advanced manufacturing processes with authentic Ayurvedic formulations to create remedies that meet
            both classical requirements and modern quality standards.
          </p>
          <div className="space-y-4">
            <h4 className="text-xl text-orange-500 font-semibold">Our Expertise:</h4>
            <ul className="space-y-3">
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
                <li key={index} className="flex items-center space-x-3 text-gray-200">
                  <item.icon className="w-5 h-5 text-orange-500" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </HomeSectionWrapper>
  );
};

export default memo(ResearchCenter);