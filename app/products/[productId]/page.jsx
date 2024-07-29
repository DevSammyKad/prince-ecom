"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { mainNav } from "@/config/nav";
import Header from "@/_components/header";
import { products } from "@/config/dummyData";
import { useParams } from "next/navigation";
import { FaStar, FaTimes } from "react-icons/fa";
import { ImageGallery } from "./components/ImageGallery";
import { ColorSelector } from "./components/ColorSelector";
import { SizeSelector } from "./components/SizeSelector";
import { QuantitySelector } from "./components/QuantitySelector";
import { ProductDetails } from "./components/ProductDetails";

const Page = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("500ml");
  const [expandedSection, setExpandedSection] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const handleQuantityChange = (change) => {
    setQuantity((prev) =>
      Math.max(1, typeof change === "number" ? prev + change : change)
    );
  };

  const toggleFullscreen = (index) => {
    setFullscreenIndex(index);
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="bg-gray-50 lg:mt-24 mt-10 min-h-screen">
      <Header navItems={mainNav} isSearch={true} />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-4 lg:px-2">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 max-w-xl mx-auto"
          >
            <ImageGallery
              images={product.imageSrc}
              alt={product.imageAlt}
              onFullscreen={toggleFullscreen}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.round(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                {product.price}
                {product.salePrice && (
                  <span className="ml-2 text-lg font-medium text-red-600 line-through">
                    {product.salePrice}
                  </span>
                )}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              {product.colors.some((color) => color.trim() !== "") && (
                <ColorSelector
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                />
              )}

              {product.size.some((size) => size.trim() !== "") && (
                <SizeSelector
                  sizes={product.size}
                  selectedSize={selectedSize}
                  onSelectSize={setSelectedSize}
                />
              )}
            </div>

            <div className="flex items-center space-x-4">
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
              />
              <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 text-sm font-semibold">
                Add to Cart
              </button>
            </div>

            <ProductDetails
              product={product}
              expandedSection={expandedSection}
              onToggleSection={setExpandedSection}
            />
          </motion.div>
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-80 z-50 flex items-center rounded-md m-2 justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-5 text-white"
          >
            <FaTimes size={24} />
          </button>
          <img
            src={product.imageSrc[fullscreenIndex]}
            alt={product.imageAlt}
            className="max-w-full p-2 max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Page;
