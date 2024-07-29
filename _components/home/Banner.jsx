"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const banners = [
  { image: "1.png", link: "#" },
  { image: "2.png", link: "#" },
  { image: "3.png", link: "#" },
];

const Banner2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-2 border-gray-500 relative w-full mt-16 md:mt-32 lg:mt-28 overflow-hidden">
      <div className="relative w-full h-[140px] md:h-[250px] lg:h-[490px]">
        {banners.map((banner, index) => (
          <a
            key={index}
            href={banner.link}
            className={cn("absolute inset-0 transition-opacity duration-1000", {
              "opacity-0": currentIndex !== index,
              "opacity-100": currentIndex === index,
            })}
          >
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-fit h-fit object-cover"
            />
          </a>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-1 w-3 rounded-full transition-colors duration-300",
              {
                "bg-gray-400": currentIndex !== index,
                "bg-blue-500": currentIndex === index,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner2;
