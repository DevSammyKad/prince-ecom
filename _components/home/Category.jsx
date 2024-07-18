"use client";

import React from "react";
import { motion } from "framer-motion";

const Category = () => {
  // Sample data for categories
  const categories = [
    {
      id: 1,
      name: "Viral Gadgets",
      imageUrl:
        "https://m.media-amazon.com/images/I/71bPP8n48wS._AC_UL320_.jpg",
      link: "/category1",
    },
    {
      id: 2,
      name: "Photo Gifts",
      imageUrl:
        "https://m.media-amazon.com/images/I/91+fqdzI9sL._AC_UL320_.jpg",
      link: "/category1",
    },
    {
      id: 3,
      name: "Lunch Boxes",
      imageUrl:
        "https://m.media-amazon.com/images/I/61IIsavHkUL._AC_UL320_.jpg",
      link: "/category1",
    },
    {
      id: 4,
      name: "Kids Specials",
      imageUrl:
        "https://m.media-amazon.com/images/I/516OQgRzwZS._AC_UL320_.jpg",
      link: "/category1",
    },
    {
      id: 5,
      name: "Gifts for Him",
      imageUrl:
        "https://m.media-amazon.com/images/I/616uczzj1tL._AC_UL320_.jpg",
      link: "/category1",
    },
    {
      id: 6,
      name: "Gifts for Her",
      imageUrl:
        "https://m.media-amazon.com/images/I/71P8z0DrFRL._AC_UL320_.jpg",
      link: "/category1",
    },

    // Add more categories as needed
  ];

  return (
    <div data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Explore Our Categories
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Find the perfect gift for your loved ones from our wide range of
          categories.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <motion.div
              data-aos="fade-up"
              key={category.id}
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={category.link} className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">
                      {category.name}
                    </p>
                  </div>
                </div>
              </a>
              <p className="text-gray-900 mt-4 text-center text-md font-semibold">
                {category.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
