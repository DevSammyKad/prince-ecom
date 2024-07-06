"use client";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = ({ navItems, isSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Search for:", searchQuery);
      window.location.href = `/search?query=${searchQuery}`;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans">
      <div
        className={`bg-white text-gray-800 shadow-lg fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-opacity-80 backdrop-blur-sm" : "bg-opacity-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <img src="Bajaj-Logo.png" alt="logo" className="h-10 w-auto" />
          </Link>
          {isSearch && (
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="border-2 border-gray-300 focus:border-blue-500 text-black bg-gray-100 rounded-full py-2 pl-4 pr-12 w-64 transition-all duration-300 focus:w-80 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                  onClick={handleSearch}
                >
                  <CiSearch size={24} />
                </button>
              </div>
            </div>
          )}
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <p className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                  {item.icon}
                </p>
              </Link>
            ))}
            <button
              onClick={toggleMenu}
              className="focus:outline-none md:hidden text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBarsStaggered size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ opacity: 0, x: "+100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "+100%" }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 p-6 shadow-2xl"
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <a
                  href="/"
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
                >
                  Category
                </a>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-medium">
                  Login
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
