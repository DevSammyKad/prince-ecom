"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedStorage, setSelectedStorage] = useState("128GB");

  const colors = ["Black", "White", "Blue", "Red"];
  const storageOptions = ["64GB", "128GB", "256GB"];

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="img-container"
          >
            <img
              src="https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Mobile Phone image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="product-details space-y-6"
          >
            <div>
              <p className="text-sm font-medium text-indigo-600">
                Electronics / Mobile Phones
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                Example Mobile Phone Model
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold text-gray-900">$999</h2>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  (1245 reviews)
                </span>
              </div>
            </div>

            <p className="text-gray-600">
              Explore the features and capabilities of our latest example mobile
              phone model. Stay connected with advanced technology and sleek
              design that fits your lifestyle.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                        selectedColor === color ? "ring-2 ring-indigo-500" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Storage</h3>
                <div className="mt-2 flex space-x-2">
                  {storageOptions.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                        selectedStorage === storage
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center border-none focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add to Cart
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900">Features</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "5G Connectivity",
                  "Quad Camera Setup",
                  "High-resolution Display",
                  "Multiple Color Options",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-green-500"
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
