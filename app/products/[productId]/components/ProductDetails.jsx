import { FaCheck, FaChevronDown } from "react-icons/fa";

export const ProductDetails = ({
  product,
  expandedSection,
  onToggleSection,
}) => (
  <div className="space-y-4 pt-6">
    {["Features", "Specifications"].map((section) => (
      <div key={section} className="border-t pt-4">
        <button
          onClick={() => onToggleSection(section)}
          className="flex justify-between items-center w-full text-left"
        >
          <h3 className="text-sm font-medium text-gray-900">{section}</h3>
          <FaChevronDown
            className={`w-4 h-4 transform transition-transform duration-200 ${
              expandedSection === section ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSection === section && (
          <div className="mt-2 space-y-2 text-sm">
            {section === "Features" ? (
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
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
                      <li key={key} className="flex items-center space-x-2">
                        <span className="font-medium">
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
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
);
