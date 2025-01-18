import type { Metadata } from 'next';
import { memo } from 'react';
import HealingPracticesSection from '@/components/services/HealingPracticesSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import ServicesSection from '@/components/services/ServicesSection';
import HeroSection from '@/components/services/HeroSection';

export const metadata: Metadata = {
  title: 'Our Services | PTM Kalari Pavukandy - Traditional Healing & Martial Arts',
  description: 'Explore our comprehensive range of traditional healing services and martial arts training at PTM Kalari Pavukandy. From Kalarippayattu training to authentic Ayurvedic treatments, discover ancient wisdom combined with modern understanding.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ptmkalari.vercel.app/services',
    siteName: 'PTM Kalari Pavukandy',
    title: 'Traditional Healing Services & Martial Arts Training | PTM Kalari',
    description: 'Experience authentic Kerala martial arts and healing services at PTM Kalari Pavukandy. Our comprehensive services include Kalarippayattu training, traditional treatments, and holistic wellness programs.',
    images: [
      {
        url: '/assets/images/og/service-og-image.png',
        width: 1200,
        height: 630,
        alt: 'PTM Kalari Pavukandy Services and Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traditional Healing & Martial Arts Services | PTM Kalari Pavukandy',
    description: 'Discover our comprehensive range of traditional healing services and authentic Kalarippayattu training programs.',
    images: ['/assets/images/og/service-og-image.png'],
    creator: '@ptmkalari',
    site: '@ptmkalari',
  },
  alternates: {
    canonical: 'https://ptmkalari.vercel.app/services',
  },
};

const ServicesPage = () => {
  return (
    <main className="relative overflow-hidden w-full min-h-screen">
      <HeroSection />
      <HealingPracticesSection />
      <BenefitsSection />
      <ServicesSection />
    </main>
  );
};

export default memo(ServicesPage);