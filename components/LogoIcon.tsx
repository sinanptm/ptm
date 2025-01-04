import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { LogoIconProps } from '@/types';



const LogoIcon = ({ isAnimated = true, width = 16 }: LogoIconProps) => {
    const logoVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
        hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeInOut' } },
    };

    return (
        isAnimated ? (
            <motion.span
                className="flex items-center"
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={logoVariants}
            >
                <Link href="/" className="flex items-baseline font-bold">
                    <Image
                        loading="eager"
                        src="/assets/logo.png"
                        alt="PTM Kalari"
                        width={80}
                        height={0}
                        className="w-16 h-auto"
                    />
                </Link>
            </motion.span>
        ) : (
            <span className="flex items-center">
                <Link href="/" className="flex items-baseline font-bold">
                    <Image
                        loading="eager"
                        src="/assets/logo.png"
                        alt="PTM Kalari"
                        width={80}
                        height={0}
                        className={`w-${width} h-auto`}
                    />
                </Link>
            </span>
        )
    );
};

export default memo(LogoIcon);
