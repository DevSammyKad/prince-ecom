import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const CategoryDropdown = ({ category, subCategories, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = () => {
    if (subCategories.length === 0) {
      router.push(`/${category.toLowerCase().replace(" ", "-")}`);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    router.push(
      `/${category.toLowerCase().replace(" ", "-")}/${subCategory
        .toLowerCase()
        .replace(" ", "-")}`
    );
    setIsOpen(false);
  };

  return (
    <div
      className={`relative ${isMobile ? "w-full" : "group"}`}
      ref={dropdownRef}
    >
      <button
        onClick={handleCategoryClick}
        className={`text-white hover:text-gray-200 transition-colors duration-300 focus:outline-none flex items-center justify-between ${
          isMobile ? "w-full py-2" : ""
        }`}
      >
        {category}
        {subCategories.length > 0 && (
          <FaChevronDown className={`${isMobile ? "ml-2" : "ml-1"} text-xs`} />
        )}
      </button>
      {isOpen && subCategories.length > 0 && (
        <div
          className={`${
            isMobile ? "relative w-full" : "absolute left-0 w-56"
          } mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden`}
        >
          {subCategories.map((subCategory, index) => (
            <button
              key={index}
              onClick={() => handleSubCategoryClick(subCategory)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const SubHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categories = [
    {
      name: "ALL CATEGORIES",
      subCategories: ["Category 1", "Category 2", "Category 3"],
    },
    {
      name: "Home Appliance",
      subCategories: ["Appliance 1", "Appliance 2", "Appliance 3"],
    },
    {
      name: "Audio & Speakers",
      subCategories: ["Audio 1", "Audio 2", "Speakers"],
    },
    {
      name: "Solar Product",
      subCategories: ["Solar Panel", "Solar Inverter", "Solar Battery"],
    },
    {
      name: "Fancy Light",
      subCategories: ["RGB light's", "Bulb", "Tubelight"],
    },
    {
      name: "Fashion",
      subCategories: ["Men", "Women", "Kids"],
    },
    {
      name: "GIFTS",
      subCategories: [],
    },
    {
      name: "Order Track",
      subCategories: ["By Number", "By Order-ID"],
    },
  ];

  return (
    <nav className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 py-1 px-4 md:px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center bg-gradient-to-r from-red-500 to-red-600 py-1 px-4 rounded-md shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300">
          <FaBars className="text-white mr-2" />
          <CategoryDropdown
            category={categories[0].name}
            subCategories={categories[0].subCategories}
          />
        </div>
        <div className="hidden md:flex space-x-8">
          {categories.slice(1).map((category) => (
            <CategoryDropdown
              key={category.name}
              category={category.name}
              subCategories={category.subCategories}
            />
          ))}
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {categories.slice(1).map((category) => (
            <CategoryDropdown
              key={category.name}
              category={category.name}
              subCategories={category.subCategories}
              isMobile={true}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default SubHeader;
