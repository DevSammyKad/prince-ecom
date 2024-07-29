import { FaMinus, FaPlus } from "react-icons/fa";

export const QuantitySelector = ({ quantity, onQuantityChange }) => (
  <div className="flex items-center border rounded-md">
    <button
      onClick={() => onQuantityChange(-1)}
      className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
    >
      <FaMinus />
    </button>
    <input
      type="number"
      min="1"
      value={quantity}
      onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
      className="w-12 text-center bg-white border-none focus:outline-none"
    />
    <button
      onClick={() => onQuantityChange(1)}
      className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
    >
      <FaPlus />
    </button>
  </div>
);
