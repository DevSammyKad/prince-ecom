"use client";
import React from "react";
import { motion } from "framer-motion";
import CheckoutStatus from "../../_components/shop/CheckoutStatus";
import Layout from "@/_components/shop/Layout";

// Dummy data
const dummyItems = [
  { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
  { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
];

// Calculate total price
const priceTotal = dummyItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const CheckoutItems = ({ items }) => (
  <div className="space-y-4">
    {items.map((item) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm"
      >
        <div>
          <h4 className="font-semibold text-indigo-700 text-sm sm:text-base">
            {item.name}
          </h4>
          <p className="text-xs sm:text-sm text-gray-600">
            Quantity: {item.quantity}
          </p>
        </div>
        <p className="font-semibold text-indigo-600 text-sm sm:text-base">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>
      </motion.div>
    ))}
  </div>
);

const InputField = ({ id, label, type }) => (
  <div className="flex flex-col space-y-1 sm:space-y-2">
    <label
      htmlFor={id}
      className="text-xs sm:text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <input
      id={id}
      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
      type={type}
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

const CheckoutPage = () => {
  return (
    <Layout title="Checkout">
      <CheckoutStatus step="checkout" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Shipping Information */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
            Shipping information
          </h2>
          <form className="space-y-4">
            {[
              { id: "email", label: "Email", type: "email" },
              { id: "name", label: "Full Name", type: "text" },
              { id: "address", label: "Address", type: "text" },
              { id: "city", label: "City", type: "text" },
              { id: "postal", label: "Postal Code / ZIP", type: "text" },
              { id: "phone", label: "Phone Number", type: "tel" },
            ].map((field) => (
              <InputField key={field.id} {...field} />
            ))}

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label
                htmlFor="country"
                className="text-xs sm:text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                defaultValue="India"
              ></select>
            </div>
          </form>
        </div>

        {/* Payment and Cart Summary */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
              Payment method
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                "paypal",
                "visa",
                "mastercard",
                "maestro",
                "discover",
                "ideal-logo",
              ].map((logo) => (
                <div
                  key={logo}
                  className="bg-gray-100 rounded-lg p-2 flex items-center justify-center"
                >
                  <img
                    src={`https://via.placeholder.com/80x40?text=${logo}`}
                    alt={logo}
                    className="h-6 sm:h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
              Coupon Code
            </h2>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-grow px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              />
              <button className="bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Apply
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
              Your cart
            </h2>
            <CheckoutItems items={dummyItems} />
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <p className="text-base sm:text-lg text-gray-600">Total cost</p>
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-600">
                ₹{priceTotal.toFixed(2)}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/cart"
          className="bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mb-4 sm:mb-0 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Cart
        </motion.a>
        <div className=" flex space-x-2 sm:space-x-4">
          <motion.button
            onClick={() => {
              window.location.href = "/";
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
              "
          >
            Continue shopping
          </motion.button>
          <motion.button
            onClick={() => {
              window.location.href = "/payment";
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Proceed to payment
          </motion.button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
