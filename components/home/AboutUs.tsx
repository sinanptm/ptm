import Image from 'next/image';
import { memo, useMemo } from 'react';

const AboutUs = () => {
    const years = useMemo(()=>new Date().getFullYear() - 1994,[]);

    return (
        <section
            className="relative py-16 md:py-24"       >
            <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image
                        src="/assets/images/home-about.jpg"
                        alt="Kalarippayattu performers demonstrating synchronized movements"
                        width={500}
                        height={300}
                        className="w-[400px] object-cover rounded-lg"
                        priority
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-orange-500 text-xl md:text-2xl">About Us</h2>

                    <div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                            {years} years of
                        </h3>
                        <div className="space-y-2">
                            <p className="text-orange-500 text-2xl md:text-3xl lg:text-4xl leading-tight">
                                Kalarippayattu, Kalari Marma & Ayurveda
                            </p>
                            <p className="text-2xl md:text-3xl lg:text-4xl leading-tight">
                                Tradition with Unmatched Experience
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Kalarippayattu is one of the most famous martial art that has caught the
                        attention of the world. PTM Kalari is a very familiar name to all the
                        Kalari enthusiasts. The training at PTM Kalari by the well experienced
                        Kalari Gurukkal makes it easier and natural for you to get inspired, involved,
                        revel in and master Kalarippayattu. We are very specific in preserving the
                        virtues of traditional Kalarippayattu martial arts and our mission is to populari...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default memo(AboutUs);
