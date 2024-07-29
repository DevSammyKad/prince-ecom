export const SizeSelector = ({ sizes, selectedSize, onSelectSize }) => (
  <div>
    <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelectSize(size)}
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
);
