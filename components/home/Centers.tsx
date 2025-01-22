'use client';

import { memo } from 'react';
import Link from 'next/link';
import HomeSectionWrapper from '@/components/hoc/HomeSectionWrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CenterCard from '../CenterCard';
import { centers, containerVariants, itemVariants } from '@/constants';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const Centers = () => {
  return (
    <HomeSectionWrapper>
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex flex-col justify-center space-y-6" variants={itemVariants}>
            <motion.h3 className="text-orange-500 font-russo-one text-xl uppercase tracking-wide" variants={itemVariants}>
              Our Centers
            </motion.h3>
            <motion.h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight" variants={itemVariants}>
              Experience <span className="text-orange-500">Kalarippayattu</span>
              <br /> Across Kerala
            </motion.h2>
            <motion.div className="prose prose-invert max-w-none" variants={itemVariants}>
              <p className="text-gray-300 leading-relaxed">
                Discover our network of Kalari centers, each offering unique experiences in the ancient art of Kalarippayattu.
                From traditional training grounds to modern wellness facilities, our centers cater to all levels of practitioners.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-block bg-transparent text-orange-500 hover:text-white transition-colors duration-300 text-base lg:text-lg font-russo-one tracking-wide"
              >
                Explore All Locations
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true
                })
              ]}
              className="w-full max-w-[500px]"
            >
              <CarouselContent>
                {centers.map((center, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <CenterCard center={center} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-between items-center mt-4 sm:hidden">
                <CarouselPrevious 
                  className="static h-8 w-8 translate-y-0 translate-x-0" 
                  aria-label="Previous slide"
                />
                <CarouselNext 
                  className="static h-8 w-8 translate-y-0 translate-x-0" 
                  aria-label="Next slide"
                />
              </div>
              <div className="hidden sm:block">
                <CarouselPrevious 
                  className="absolute -left-9 top-1/2 -translate-y-1/2 h-8 w-8" 
                  aria-label="Previous slide"
                />
                <CarouselNext 
                  className="absolute -right-9 top-1/2 -translate-y-1/2 h-8 w-8" 
                  aria-label="Next slide"
                />
              </div>
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
    </HomeSectionWrapper>
  );
};

export default memo(Centers);
