"use client"
import { motion } from "framer-motion"
import { memo } from "react"

const ContactHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 py-6">
      <div className="text-center max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Contact{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-orange-500"
          >
            PTM Kalari
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Get in touch with us for inquiries about our services, training programs, or to schedule a visit to our
          center.
        </motion.p>
      </div>
    </section>
  )
}

export default memo(ContactHero)

