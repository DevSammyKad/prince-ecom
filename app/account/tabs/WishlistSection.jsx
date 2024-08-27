import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export const WishlistSection = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "1129.99",
      image: "/headphones.jpg",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 font-medium mt-1">₹{item.price}</p>
              <button className="mt-2 w-full bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
