import { BannerImageType, Center, Service } from "@/types";
import { Activity, Leaf, Shield, ScrollText, Swords, Globe, Sparkles, Instagram, Youtube, MapPin, Phone, Mail, Facebook } from "lucide-react";

export const SITE_URL = "https://ptmkalari.vercel.app";

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const courseTimeLine = [{
  title: "Meipayathari",
  description: "The foundation of Kalarippayattu training, focusing on physical conditioning, body control, and the seamless flow of movements to develop strength, flexibility, and stamina.",
},
{
  title: "Kolthari",
  description: "Mastery of wooden weaponry, emphasizing precision, coordination, and the understanding of combat distance and timing.",
},
{
  title: "Ankathari",
  description: "Advanced training with metal weapons such as swords and shields, enhancing agility, reflexes, and combat techniques.",
},
{
  title: "Verumkai",
  description: "Training in unarmed combat, focusing on self-defense, strike techniques, and the art of Marma, targeting vital points.",
},
{
  title: "Kalari Marma Chikilsa",
  description: "The healing aspect of Kalarippayattu, utilizing traditional massage and therapeutic techniques to rejuvenate the body and mind.",
}]

export const contactDetails = [
  { icon: <MapPin className="w-5 h-5 text-orange-500" />, text: "Pavukkandy, Kozhikode, Kerala, India, 673614" },
  { icon: <Phone className="w-5 h-5 text-orange-500" />, text: "+91 86060 97047" },
  { icon: <Mail className="w-5 h-5 text-orange-500" />, text: "info@ptmkalari.com" },
];

export const socialLinks = [
  {
    href: "https://www.instagram.com/ptm_kalari",
    label: "Follow us on Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@PTMKALARI",
    label: "Subscribe to our YouTube channel",
    Icon: Youtube,
  },
  {
    href: "https://www.facebook.com/PTMpavukkandy",
    label: "Follow us on Facebook",
    Icon: Facebook,
  },
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
    name: 'PTM Kalari Pavukkandy',
    instructor: "Dr. Shafeeq",
    location: 'Pavukkandy, Kozhikode, Kerala',
    description: 'The flagship center offering a perfect blend of traditional Kalarippayattu training and holistic Ayurvedic treatments in a serene environment.',
    image: '/assets/images/centers/pavukkandy.jpeg',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.993270895293!2d75.81390344331203!3d11.48041065970418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6646e2f91e813%3A0xf5eec31b323286f2!2sPavukkandy!5e0!3m2!1sen!2sin!4v1737373677928!5m2!1sen!2sin",
    mapUrl: 'https://maps.app.goo.gl/QFULdZtvQw8UMEGy6',
    phone: "+91 86060 97047"
  },
  {
    name: 'AVM Pharmacy and Research Center',
    instructor: 'Dr. Hakeem',
    location: 'Chelannur, Kozhikode, Kerala',
    description: 'A center combining traditional medicine with modern research, offering Ayurvedic treatments and wellness programs under Dr. Hakeem’s guidance.',
    image: '/assets/images/centers/avm.jpeg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8671171479036!2d75.79573791124224!3d11.344415248412513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65e0faa44289d%3A0xf35a6458bc072465!2sAVM%20Hospital!5e0!3m2!1sen!2sin!4v1737531890696!5m2!1sen!2sin',
    mapUrl: 'https://maps.app.goo.gl/ZrwnbTc3bEr9Ag7u8',
    phone: '+91 85890053355'
  },  
  {
    name: 'PTM Kalari Poonoor',
    location: 'Poonoor, Kozhikode, Kerala',
    description: 'A state-of-the-art facility where traditional Kalari techniques meet modern wellness practices, complemented by Unani expertise.',
    image: '/assets/images/centers/poonor.jpeg',
    mapUrl: 'https://maps.app.goo.gl/prqusiDTWbMmp2MT7',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7821.242870869617!2d75.89837191427925!3d11.43499910483884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668a13022f997%3A0xacfe4f6358b83a41!2sPoonoor%2C%20Kerala%20673574!5e0!3m2!1sen!2sin!4v1737443240227!5m2!1sen!2sin",
    instructor: "Dr. Salih",
    phone: "+91 8921018167"
  },
  {
    name: 'PTM Kalari Perambra',
    location: 'Perambra, Kozhikode, Kerala',
    description: 'An advanced training center specializing in Kalarippayattu and Karate, nurturing discipline and mastery in the martial arts.',
    image: '/assets/images/centers/perambra.jpeg',
    mapUrl: 'https://maps.app.goo.gl/6qXp4St5BBzgHRBD7',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.424502570057!2d75.7520742474094!3d11.56217006745512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba67c7969e2a065%3A0x2d60bd2ae30b114a!2sPerambra%2C%20Kerala%20673525!5e0!3m2!1sen!2sin!4v1737443784306!5m2!1sen!2sin",
    instructor: "Shammer",
    phone: "+91 98464 14293"
  },
  {
    name: 'PTM Kalari Naduvannur',
    location: 'Naduvannur, Kozhikode, Kerala',
    description: 'A tranquil center bringing the ancient art of Kalarippayattu to urban wellness enthusiasts, offering a unique blend of tradition and modernity.',
    image: '/assets/images/centers/perambra.jpeg',
    mapUrl: 'https://maps.app.goo.gl/vCE8WFV1RyLcHDiQA',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7819.8385084862!2d75.7636695412761!3d11.48574983874423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba663aea43f3473%3A0x6fa0e6f3eadb57c0!2sNaduvannur%2C%20Kerala%20673614!5e0!3m2!1sen!2sin!4v1737443399964!5m2!1sen!2sin",
    instructor: "Shabeer",
    phone: "+91 95269 77132"
  },
  {
    name: 'PTM Kalari Nirmallur',
    location: 'Nirmallur Bajanamdam, Kozhikode, Kerala',
    description: 'A center devoted to preserving and teaching authentic Kalarippayattu techniques, fostering cultural heritage and martial excellence.',
    image: '/assets/images/centers/nirmallur.jpeg',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.212194959348!2d75.81974929999998!3d11.464604249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66411a3bc6903%3A0x3c30f18ac986b083!2sNirmallur%2C%20Panangad%2C%20Kerala%20673612!5e0!3m2!1sen!2sin!4v1737442598454!5m2!1sen!2sin",
    mapUrl: 'https://maps.app.goo.gl/ugXknd1HJH3PYhYK7',
    instructor: "Jayakrishnan",
    phone: "+91 9847037931"
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


export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
