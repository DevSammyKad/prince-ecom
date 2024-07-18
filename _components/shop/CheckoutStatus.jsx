import React from "react";
import { motion } from "framer-motion";

const CheckoutStatus = ({ step }) => (
  <div className="flex justify-between items-center mb-8 overflow-x-auto py-4">
    {["cart", "checkout", "payment"].map((status, index) => (
      <div
        key={status}
        className={`flex items-center ${
          index <= ["cart", "checkout", "payment"].indexOf(step)
            ? "text-indigo-600"
            : "text-gray-400"
        } whitespace-nowrap`}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-1 sm:mr-2 ${
            index <= ["cart", "checkout", "payment"].indexOf(step)
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {index + 1}
        </motion.div>
        <span className="capitalize text-xs sm:text-sm md:text-base">
          {status}
        </span>
        {index < 2 && (
          <div className="w-4 sm:w-8 md:w-12 h-0.5 mx-1 sm:mx-2 bg-gray-300 hidden xs:block"></div>
        )}
      </div>
    ))}
  </div>
);

export default CheckoutStatus;
