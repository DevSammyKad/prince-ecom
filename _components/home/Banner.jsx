"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const dummyData = [
  {
    id: 1,
    text: "Products from Just ₹99",
    highlight: "Just ₹99",
    image:
      "https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.b3c73448.png&w=640&q=75",
    link: "/products/1",
  },
  {
    id: 2,
    text: "Exclusive Collection at Amazing Prices",
    highlight: "Amazing Prices",
    image:
      "https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo4%2Fslider2.png&w=640&q=75",
    link: "/products/2",
  },
  {
    id: 3,
    text: "Discover Our New Arrivals",
    highlight: "New Arrivals",
    image:
      "https://uomo-nextjs-ecommerce.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fdemo4%2Fslider1.png&w=640&q=75",
    link: "/products/3",
  },
];

const Banner = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % dummyData.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative w-full mt-10 md:mt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          animate={{
            background: [
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
              "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
              "linear-gradient(45deg, #f6d365 0%, #fda085 100%)",
              "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
            ],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
      <div className="relative w-full h-[70vh] flex items-center">
        <AnimatePresence>
          {dummyData.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full flex items-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="w-full md:w-1/2 px-4 md:pl-16 z-10">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-navy-900 leading-tight"
                    >
                      {slide.text.split(" ").map((word, i) =>
                        slide.highlight.includes(word) ? (
                          <span key={i} className="text-purple-600">
                            {word}{" "}
                          </span>
                        ) : (
                          word + " "
                        )
                      )}
                    </motion.h2>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <Button
                        onClick={() => router.push(slide.link)}
                        variant="outline"
                        className="bg-white text-black border-2 border-black hover:bg-gray-300 hover:border-purple-700 transition duration-300 px-6 py-2 md:px-8 md:py-3 text-base md:text-lg shadow-lg"
                      >
                        Shop Now
                        <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 inline-block" />
                      </Button>
                    </motion.div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-5 bottom-0">
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="relative h-full"
                    >
                      <img
                        src={slide.image}
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                        className="pr-24"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Banner;
