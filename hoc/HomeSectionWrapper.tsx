import { memo, ReactNode } from 'react';

const HomeSectionWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <section className="py-12 bg-red-300  ">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 md:py-16 lg:py-24">
                {children}
            </div>
        </section>
    );
};


export default memo(HomeSectionWrapper);

