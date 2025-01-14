import { BannerImageType, Center, Service } from "@/types";

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
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
    name: 'Kalari',
    description: 'Ancient Indian martial art and healing system that combines combat techniques with therapeutic practices to promote physical and mental well-being.',
    image: '/assets/images/training.jpg',
    color: 'from-red-600 to-red-800',
  },
  {
    name: 'Ayurveda',
    description: 'Ancient Indian system of natural healing that focuses on balancing the body, mind, and spirit using herbs, diet, and lifestyle practices.',
    image: '/assets/images/uyichil.avif',
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'Unani',
    description: 'Traditional Persian medicine that emphasizes the use of natural remedies and focuses on the four humors to maintain health and treat illnesses.',
    image: '/assets/images/unani.webp',
    color: 'from-blue-500 to-blue-700',
  }
];


export const centers: Center[] = [
  {
    name: 'PTM Kalari Sangam',
    location: 'Thiruvananthapuram, Kerala',
    description: 'Our main center, offering comprehensive Kalarippayattu training and Ayurvedic treatments.',
    image: '/assets/images/training1.jpg',
    mapUrl: 'https://goo.gl/maps/exampleThiruvananthapuram',
  },
  {
    name: 'Kalari Kendram',
    location: 'Kochi, Kerala',
    description: 'A modern facility focusing on traditional Kalari techniques and holistic healing practices.',
    image: '/assets/images/training2.jpg',
    mapUrl: 'https://goo.gl/maps/exampleKochi',
  },
  {
    name: 'Gurukkal Academy',
    location: 'Kozhikode, Kerala',
    description: 'Specializing in advanced Kalarippayattu training and Marma therapy.',
    image: '/assets/images/unani.webp',
    mapUrl: 'https://goo.gl/maps/exampleKozhikode',
  },
  {
    name: 'Kalari Wellness Center',
    location: 'Bangalore, Karnataka',
    description: 'Bringing the ancient art of Kalarippayattu to urban wellness enthusiasts.',
    image: '/assets/images/center-bangalore.jpg',
    mapUrl: 'https://goo.gl/maps/exampleBangalore',
  },
  {
    name: 'Traditional Kalari Institute',
    location: 'Chennai, Tamil Nadu',
    description: 'Preserving and teaching authentic Kalarippayattu techniques in the heart of Chennai.',
    image: '/assets/images/center-chennai.jpg',
    mapUrl: 'https://goo.gl/maps/exampleChennai',
  },
]