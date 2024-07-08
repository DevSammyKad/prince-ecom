"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="relative w-full mt-14 overflow-hidden bg-gray-200">
      <div className="relative w-full h-[90vh] flex items-center">
        <div className="w-1/2 pl-8 md:pl-16 z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-navy-900 leading-tight"
          >
            All Product Starting from
            <br />
            <span className="text-purple-600">Just ₹99</span>
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              onClick={() => router.push("/products")}
              variant="outline"
              className="bg-white text-black border-2 border-black hover:bg-gray-300 hover:border-purple-700 transition duration-300 px-8 py-3 text-lg shadow-lg"
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute right-0 top-0 bottom-0 w-full bg-purple-200 rounded-l-full"
          ></motion.div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.b3c73448.png&w=640&q=75"
            alt="Woman wearing Beats Studio headphones"
            className="hidden md:block absolute right-5 top-5 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
