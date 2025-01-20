import HomeSectionWrapper from '@/components/hoc/HomeSectionWrapper';
import Image from 'next/image';
import { memo } from 'react';
import Link from 'next/link';

const KalariDetails = () => {
    return (
        <HomeSectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div className="order-1 flex flex-col gap-3">
                    <h2 className={` text-3xl md:text-4xl  lg:text-5xl text-orange-500 leading-tight mb-4`}>
                        PTM Kalari Pavukkandy
                    </h2>
                    
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        PTM Kalari Pavukkandy, established in 1994 by the late Moidu Gurukkal, 
                        stands as a distinguished center for the ancient art of Kalarippayattu, 
                        Kalari Marma, and Ayurveda. Nestled in Pavukandy, this historic institution 
                        has earned a reputation for nurturing traditional martial arts with unwavering 
                        dedication. Drawing enthusiasts from around the globe, PTM Kalari continues 
                        to honor the vision of its founder, fostering a deep connection to heritage 
                        while inspiring future generations to embrace this timeless art form.
                    </p>

                    <Link
                        href="/contact"
                        prefetch={false}
                        className="bg-transparent  text-orange-500 hover:text-white transition-colors w-fit text-base lg:text-lg"
                    >
                       Contact Us
                    </Link>
                </div>

                <div className="order-2 flex justify-center items-center">
                    <div className="relative w-full max-w-[300px] md:max-w-[380px]  p-4 rounded-lg">
                        <Image
                            src="/assets/images/founder.jpg"
                            alt="Moidu Gurikkal - Founder of PTM Kalari Pavukkandy"
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                 </div>
            </div>
        </HomeSectionWrapper>
    );
};

export default memo(KalariDetails);

