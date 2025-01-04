'use client';
import LogoIcon from "@/components/LogoIcon";
import { ImagesSlider } from "@/components/ui/images-slider";
import { bannerImages } from "@/constants";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <ImagesSlider className="h-[40rem]" images={bannerImages}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="z-50 container mx-auto px-4 flex flex-col items-center justify-center h-full"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 w-full max-w-[160px] lg:max-w-[180px]"
        >
          <LogoIcon isAnimated={false} width="100%" className="w-full filter drop-shadow-lg" />
        </motion.div>

        <div className="space-y-6 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-russo-one leading-snug px-4"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-orange-500 inline-block"
            >
              Nurture
            </motion.span>
            {" "}&{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-orange-500 inline-block"
            >
              Preserve
            </motion.span>
            {" "}one of the {" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-orange-500 inline-block"
            >
              Richest
            </motion.span>
            {" "}and {" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-orange-500 inline-block"
            >
              Oldest Art Forms
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4 px-4"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-light leading-relaxed tracking-wide">
              Vedic Tradition of Kalari, Ayurveda and Legendary Martial Art of Kerala
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-light leading-relaxed">
            Kalarippayattu is Reborn at Centre to Take good care of your Body, Mind and Soul in Gurukula Style
            </p>

          </motion.div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
};

export default Page;
