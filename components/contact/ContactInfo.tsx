"use client";
import { motion } from "framer-motion";
import { memo } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { socialLinks } from "@/constants";
import Link from "next/link";

const ContactInfo = () => {
  const contactDetails = [
    { icon: <MapPin className="w-5 h-5 text-orange-500" />, text: "123 Kalari Street, Kerala, India" },
    { icon: <Phone className="w-5 h-5 text-orange-500" />, text: "+91 123 456 7890" },
    { icon: <Mail className="w-5 h-5 text-orange-500" />, text: "info@ptmkalari.com" },
    { icon: <Clock className="w-5 h-5 text-orange-500" />, text: "Mon-Sat: 6:00 AM - 8:00 PM" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900/50 p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm h-full"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex items-center space-x-3"
          >
            {detail.icon}
            <span className="text-gray-300">{detail.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              prefetch={false}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
            >
              <link.Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(ContactInfo)

