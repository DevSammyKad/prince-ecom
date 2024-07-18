"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { occasion } from "@/config/dummyData";

const ArrowButton = ({ onClick, icon, className }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-md z-10 transition-all duration-300 ${className}`}
    aria-label={`Scroll ${className.includes("left") ? "left" : "right"}`}
  >
    {icon}
  </button>
);

const Occasion = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
      updateArrowVisibility();
    }
  };

  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => updateArrowVisibility();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <div className="text-center md:-mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-3">
            Occasions
          </h1>
          <p className="text-sm md:text-base text-center text-gray-600">
            Find the perfect gift for any occasion
          </p>
        </div>
        <div className="relative">
          {showLeftArrow && (
            <ArrowButton
              onClick={() => scroll(-300)}
              icon={<FaChevronLeft size={14} />}
              className="left-0 opacity-70 sm:-left-4 lg:hidden"
            />
          )}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 sm:space-x-6 py-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
            onScroll={updateArrowVisibility}
          >
            {occasion.map((card, index) => (
              <CardContainer
                key={index}
                className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem] flex-shrink-0"
              >
                <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-blue-100 dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-4 sm:p-6 border transition-all duration-300 ease-in-out hover:shadow-lg">
                  <CardItem translateZ="100" className="w-full mb-4">
                    <img
                      src={card.imageSrc}
                      alt={`thumbnail for ${card.text}`}
                      width={1000}
                      height={1000}
                      className="h-48 sm:h-52 md:h-56 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <div className="flex justify-center items-center">
                    <CardItem
                      translateZ="50"
                      className="text-lg sm:text-xl font-normal text-neutral-600 dark:text-black mb-3"
                    >
                      {card.text}
                    </CardItem>
                  </div>
                  <div className="flex justify-center items-center">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={card.link}
                      className="px-4 py-2 rounded-xl bg-black border border-black dark:bg-white dark:text-black text-white text-xs font-bold transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-200"
                    >
                      Shop Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
          {showRightArrow && (
            <ArrowButton
              onClick={() => scroll(300)}
              icon={<FaChevronRight size={14} />}
              className="right-0 opacity-70 sm:-right-4 lg:hidden"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Occasion;
