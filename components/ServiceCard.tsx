import Image from "next/image";
import { motion } from 'framer-motion';
import { memo } from "react";
import { ServiceCardProps } from "@/types/props";
import Link from "next/link";


const ServiceCard = ({ service, isActive, onClick }: ServiceCardProps) => (
  <motion.div
    className={`relative w-full h-[400px] rounded-lg overflow-hidden cursor-pointer ${isActive ? 'ring-4 ring-orange-500' : ''}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    }}
    aria-pressed={isActive}
  >
    <Image
      src={service.image}
      alt={service.name}
      fill
      className="object-cover"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-black to-transparent' : service.color} opacity-70`} />
    <div className="absolute inset-0 flex flex-col justify-end p-6">
      <h3 className="text-3xl font-russo-one mb-2 text-white">{service.name}</h3>
      <p className="text-gray-200 mb-4 line-clamp-3">{service.description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-white text-black font-russo-one text-lg rounded-full w-fit"
      >
        <Link href={'/services'} prefetch={false}>
          More About {service.name}
        </Link>
      </motion.button>
    </div>
  </motion.div>
);


export default memo(ServiceCard);