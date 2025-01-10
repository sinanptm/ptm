import React, { memo } from 'react';
import { services } from '@/constants'; 
import ServiceCard from '../ServiceCard';
import HomeSectionWrapper from '../hoc/HomeSectionWrapper';

const Services = () => {

    return (
        <HomeSectionWrapper >
            <div className='mb-11'>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">Our Services</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Discover our range of traditional healing practices and treatments, rooted in ancient wisdom and tailored for modern wellness.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </HomeSectionWrapper>
    );
};

export default memo(Services)

