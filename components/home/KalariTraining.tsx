'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeSectionWrapper from '@/components/hoc/HomeSectionWrapper';

const KalariTraining = () => {
  return (
    <HomeSectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-orange-500 font-russo-one text-xl uppercase tracking-wide">
            Kalari Training
          </h3>
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            The <span className="text-orange-500">Ancient Art</span> of
            <br /> Mastery, Healing, and Strength
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              Kalarippayattu is not just a martial art—it is a holistic journey of discipline, physical fitness, and mental clarity.
              This ancient practice combines dynamic movements, weapon training, and healing techniques passed down through generations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Training is divided into four phases:
              <span className="text-white font-medium"> Meythari, Kolthari, Angathari</span> and
              <span className="text-white font-medium"> Verumkai</span>.
              These phases teach not only combat skills but also mastery over the 107 vital energy points (marmas) of the human body.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through Kalari, practitioners achieve
              <span className="text-white font-semibold"> “A Sound Mind in a Sound Body”</span>,
              becoming healers and warriors of unparalleled skill and balance.
            </p>
          </div>
          <Link
            href="https://en.wikipedia.org/wiki/Kalaripayattu"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-orange-500 hover:text-white transition-colors duration-300 text-base lg:text-lg font-russo-one  tracking-wide"
          >
            Learn More About Kalari
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/assets/images/training2.jpg"
              alt="Traditional Kalari weapons display with oil lamps and marigold flowers"
              width={500}
              height={300}
              className="w-full h-auto object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </HomeSectionWrapper>
  );
};

export default memo(KalariTraining);
