import { BannerImageType, Service } from "@/types";
import { Droplet, Leaf, FlaskRoundIcon as Flask } from "lucide-react";

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  // { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const bannerImages: BannerImageType[] = [
  {
    name: '/assets/images/banner/banner1.JPG',
    alt: 'Kalaripayattu practitioner demonstrating knife techniques with precise hand movements'
  },
  {
    name: '/assets/images/banner/banner3.JPG',
    alt: 'Instructor mentoring students in the art of Kalaripayattu, sharing traditional combat skills'
  },
  {
    name: '/assets/images/banner/banner2.JPG',
    alt: 'Two Kalaripayattu fighters engaging in a dynamic duel using swords and shields'
  },
];

export const services: Service[] = [
  {
    title: "Unani Treatments",
    description: "Experience the healing power of traditional Unani medicine, focusing on holistic wellness and natural remedies.",
    icon: Droplet,
  },
  {
    title: "Ayurveda Treatments",
    description: "Discover balance and rejuvenation through our comprehensive Ayurvedic treatments and therapies.",
    icon: Leaf,
  },
  {
    title: "Medicine Making",
    description: "We craft authentic Ayurvedic and Unani medicines using time-honored techniques and pure ingredients.",
    icon: Flask,
  },
];
