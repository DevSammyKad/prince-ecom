"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Page = ({ title, products }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const trendyProducts = products.slice(0, 2);
  const newArrivals = products.slice(1, 3);
  const bestSellers = products.slice(2, 4);

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

  const router = useRouter();
  const handleProductClick = (productId) => {
    const product = products.find((p) => p.id === productId);
    router.push(`/products/${productId}`);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleViewAll = () => {
    router.push("/products");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const getProductsToDisplay = () => {
    switch (activeCategory) {
      case "trendy":
        return trendyProducts;
      case "newArrivals":
        return newArrivals;
      case "bestSellers":
        return bestSellers;
      default:
        return products;
    }
  };

  const renderProductCards = () => {
    const productsToDisplay = getProductsToDisplay();
    return productsToDisplay.map((product) => (
      <motion.div
        key={product.id}
        layout
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow:
            "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)",
        }}
        className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-white transform hover:scale-105 flex-shrink-0 w-36 sm:w-48 md:w-56 lg:w-64 mr-4"
      >
        <motion.div
          className="aspect-w-1 aspect-h-1 w-full overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-36 sm:h-auto w-full object-cover object-center cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          />
        </motion.div>
        <div className="p-3 sm:p-4">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-sm sm:text-base font-bold text-indigo-600">
            {product.price}
          </p>
          <Button
            onClick={() => handleProductClick(product.id)}
            className="mt-2 w-full text-xs bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
          >
            Buy Now
          </Button>
        </div>
      </motion.div>
    ));
  };

  const CategoryButton = ({ category, label }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleCategoryClick(category)}
      className={`px-2 sm:px-3 py-1 rounded-full font-medium text-xs transition-all duration-300 ${
        activeCategory === category
          ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {label}
    </motion.button>
  );

  return (
    <div className="min-h-fit my-10 bg-gray-50" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h1>
          {title === "All Products" && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 mb-4"
            >
              <CategoryButton category="all" label="All Products" />
              <CategoryButton category="trendy" label="Trendy" />
              <CategoryButton category="newArrivals" label="New Arrivals" />
              <CategoryButton category="bestSellers" label="Best Sellers" />
            </motion.div>
          )}
        </motion.div>

        <div className="relative">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              onClick={handleViewAll}
              className="text-xs p-2 h-7 hover:bg-blue-300 transition-colors duration-300"
            >
              View All
            </Button>
          </div>
          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={() => scroll(-250)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 transition-all duration-300 hover:bg-gray-100"
              >
                <FaChevronLeft className="text-gray-600" size={12} />
              </button>
            )}
            <motion.div
              ref={scrollRef}
              layout
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
              onScroll={updateArrowVisibility}
            >
              {renderProductCards()}
            </motion.div>
            {showRightArrow && (
              <button
                onClick={() => scroll(250)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 transition-all duration-300 hover:bg-gray-100"
              >
                <FaChevronRight className="text-gray-600" size={12} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
