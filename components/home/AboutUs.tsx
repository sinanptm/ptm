'use client';

import HomeSectionWrapper from '@/components/hoc/HomeSectionWrapper';
import { getYears } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/constants';

const AboutUs = () => {
    const years = useMemo(getYears, [getYears]);

    return (
        <HomeSectionWrapper>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="order-2 md:order-1 flex justify-center items-center" variants={itemVariants}>
                    <motion.div
                        className="relative w-full"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/assets/images/home-about.jpg"
                            alt="Kalarippayattu performers demonstrating synchronized movements"
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>

                <motion.div className="order-1 md:order-2 flex flex-col" variants={itemVariants}>
                    <motion.h2 className="text-orange-500 uppercase text-xl md:text-2xl font-semibold tracking-wide" variants={itemVariants}>
                        About Us
                    </motion.h2>

                    <motion.div variants={itemVariants}>
                        <motion.h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" variants={itemVariants}>
                            {years} years of
                        </motion.h3>
                        <motion.div className="space-y-2" variants={itemVariants}>
                            <motion.p className="text-orange-500 text-xl md:text-1xl lg:text-2xl leading-tight" variants={itemVariants}>
                                Kalarippayattu, Kalari Marma & Ayurveda
                                <span className="text-white leading-tight">
                                    {" "} Tradition with Unmatched Experience
                                </span>
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.p className="text-gray-300 md:text-base text-sm lg:text-lg leading-relaxed mt-3" variants={itemVariants}>
                        Kalarippayattu is one of the most famous martial arts that has caught the
                        attention of the world. PTM Kalari is a very familiar name to all
                        Kalari enthusiasts. The training at PTM Kalari by the well-experienced
                        Kalari Gurukkal makes it easier and natural for you to get inspired, involved,
                        revel in and master Kalarippayattu. We are very specific in preserving the
                        virtues of traditional Kalarippayattu martial arts and our mission is to popularize...
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/about"
                            prefetch={false}
                            className="bg-transparent text-orange-500 hover:text-white transition-colors w-fit text-base lg:text-lg mt-3"
                        >
                            Learn More About Us
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </HomeSectionWrapper>
    );
};

export default memo(AboutUs);
