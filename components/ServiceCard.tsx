import Image from "next/image"
import { motion } from "framer-motion"
import { memo } from "react"
import type { ServiceCardProps } from "@/types/props"
import Link from "next/link"
import { cn } from "@/lib/utils"

const ServiceCard = ({ service, isActive, onClick, hasButton }: ServiceCardProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeInOut",
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      className={`relative w-full h-[400px] rounded-lg overflow-hidden cursor-pointer ${isActive ? "ring-4 ring-orange-500" : ""}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick()
        }
      }}
      aria-pressed={isActive}
    >
      <Image
        src={service.image || "/placeholder.svg"}
        alt={service.name}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-t opacity-70",
          isActive ? "from-black to-transparent" : service.color,
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <motion.h3
          className="text-3xl font-russo-one mb-2 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {service.name}
        </motion.h3>
        <motion.p
          className="text-gray-200 mb-4 line-clamp-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {service.description}
        </motion.p>
        {hasButton && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-black font-russo-one text-lg rounded-full w-fit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Link href={"/services"} prefetch={false}>
              More About {service.name}
            </Link>
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  )
}

export default memo(ServiceCard)

