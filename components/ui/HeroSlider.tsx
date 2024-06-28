import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";

const images = [
  "https://source.unsplash.com/1600x900/?beach",
  "https://source.unsplash.com/1600x900/?cat",
  "https://source.unsplash.com/1600x900/?dog",
  "https://source.unsplash.com/1600x900/?lego",
  "https://source.unsplash.com/1600x900/?textures&patterns",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const jumpTo = (index) => {
    setCurrentIndex(index);
  };

  const next = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
      <div className="relative w-full h-72 md:h-96">
        <AnimatePresence>
          {images.map((image, index) =>
            currentIndex === index + 1 ? (
              <motion.figure
                key={index}
                className="absolute inset-0 z-10 h-full w-full flex items-center justify-center bg-gray-900 bg-opacity-30 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 z-10 h-full w-full object-cover opacity-70"
                />
                <figcaption className="relative z-20 text-center text-white p-4 md:p-8">
                  <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
                    Slide {index + 1}
                  </h2>
                  <p className="text-xs md:text-sm mb-2 md:mb-4">
                    This is a description for slide {index + 1}. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed consectetur
                    nec risus non gravida.
                  </p>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded">
                      Button 1
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-md">
                      Button 2
                    </button>
                  </div>
                </figcaption>
              </motion.figure>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => jumpTo(index + 1)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index + 1
                ? "bg-transparent border"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
