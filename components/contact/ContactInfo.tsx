"use client";
import { motion } from "framer-motion";
import { memo } from "react";
import { contactDetails } from "@/constants";

const ContactInfo = () => {
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
        transition={{ delay: 0.6 }}
        className="mt-8 pt-2 sm:pt-9  border-gray-700"
      >
        <div className="bg-orange-700/20 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-orange-500 mb-2">Ready to get started?</h4>
          <p className="text-gray-300 text-sm">
            Fill out the form and our team will get back to you promptly to discuss your needs.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(ContactInfo)

