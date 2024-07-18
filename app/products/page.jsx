"use client";
import React, { useState, Suspense } from "react";
import {
  FaHeart,
  FaStar,
  FaShoppingCart,
  FaSort,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/config/dummyData";
import { mainNav } from "@/config/nav";
import Header from "@/_components/header";
import dynamic from "next/dynamic";
import SearchParamsWrapper from "./SearchParamsWrapper";

const Page = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const productsPerPage = 8;

  const router = useRouter();
  const handleProductClick = (productId) => {
    const product = products.find((p) => p.id === productId);
    router.push(`/products/${productId}`);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setFilter(value);
    } else if (name === "minPrice") {
      setMinPrice(value);
    } else if (name === "maxPrice") {
      setMaxPrice(value);
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts = products
    .filter((product) => {
      if (filter && product.category !== filter) return false;
      if (minPrice && parseFloat(product.price.slice(1)) < parseFloat(minPrice))
        return false;
      if (maxPrice && parseFloat(product.price.slice(1)) > parseFloat(maxPrice))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price") {
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      }
      return a[sortBy].localeCompare(b[sortBy]);
    });

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProductCards = () => {
    return currentProducts.map((product) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="group relative border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-white"
        onClick={() => handleProductClick(product.id)}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-2 text-sm font-medium text-gray-900">
            {product.price}
          </p>
        </div>
      </motion.div>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(filteredProducts.length / productsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    return (
      <nav className="flex justify-center mt-8">
        <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === number
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  const renderBreadcrumbs = (collection) => (
    <nav className="text-sm font-medium text-gray-500 mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <FaChevronRight className="mx-2" />
        </li>
        <li className="flex items-center">
          <a href="#" className="hover:text-gray-700">
            {collection ? collection : "All Products"}
          </a>
          {filter && (
            <>
              <FaChevronRight className="mx-2" />
              <span className="text-gray-700">{filter}</span>
            </>
          )}
        </li>
      </ol>
    </nav>
  );

  const SearchParamsWrapper = dynamic(() => import("./SearchParamsWrapper"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  return (
    <>
      <Header navItems={mainNav} isSearch={true} />
      <div className="bg-gray-50 mt-12 md:mt-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchParamsWrapper>
              {({ collection }) => (
                <>
                  {renderBreadcrumbs(collection)}
                  <div className="flex flex-col sm:flex-row items-baseline bg-cover bg-[url('https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?size=626&ext=jpg')] rounded-md justify-between border-b border-gray-200 pb-6">
                    <h1 className="text-3xl sm:text-4xl p-2 font-bold tracking-tight text-gray-900 mb-4 sm:mb-0">
                      {collection ? collection : "All Products"}
                    </h1>
                  </div>

                  <div className="mt-2">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-2 rounded-lg shadow-md"
                    >
                      <div className="relative inline-block text-left w-full sm:w-auto">
                        <div className="flex items-center space-x-2">
                          <FaSort className="text-gray-400" />
                          <select
                            className="block w-full pr-6 py-1 text-base bg-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            value={sortBy}
                            onChange={handleSortChange}
                          >
                            <option value="name">Sort by Name</option>
                            <option value="price">Sort by Price</option>
                            <option value="category">Sort by Category</option>
                          </select>
                        </div>
                      </div>

                      <div className="relative inline-block text-left w-full sm:w-auto">
                        <div className="flex items-center space-x-2">
                          <FaFilter className="text-gray-400" />
                          <select
                            id="category"
                            name="category"
                            className="block w-full pl-3 pr-10 py-2 text-base bg-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            value={filter}
                            onChange={handleFilterChange}
                          >
                            <option value="">All Categories</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Stationery">Stationery</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {renderProductCards()}
                  </div>

                  {renderPagination()}
                </>
              )}
            </SearchParamsWrapper>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Page;
