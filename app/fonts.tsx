import { Russo_One, Bebas_Neue, Space_Grotesk, Outfit, Inter } from 'next/font/google';

export const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: '--font-russo-one',
});

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: '--font-bebas-neue',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-space-grotesk',
});

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-outfit',
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});