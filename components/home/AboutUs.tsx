import HomeSectionWrapper from '@/components/hoc/HomeSectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useMemo } from 'react';

const AboutUs = () => {
    const years = useMemo(() => new Date().getFullYear() - 1994, []);

    return (
        <HomeSectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                <div className="order-2 md:order-1 flex justify-center items-center">
                    <div className="relative w-full max-w-[300px]">
                        <Image
                            src="/assets/images/home-about.jpg"
                            alt="Kalarippayattu performers demonstrating synchronized movements"
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="order-1 md:order-2 flex flex-col">
                    <h2 className="text-orange-500 uppercase text-xl md:text-2xl font-semibold tracking-wide">
                        About Us
                    </h2>

                    <div>
                        <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {years} years of
                        </h3>
                        <div className="space-y-2">
                            <p className="text-orange-500 text-xl md:text-1xl lg:text-2xl leading-tight">
                                Kalarippayattu, Kalari Marma & Ayurveda
                                <span className="text-white leading-tight">
                                    {" "} Tradition with Unmatched Experience
                                </span>
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-300 md:text-base text-sm lg:text-lg leading-relaxed mt-3">
                        Kalarippayattu is one of the most famous martial arts that has caught the
                        attention of the world. PTM Kalari is a very familiar name to all
                        Kalari enthusiasts. The training at PTM Kalari by the well-experienced
                        Kalari Gurukkal makes it easier and natural for you to get inspired, involved,
                        revel in and master Kalarippayattu. We are very specific in preserving the
                        virtues of traditional Kalarippayattu martial arts and our mission is to popularize...
                    </p>
                    <Link
                        href="/about"
                        prefetch={false}
                        className="bg-transparent  text-orange-500 hover:text-white transition-colors w-fit text-base lg:text-lg mt-3"
                    >
                        Learn More About Us
                    </Link>

                </div>

            </div>
        </HomeSectionWrapper>
    );
};

export default memo(AboutUs);
