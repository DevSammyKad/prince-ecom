import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export const SearchBar = ({
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
