'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeSectionWrapper from '@/hoc/HomeSectionWrapper';

const KalariTraining = () => {
  return (
    <HomeSectionWrapper>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

        <div className="space-y-6">
          <h3 className="text-orange-500 font-russo-one text-xl">Kalari Training</h3>
          <h2 className="text-white font-russo-one text-3xl md:text-4xl lg:text-5xl">
            <span className="text-orange-500">Considered</span> the oldest and most scientific martial arts in the world
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Kalari is a special kind of gymnasium, where the martial art Kalarippayattu is practiced.
              Kalarippayattu training is mainly divided in to four phases - Meythari, Kolthari,
              Angathari & Verumkai prayogam which is the special training in &apos;Marma&apos;, the art
              of knowing and activating all the 107 energy points in the human body.
            </p>
            <p className="text-gray-300">
              These vital points (marmas) are used for correcting the body&apos;s energy flows and
              replenishing its resources. Kalari therefore makes the practitioner not just a warrior
              but a self-healer, who can also help others with his healing powers.
            </p>
            <p className="text-gray-300">
              Kalari training of course enables one to attain <span className="text-white font-semibold">
                &quot;A Sound Mind In A Sound Body&quot;</span>.
            </p>
          </div>
          <Link
            href="/about"
            prefetch={false}
            className="bg-transparent text-orange-500 hover:text-white transition-colors w-fit text-base lg:text-lg mt-3"
          >
            Learn More About Kalari
          </Link>
        </div>


        <div className="relative grid gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/images/training1.jpg"
              alt="Traditional Kalari weapons display with oil lamps and marigold flowers"
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/images/training2.jpg"
              alt="Group Kalari training session"
              width={300}
              height={200}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>


      </div>
    </HomeSectionWrapper>
  );
};


export default memo(KalariTraining)

