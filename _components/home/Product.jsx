"use client";
import React, { useState } from "react";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { products } from "@/config/dummyData";
import { useRouter } from "next/navigation";

const trendyProducts = products.slice(0, 2);
const newArrivals = products.slice(1, 3);
const bestSellers = products.slice(2, 4);

const Page = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const router = useRouter();
  const handleProductClick = (productId) => {
    const product = products.find((p) => p.id === productId);
    router.push(`/products/${productId}`);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
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
      <div data-aos="fade-up">
        <motion.div
          key={product.id}
          layout
          variants={itemVariants}
          whileHover={{
            y: -5,
            boxShadow:
              "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 bg- transform hover:scale-102"
        >
          <motion.div
            className="aspect-w-1 aspect-h-1 w-full overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-48 sm:h-64 w-full object-cover object-center cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            />
          </motion.div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-base sm:text-lg font-bold text-indigo-600">
              {product.price}
            </p>
          </div>
        </motion.div>
      </div>
    ));
  };

  const CategoryButton = ({ category, label }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleCategoryClick(category)}
      className={`px-3 py-2 sm:px-6 sm:py-2 font-semibold text-sm sm:text-lg transition-colors duration-300 ${
        activeCategory === category
          ? "bg-white text-black border border-black shadow-md hover:shadow-lg"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {label}
    </motion.button>
  );

  return (
    <div className="min-h-screen" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
          >
            Products
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          >
            <CategoryButton category="all" label="All Products" />
            <CategoryButton category="trendy" label="Trendy" />
            <CategoryButton category="newArrivals" label="New Arrivals" />
            <CategoryButton category="bestSellers" label="Best Sellers" />
          </motion.div>
        </motion.div>

        <LayoutGroup>
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {renderProductCards()}
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default Page;
