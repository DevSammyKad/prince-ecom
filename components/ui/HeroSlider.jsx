import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button"; // Assuming Button component is imported correctly

const images = [
  "https://images.unsplash.com/photo-1718481229611-857973320158?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718481229611-857973320158?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718481229611-857973320158?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718481229611-857973320158?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718481229611-857973320158?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718481229611-857973320158?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <figcaption className="absolute inset-0 z-20 flex items-center justify-start p-4 md:p-8 bg-opacity-75 bg-gray-800">
                  <div className="text-white w-full md:w-1/2">
                    <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
                      Slide {index + 1}
                    </h2>
                    <p className="text-xs md:text-sm mb-2 md:mb-4">
                      This is a description for slide {index + 1}. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed
                      consectetur nec risus non gravida.
                    </p>
                    <div className="flex flex-row space-x-4">
                      <Button className="mx-2">Button1</Button>
                      <Button>Button2</Button>
                    </div>
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
