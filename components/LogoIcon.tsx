'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { LogoIconProps } from "@/types/props";
import { cn } from '@/lib/utils';

const LogoIcon = ({ isAnimated = true, width = '64px', className }: LogoIconProps) => {
    const logoVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
        hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeInOut' } },
    };

    const ImageComponent = (
        <Image
            loading="eager"
            src="/assets/logo.png"
            alt="PTM Kalari Logo"
            width={120}
            height={120}
            priority
            style={ {
                width: width,
                height: 'auto',
            }}
            className={cn('object-contain', className)}
        />
    );

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
                    {ImageComponent}
                </Link>
            </motion.span>
        ) : (
            <span className="flex items-center">
                <Link href="/" className="flex items-baseline font-bold">
                    {ImageComponent}
                </Link>
            </span>
        )
    );
};

export default memo(LogoIcon);

