"use client";
import React from "react";
import { motion } from "framer-motion";
import CheckoutStatus from "../../_components/shop/CheckoutStatus";
import { ArrowLeft } from "lucide-react";
import Layout from "../../_components/shop/Layout";

const Payment = () => {
  return (
    <Layout title="Payment">
      <CheckoutStatus step="payment" />

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
          Payment Details
        </h2>
        {/* Add payment form or integration here */}
        <p>Payment form or integration goes here</p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/checkout"
          className="bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mb-4 sm:mb-0 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
          Back to Checkout
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Complete Payment
        </motion.button>
      </div>
    </Layout>
  );
};

export default Payment;
