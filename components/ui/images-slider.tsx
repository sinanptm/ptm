"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ImagesSliderProps } from "@/types/props";

export const ImagesSlider: React.FC<ImagesSliderProps> = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const imageCache = useRef<Set<string>>(new Set());
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMouseOver = useRef(false);

  const preloadImage = useCallback((imageSrc: string) => {
    if (imageCache.current.has(imageSrc)) return;

    const img = new window.Image();
    img.src = imageSrc;
    img.onload = () => {
      imageCache.current.add(imageSrc);
    };
  }, []);

  const preloadAdjacentImages = useCallback(() => {
    if (images.length <= 1) return;
    
    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    
    preloadImage(images[nextIndex].name);
    preloadImage(images[prevIndex].name);
  }, [currentIndex, images, preloadImage]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1 === images.length ? 0 : prevIndex + 1;
      return newIndex;
    });
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    if (images.length <= 1) return;
    
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  }, [images.length]);

  useEffect(() => {
    if (!images.length) return;
    
    const currentImage = images[currentIndex].name;
    preloadImage(currentImage);
    preloadAdjacentImages();
    setIsLoading(false);
  }, [currentIndex, images, preloadImage, preloadAdjacentImages]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious]);

  useEffect(() => {
    const startAutoplay = () => {
      if (autoplay && !isMouseOver.current && images.length > 1) {
        autoplayTimeoutRef.current = setTimeout(handleNext, 3000);
      }
    };

    if (!isLoading) {
      startAutoplay();
    }

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [autoplay, handleNext, isLoading, currentIndex, images.length]);

  const slideVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 0,
      y: "-150%",
      transition: {
        duration: 0.4,
      },
    },
    downExit: {
      opacity: 0,
      y: "150%",
      transition: {
        duration: 0.4,
      },
    },
  };

  if (!images.length) {
    return null;
  }

  return (
    <section
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
      onMouseEnter={() => { isMouseOver.current = true; }}
      onMouseLeave={() => {
        isMouseOver.current = false;
        if (autoplay && !isLoading) {
          autoplayTimeoutRef.current = setTimeout(handleNext, 5000);
        }
      }}
      role="region"
      aria-label="Image slider"
    >
      {!isLoading && children}
      {!isLoading && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
          aria-hidden="true"
        />
      )}

      {!isLoading && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0"
          >
            <Image
              src={images[currentIndex].name}
              alt={images[currentIndex].alt}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={85}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};