import type { Metadata } from 'next';
import { memo } from 'react';
import HeroSection from '@/components/about/HeroSection';
import OurStorySection from '@/components/about/OurStorySection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import Founder from '@/components/about/Founder';
import HistorySection from '@/components/about/HistorySection';
import { SITE_URL } from '@/constants';

export const metadata: Metadata = {
  title: 'About Us | PTM Kalari Pavukandy - Traditional Healing & Martial Arts',
  description: 'Learn about PTM Kalari Pavukandy, our history, mission, and the team behind our traditional healing and martial arts center.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url:`${SITE_URL}/about`,
    siteName: 'PTM Kalari Pavukandy',
    title: 'About PTM Kalari Pavukandy | Traditional Healing & Martial Arts Center',
    description: 'Discover the rich history and mission of PTM Kalari Pavukandy. Meet our team of expert practitioners dedicated to preserving and sharing traditional healing arts.',
    images: [
      {
        url: '/assets/images/og/about-og-image.png',
        width: 1200,
        height: 630,
        alt: 'About PTM Kalari Pavukandy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PTM Kalari Pavukandy | Traditional Healing & Martial Arts',
    description: 'Learn about our history, mission, and the team behind PTM Kalari Pavukandy.',
    images: ['/assets/images/og/about-og-image.png'],
    creator: '@ptmkalari',
    site: '@ptmkalari',
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const AboutPage = () => {
  return (
    <main className="relative overflow-hidden w-full min-h-screen">
      <HeroSection />
      <OurStorySection />
      <Founder />
      <HistorySection />
      <MissionVisionSection />
    </main>
  );
};

export default memo(AboutPage);
