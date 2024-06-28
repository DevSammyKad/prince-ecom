"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { BiBookmarkHeart } from "react-icons/bi";
import { CiSearch } from "react-icons/ci"; // Import the search icon
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Perform search or redirect to the search results page
      console.log("Search for:", searchQuery);
      // Example: redirect to a search results page
      window.location.href = `/search?query=${searchQuery}`;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      {/* Top section with contact number */}
      <div className="bg-blue-600 text-white p-1">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <motion.p
              className="flex"
              animate={{ x: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            >
              <FaWhatsapp /> +987456123
            </motion.p>
            <motion.p
              animate={{ x: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            >
              Free Delivery on orders above 499₹ 🎉
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main header section */}
      <div className="bg-black text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-3">
          <div className="text-sm md:text-md lg:text-xl font-bold">E-com</div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 text-white rounded-full py-1 pl-3 pr-9 w-48 md:w-auto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                onClick={handleSearch}
              >
                <CiSearch size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-full px-4 md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 text-white rounded-full py-1 pr-9 px-3 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="absolute right-7 top-1/2 transform -translate-y-1/2 text-black"
                onClick={handleSearch}
              >
                <CiSearch size={20} />
              </button>
            </div>
            <a href="">
              <BiBookmarkHeart size={24} className="hidden md:block mx-2" />
            </a>
            <a href="">
              <LuShoppingCart size={24} className="-mx-3 md:mx-2" />
            </a>
            <a href="">
              <MdAccountCircle size={24} className="hidden md:block mx-2" />
            </a>
            <button
              onClick={toggleMenu}
              className="focus:outline-none md:hidden"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBarsStaggered size={18} />}
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
              onClick={toggleMenu} // Close the menu when clicking the backdrop
            />
            <motion.div
              initial={{ opacity: 0, x: "+100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "+100%" }}
              className="fixed top-0 right-0 bottom-0 w-1/2 bg-white z-50 p-3"
            >
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-black border p-1 rounded-lg"
                >
                  <FaTimes size={18} />
                </button>
              </div>
              <nav className="flex flex-col items-center space-y-4 py-4">
                <a href="/" className="text-gray-700 hover:text-gray-500">
                  Home
                </a>
                <a href="/" className="text-gray-700 hover:text-gray-500">
                  Category
                </a>
                <button className="border rounded-full bg-black py-1 px-4 text-white hover:text-gray-300">
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
