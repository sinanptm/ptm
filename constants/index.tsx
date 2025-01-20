import { BannerImageType, Center, Service } from "@/types";
import { Activity, Leaf, Shield, ScrollText, Swords, Globe, Sparkles } from "lucide-react";


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
    name: '/assets/images/banner/banner4.JPG',
    alt: 'Two Kalaripayattu fighters engaging in a dynamic duel using swords and shields'
  },
  {
    name: '/assets/images/banner/banner2.JPG',
    alt: 'Two Kalaripayattu fighters engaging in a dynamic duel using swords and shields'
  },
];

export const features = [
  {
    icon: <Swords className="w-6 h-6" />,
    title: "Combat Techniques",
    description: "Advanced fighting methods combining strikes, kicks, and weapon mastery"
  },
  {
    icon: <ScrollText className="w-6 h-6" />,
    title: "Ancient Wisdom",
    description: "Rooted in Dhanur Veda with over 3000 years of documented history"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Influence",
    description: "Influenced development of various martial arts including Karate and Kung Fu"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Holistic System",
    description: "Combines physical training with spiritual and mental development"
  }
];

export const services: Service[] = [
  {
    name: 'Kalari',
    title: 'Traditional Kalarippayattu Training',
    description: 'Ancient Indian martial art and healing system that combines combat techniques with therapeutic practices to promote physical and mental well-being.',
    details: [
      'Combat training and self-defense techniques',
      'Physical conditioning and flexibility',
      'Mental discipline and concentration',
      'Traditional weapon training'
    ],
    image: '/assets/images/training.jpg',
    color: 'service-gradient-red'
  },
  {
    name: 'Ayurveda',
    title: 'Holistic Ayurvedic Treatment',
    description: 'Ancient Indian system of natural healing that focuses on balancing the body, mind, and spirit using herbs, diet, and lifestyle practices.',
    details: [
      'Personalized treatment plans',
      'Herbal medicine consultations',
      'Dietary and lifestyle guidance',
      'Therapeutic massages and treatments'
    ],
    image: '/assets/images/uyichil.avif',
    color: 'service-gradient-green'
  },
  {
    name: 'Unani',
    title: 'Traditional Unani Medicine',
    description: 'Traditional Persian medicine that emphasizes the use of natural remedies and focuses on the four humors to maintain health and treat illnesses.',
    details: [
      'Natural remedy consultations',
      'Holistic health assessments',
      'Preventive care guidance',
      'Therapeutic treatments'
    ],
    image: '/assets/images/unani.webp',
    color: 'service-gradient-blue'
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
];


export const benefits = [
  {
    title: "Holistic Healing",
    modern: "Focuses on specific symptoms and isolated treatments",
    traditional: "Integrates body, mind, and spirit for complete wellness",
    icon: "🌿",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Natural Approach",
    modern: "Relies heavily on synthetic medications",
    traditional: "Uses natural herbs and time-tested remedies",
    icon: "⚕️",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Preventive Care",
    modern: "Reactive treatment after illness occurs",
    traditional: "Proactive maintenance of health and vitality",
    icon: "🔄",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Long-term Wellness",
    modern: "May require continuous medication",
    traditional: "Builds lasting immunity and natural resilience",
    icon: "⏳",
    color: "from-amber-500/20 to-amber-600/20"
  }
];

export const practices = [
  {
    title: "Natural Healing",
    description: "Harnessing the power of nature for holistic wellness",
    icon: <Leaf className="w-6 h-6 text-emerald-500" />,
    details: "Our approach integrates natural remedies and healing techniques that have been refined over generations."
  },
  {
    title: "Balance",
    description: "Restoring harmony between body, mind, and spirit",
    icon: <Activity className="w-6 h-6 text-blue-500" />,
    details: "We focus on achieving perfect equilibrium in your body's systems through traditional wisdom."
  },
  {
    title: "Personalized Care",
    description: "Tailored treatments for individual needs",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    details: "Every treatment plan is uniquely crafted to address your specific health concerns and goals."
  }
];
