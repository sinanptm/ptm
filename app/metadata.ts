import { SITE_URL } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PTM Kalari Pavukandy | Traditional Kerala Martial Arts Academy",
  description: "PTM Kalari Pavukandy is a prestigious martial arts institution preserving and teaching the ancient Indian martial art of Kalarippayattu. With a rich heritage spanning generations, we offer authentic training in traditional Kerala martial arts.",
  keywords: [
    "Kalari",
    "Kalarippayattu",
    "Kerala Martial Arts",
    "PTM Kalari",
    "ptm",
    "Traditional Martial Arts",
    "Indian Martial Arts",
    "Pavukandy",
    "Ptm Kalarisangam",
    "Moidu kurikkal",
    "Kalari Kozhikode",
    "Kalarippayattu classes in Kerala",
    "Best Kalari training in India",
    "Traditional martial arts Kerala",
    "Learn Kalarippayattu in Kerala",
    "Kalari in Kozhikode",
    "Authentic Kalarippayattu training",
    "Martial arts school Kerala",
    "Kalari healing and therapy Kerala",
    "Ancient Indian martial arts",
    "Traditional Kalari schools India",
    "Kerala martial arts classes",
    "Best Kalarippayattu trainers India",
    "Kalari Naduvannur training center",
    "Learn Kalari in India",
    "Ptm Kalari Pavukandy Kerala",
  ],
  authors: [{ name: "sinanptm", url: SITE_URL }],
  creator: "PTM Kalari Pavukandy",
  publisher: "PTM Kalari Pavukandy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "Ptm Kalari",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}`,
    siteName: "PTM Kalari Pavukandy",
    title: "PTM Kalari Pavukandy - Ancient Kerala Martial Arts Tradition",
    description: "Discover the ancient art of Kalarippayattu at PTM Kalari Pavukandy. Learn traditional Kerala martial arts from experienced masters.",
    images: [
      {
        url: "/assets/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "PTM Kalari Pavukandy Training Center",
      },
    ],
    countryName: "India"
  },
  twitter: {
    card: "summary_large_image",
    title: "Traditional Healing & Martial Arts Services | PTM Kalari Pavukandy",
    description: "Discover our comprehensive range of traditional healing services and authentic Kalarippayattu training programs.",
    images: ["/assets/images/og/og-image.png"],
    creator: "@ptmkalari",
    site: "@ptmkalari",
  },
  verification: {
    google: "google815b889e8dec9b27",
  },
  other: {
    "google-site-verification": "google815b889e8dec9b27",
    "msapplication-TileColor": "#8B0000",
    "msapplication-TileImage": "/icons/ms-icon-144x144.png",
    "msapplication-config": "/browserconfig.xml"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/icons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/icons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/icons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/icons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/icons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icons/favicon.ico"]
  },
  appleWebApp: {
    capable: true,
    title: "PTM Kalari",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },
  manifest: "/manifest.json",
  category: "Education",
  classification: "Martial Arts Training",
  metadataBase: new URL(SITE_URL),
  assets: "/assets"
};
