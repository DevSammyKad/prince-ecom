"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { BiBookmarkHeart } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top section with contact number */}
      <div className="bg-blue-600 text-white p-1">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <p className="flex ">
              {" "}
              <FaWhatsapp /> +987456123
            </p>
            <p>Free Delivery on above 499₹ 🎉</p>
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
                className="border border-gray-300 text-black rounded-full py-1 px-3"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-full px-4 md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 text-black rounded-full py-1 px-3 w-full"
              />
            </div>
            <a href="">
              <BiBookmarkHeart size={24} className="hidden md:block" />
            </a>
            <a href="">
              <LuShoppingCart size={24} />
            </a>
            <a href="">
              <MdAccountCircle size={24} className="hidden md:block" />
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
          <motion.div
            initial={{ opacity: 0, x: "+100%" }}
            animate={{ opacity: 10, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            className="md:hidden bg-transparent shadow-md w-3/4"
          >
            <nav className="flex flex-col items-center  space-y-4 py-4">
              <a href="/" className="text-gray-700 hover:text-gray-500">
                Home
              </a>
              <a href="/" className="text-gray-700 hover:text-gray-500">
                Category
              </a>
              <Button className="border rounded-full bg-black py-1 text-white hover:text-gray-300">
                Login
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
