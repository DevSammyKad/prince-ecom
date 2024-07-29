"use client";
import { Minus, Plus, X } from "lucide-react";
import CheckoutStatus from "../../_components/shop/CheckoutStatus";
import Layout from "@/_components/shop/Layout";
import { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://readymadeui.com/images/laptop2.webp",
      title: "HP ProBook 455 (15.6) 39.6 cm G9 Business Laptop",
      specs: [
        "AMD Ryzen™ 5 processor",
        "FreeDOS",
        "16 GB DDR4 RAM",
        "512 GB PCIe® NVMe™ SSD Hard Drive",
      ],
      price: "49990.00",
    },
    {
      id: 2,
      image: "https://readymadeui.com/images/laptop4.webp",
      title: "ThinkPad E16 40.64cms - 13th Gen Intel i5",
      specs: [
        "AMD Ryzen™ 5 processor",
        "FreeDOS",
        "16 GB DDR4 RAM",
        "512 GB PCIe® NVMe™ SSD Hard Drive",
      ],
      price: "39990.00",
    },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Layout title="Shopping Cart">
      <CheckoutStatus step="cart" />

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              specs={item.specs}
              price={item.price}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>

        <OrderSummary cartItems={cartItems} />
      </div>
    </Layout>
  );
};

const CartItem = ({ id, image, title, specs, price, onRemove }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="relative bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <img
            src={image}
            className="w-full h-48 sm:h-full object-contain rounded-lg"
            alt={title}
          />
        </div>

        <div className="w-full sm:w-2/3 lg:w-3/4 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 leading-tight">
            {title}
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            {specs.map((spec, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {spec}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <h4 className="text-sm font-bold text-gray-800">Qty:</h4>
              <QuantityButton
                icon={<Minus className="w-3 h-3 text-white" />}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              />
              <span className="font-bold text-lg leading-[16px] w-8 text-center">
                {quantity}
              </span>
              <QuantityButton
                icon={<Plus className="w-3 h-3 text-white" />}
                onClick={() => setQuantity(quantity + 1)}
              />
            </div>

            <div className="flex items-center">
              <h4 className="text-2xl font-bold text-gray-800">
                ₹{(parseFloat(price) * quantity).toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <X className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

const QuantityButton = ({ icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 transition-colors outline-none rounded-full"
  >
    {icon}
  </button>
);

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  const shipping = 4.0;
  const tax = 4.0;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg sticky top-4 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>

      <ul className="text-gray-600 text-base space-y-4">
        <SummaryItem label="Subtotal" value={`₹${subtotal.toFixed(2)}`} />
        <SummaryItem label="Shipping" value={`₹${shipping.toFixed(2)}`} />
        <SummaryItem label="Tax" value={`₹${tax.toFixed(2)}`} />
        <SummaryItem label="Total" value={`₹${total.toFixed(2)}`} isBold />
      </ul>
      <div>
        <button
          onClick={() => {
            window.location.href = "/checkout";
          }}
          type="button"
          className=" mt-8 px-6 py-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          type="button"
          className="mt-4 px-6 py-3 w-full bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-full text-md font-semibold transition-all duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};

const SummaryItem = ({ label, value, isBold = false }) => (
  <li
    className={`flex justify-between ${
      isBold ? "font-bold text-gray-800 text-lg" : ""
    }`}
  >
    <span>{label}</span>
    <span>{value}</span>
  </li>
);

export default ShoppingCart;
