import { memo, ReactNode } from 'react';

const HomeSectionWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <section className="py-9 bg-black">
            <div className="container mx-auto px-4 md:px-5 lg:px-6">
                {children}
            </div>
        </section>
    );
};


export default memo(HomeSectionWrapper);

