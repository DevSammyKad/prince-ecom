"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { mainNav } from "@/config/nav";
import Header from "@/_components/header";
import { products } from "@/config/dummyData";
import { useParams } from "next/navigation";

const Page = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("500ml");
  const [expandedSection, setExpandedSection] = useState(null);

  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 lg:mt-24 mt-10 min-h-screen">
      <Header navItems={mainNav} isSearch={true} />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-auto rounded-lg shadow-md object-cover aspect-square"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.round(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">
                {product.salePrice}
                {product.price && (
                  <span className="ml-2 text-lg font-medium text-red-600 line-through">
                    {product.price}
                  </span>
                )}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Color
                </h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                        selectedColor === color ? "ring-2 ring-indigo-500" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.size.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-12 text-center bg-white border-none focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 text-sm font-semibold">
                Add to Cart
              </button>
            </div>

            <div className="space-y-4 pt-6">
              {["Features", "Specifications"].map((section) => (
                <div key={section} className="border-t pt-4">
                  <button
                    onClick={() => toggleSection(section)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <h3 className="text-sm font-medium text-gray-900">
                      {section}
                    </h3>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        expandedSection === section ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSection === section && (
                    <div className="mt-2 space-y-2 text-sm">
                      {section === "Features" ? (
                        <ul className="space-y-1">
                          {product.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <svg
                                className="w-4 h-4 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="space-y-1">
                          {Object.entries(product).map(([key, value]) => {
                            if (
                              [
                                "brand",
                                "weight",
                                "material",
                                "SKU",
                                "dateAdded",
                                "manufacturer",
                                "warranty",
                                "returnPolicy",
                                "shippingDetails",
                              ].includes(key)
                            ) {
                              return (
                                <li
                                  key={key}
                                  className="flex items-center space-x-2"
                                >
                                  <span className="font-medium">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                    :
                                  </span>
                                  <span>{value}</span>
                                </li>
                              );
                            }
                            return null;
                          })}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
