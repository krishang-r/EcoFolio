"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "./images/photo1.jpg",
  "./images/photo2.jpg",
  "./images/photo3.jpg",
  "./images/photo4.jpg",
];

export default function PhotoSlide() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Slide image"
          className="w-full h-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <Button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
