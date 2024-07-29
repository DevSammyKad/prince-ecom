"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { mobileNavItems } from "@/config/nav";

// Custom hooks
const useScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const tabMap = {
      "/": "home",
      "/search": "search",
      "/products": "products",
      "/cart": "cart",
      "/account": "account",
    };
    setActiveTab(tabMap[pathname] || "home");
  }, [pathname]);

  return [activeTab, setActiveTab];
};

// Component for logo
const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <img
      src="/Bajaj-Logo.png"
      alt="logo"
      className="h-10 w-14 md:h-10 md:w-16"
    />
  </Link>
);

// SearchBar component
const SearchBar = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleKeyPress,
  isMobile,
  closeSearch,
}) => (
  <div
    className={`${
      isMobile
        ? "fixed top-0 left-0 right-0 bg-white shadow-lg z-50 p-2"
        : "hidden md:flex items-center space-x-4 w-full max-w-lg"
    }`}
  >
    <div className="relative w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border-2 border-gray-300 focus:border-blue-500 text-black bg-gray-100 rounded-full py-2 pl-8 pr-12 transition-all duration-100 focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
        onClick={handleSearch}
      >
        <CiSearch size={24} />
      </button>
      {isMobile && (
        <button
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
          onClick={closeSearch}
        >
          <IoClose size={20} />
        </button>
      )}
    </div>
  </div>
);

// MobileNavButton component
const MobileNavButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button onClick={onClick} className="focus:outline-none">
    <div className="flex flex-col items-center">
      <Icon
        size={24}
        className={isActive ? "text-blue-500" : "text-gray-600"}
      />
      <span
        className={`text-xs mt-1 ${
          isActive ? "text-blue-500" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </div>
  </button>
);

// Main Header component
const Header = ({ navItems, isSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const router = useRouter();
  const isScrolled = useScrollEffect();
  const [activeTab, setActiveTab] = useActiveTab();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
      setShowMobileSearch(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "search") {
      setShowMobileSearch(true);
    } else {
      setShowMobileSearch(false);
      router.push(tab === "home" ? "/" : `/${tab}`);
    }
  };

  useEffect(() => {
    if (showMobileSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileSearch]);

  return (
    <div className="font-sans">
      <header
        className={`bg-white text-gray-800 shadow-lg fixed top-0 w-full z-50 transition-all duration-300 p-2`}
      >
        <div className="container mx-auto flex justify-center md:justify-between items-center px-2">
          <Logo />
          {isSearch && (
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              handleKeyPress={handleKeyPress}
              isMobile={false}
            />
          )}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                  {item.icon}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around items-center py-2">
          {mobileNavItems.map((item) => (
            <MobileNavButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              onClick={() => handleTabClick(item.id)}
            />
          ))}

          <MobileNavButton
            icon={FaUser}
            label="Sign In"
            isActive={activeTab === "account"}
            onClick={() => router.push("/sign-in")}
          />
        </div>
      </nav>

      {/* Mobile search bar */}
      {showMobileSearch && (
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          isMobile={true}
          closeSearch={() => setShowMobileSearch(false)}
        />
      )}
    </div>
  );
};

export default Header;
