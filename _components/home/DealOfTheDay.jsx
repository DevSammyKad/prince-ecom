"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const deals = [
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F9hsZsq3%2Fproduct-cat-7.jpg&w=128&q=75",
    imageAlt: "August Gift",
    name: "August Gift Voucher",
    discount: 50,
    timeLeft: { days: 15, hours: 12, minutes: 20, seconds: 17 },
    couponActive: true,
    couponCode: "KOMAL",
  },
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FQHTxCfc%2Fproduct-cat-3.jpg&w=128&q=75",
    imageAlt: "Summer Gift",
    name: "Summer Gift Voucher",
    discount: 12,
    timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    couponActive: false,
    couponCode: "SUMMER23",
  },
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F58zCBkK%2Fproduct-cat-2.jpg&w=128&q=75",
    imageAlt: "Winter Gift",
    name: "Winter Gift Voucher",
    discount: 15,
    timeLeft: { days: 88, hours: 12, minutes: 20, seconds: 17 },
    couponActive: true,
    couponCode: "WINTER23",
  },
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FzfTZRSf%2Fproduct-cat-1.jpg&w=128&q=75",
    imageAlt: "January Gift",
    name: "January Gift Voucher",
    discount: 20,
    timeLeft: { days: 15, hours: 22, minutes: 1, seconds: 17 },
    couponActive: true,
    couponCode: "JANUARY23",
  },
];

const DealCard = ({ deal }) => {
  const [timeLeft, setTimeLeft] = useState(deal.timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(timer);
      } else {
        setTimeLeft((prevTime) => {
          if (prevTime.seconds > 0) {
            return { ...prevTime, seconds: prevTime.seconds - 1 };
          } else if (prevTime.minutes > 0) {
            return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
          } else if (prevTime.hours > 0) {
            return {
              ...prevTime,
              hours: prevTime.hours - 1,
              minutes: 59,
              seconds: 59,
            };
          } else if (prevTime.days > 0) {
            return {
              ...prevTime,
              days: prevTime.days - 1,
              hours: 23,
              minutes: 59,
              seconds: 59,
            };
          }
          return prevTime;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(deal.couponCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col justify-between transform transition duration-500 hover:scale-105 min-w-[250px] sm:min-w-[300px] max-w-full sm:max-w-[300px]">
      <div className="flex items-center mb-4">
        <img
          src={deal.imageSrc}
          alt={deal.imageAlt}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mr-4"
        />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {deal.name}
          </h3>
          <p className="text-sm text-gray-500">{deal.discount}% Off</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-xs sm:text-sm text-gray-500">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </div>
        <div
          className={`text-xs sm:text-sm ${
            deal.couponActive ? "text-green-500" : "text-red-500"
          }`}
        >
          Coupon {deal.couponActive ? "Active" : "Inactive"}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={copyToClipboard}
          className={`${
            deal.couponActive
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          } py-2 px-4 rounded-lg border border-dashed border-current text-sm sm:text-base w-full`}
        >
          {copied ? "Copied!" : deal.couponCode}
        </button>
      </div>
    </div>
  );
};

const DealOfTheDay = () => {
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
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Deal of The Day
          </h2>
        </div>
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll(-300)}
              className="absolute left-0 opacity-70 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            >
              <FaChevronLeft size={12} />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 sm:space-x-6 py-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
            onScroll={updateArrowVisibility}
          >
            {deals.map((deal, index) => (
              <DealCard key={index} deal={deal} />
            ))}
          </div>
          {showRightArrow && (
            <button
              onClick={() => scroll(300)}
              className="absolute opacity-70 right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            >
              <FaChevronRight size={12} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
