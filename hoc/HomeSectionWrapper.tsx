import React, { memo, ReactNode } from 'react';

const HomeSectionWrapper = ({ children }: { children: ReactNode; }) => {
    return (
        <section className="relative py-16 md:py-24 gradient-hero"       >
            <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {children}
            </div>
        </section>
    );
};

export default memo(HomeSectionWrapper);