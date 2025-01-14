'use client';

import { memo, ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';



const HomeSectionWrapper = ({ children }: { children: ReactNode; }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="py-9"
        >
            <div className="container mx-auto px-4 md:px-5 lg:px-6">
                {children}
            </div>
        </motion.section>
    );
};

export default memo(HomeSectionWrapper)

