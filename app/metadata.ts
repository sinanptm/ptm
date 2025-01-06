import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PTM Kalari Pavukandy | Traditional Kerala Martial Arts Academy',
  description: 'PTM Kalari Pavukandy is a prestigious martial arts institution preserving and teaching the ancient Indian martial art of Kalarippayattu. With a rich heritage spanning generations, we offer authentic training in traditional Kerala martial arts.',
  keywords: [
    'Kalari',
    'Kalarippayattu',
    'Kerala Martial Arts',
    'PTM Kalari',
    'Kalari Training',
    'Traditional Martial Arts',
    'Indian Martial Arts',
    'Pavukandy',
    'Martial Arts Academy'
  ],
  authors: [{ name: 'PTM Kalari Pavukandy' }],
  creator: 'PTM Kalari Pavukandy',
  publisher: 'PTM Kalari Pavukandy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-96x96.png',
    apple: '/icons/apple-icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/apple-icon-precomposed.png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ptmkalari.vercel.app/',
    siteName: 'PTM Kalari Pavukandy',
    title: 'PTM Kalari Pavukandy - Ancient Kerala Martial Arts Tradition',
    description: 'Discover the ancient art of Kalarippayattu at PTM Kalari Pavukandy. Learn traditional Kerala martial arts from experienced masters.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PTM Kalari Pavukandy Training Center',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};