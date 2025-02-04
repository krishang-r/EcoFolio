"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/Slide_1.jpeg", "/Slide_2.jpeg", "/Slide_3.jpeg"];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[90%] h-[80vh] mx-auto overflow-hidden mt-9 shadow-lg flex items-center justify-center bg-gray-200">
      <AnimatePresence mode="wait">
        <motion.img
          key={index} // Important for animation
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/0 p-2 rounded-full shadow-md hover:bg-gray-300/0 transition"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/0 p-2 rounded-full shadow-md hover:bg-gray-300/0 transition"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
