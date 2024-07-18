"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  Package,
  Heart,
  Home,
  CreditCard,
  Edit,
  ShoppingCart,
  Camera,
  Lock,
  Menu,
  Trash,
} from "lucide-react";
import { mainNav } from "@/config/nav";
import Header from "@/_components/header";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tabs = [
    { id: "account", icon: User, label: "Account" },
    { id: "orders", icon: Package, label: "Orders" },
    { id: "wishlist", icon: Heart, label: "Wishlist" },
    { id: "addresses", icon: Home, label: "Addresses" },
    { id: "payment", icon: CreditCard, label: "Payment" },
  ];

  return (
    <>
      <Header isSearch={false} navItems={mainNav} />
      <div className="min-h-screen mt-12 md:mt-24  bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Mobile sidebar toggle */}
              <div className="md:hidden p-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>

              {/* Sidebar */}
              <aside
                className={`w-full md:w-64 bg-blue-600 text-white p-6 ${
                  isSidebarOpen ? "block" : "hidden"
                } md:block`}
              >
                <div className="mb-8 text-center">
                  <div className="relative inline-block">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                      alt="Profile Picture"
                      width={80}
                      height={50}
                      className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    />
                    <button className="absolute bottom-0 right-0 bg-blue-700 text-white rounded-full p-1 shadow-md">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <h2 className="text-xl font-semibold">Prince</h2>
                  <p className="text-sm text-blue-400">prince@ecom.com</p>
                </div>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`flex items-center w-full py-3 px-4 rounded-lg transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-blue-700 text-white"
                          : "text-blue-300 hover:bg-blue-700 hover:text-white"
                      }`}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsSidebarOpen(false);
                      }}
                    >
                      <tab.icon className="mr-3 h-5 w-5" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Main content */}
              <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "account" && <AccountSection />}
                  {activeTab === "orders" && <OrdersSection />}
                  {activeTab === "wishlist" && <WishlistSection />}
                  {activeTab === "addresses" && <AddressesSection />}
                  {activeTab === "payment" && <PaymentSection />}
                </motion.div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AccountSection = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [accountInfo, setAccountInfo] = useState({
    fullName: "Prince",
    email: "prince@ecom.com",
    phoneNumber: "+91 89898 98989",
    dateOfBirth: "08-20-2024",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Here you would typically send the updated info to your backend
    console.log("Saving account info:", accountInfo);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-800">
        Account Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        {Object.entries(accountInfo).map(([key, value]) => (
          <ProfileField
            key={key}
            label={
              key.charAt(0).toUpperCase() +
              key.slice(1).replace(/([A-Z])/g, " $1")
            }
            name={key}
            value={value}
            isEditing={isEditing}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <div className="mt-8 space-y-4">
        {isEditing ? (
          <button
            className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center"
            onClick={handleSave}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center"
            onClick={() => setIsEditing(true)}
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit Account Info
          </button>
        )}
        <button
          className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center"
          onClick={() => setIsChangingPassword(true)}
        >
          <Lock className="mr-2 h-4 w-4" />
          Change Password
        </button>
        {isChangingPassword && (
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <h3 className="text-lg font-semibold">Change Password</h3>
            <input
              type="password"
              placeholder="Current Password"
              className="w-full bg-white p-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full bg-white p-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full bg-white p-2 border rounded-md"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-blue-200 rounded-md hover:bg-blue-300 transition-colors duration-200"
                onClick={() => setIsChangingPassword(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const OrdersSection = () => {
  const orders = [
    { id: "234568", date: "2024-06-15", status: "Delivered", total: "₹120.00" },
    { id: "854796", date: "2024-06-10", status: "Shipped", total: "₹105.00" },
    {
      id: "658947",
      date: "2024-06-05",
      status: "Processing",
      total: "₹200.00",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-800">Recent Orders</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const WishlistSection = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "1129.99",
      image: "/headphones.jpg",
    },
    { id: 2, name: "Smartwatch", price: "1999.99", image: "/smartwatch.jpg" },
    {
      id: 3,
      name: "Laptop Backpack",
      price: "1559.99",
      image: "/backpack.jpg",
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

const AddressesSection = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Shipping",
      name: "Abc",
      street: "Warje Malwadi",
      city: "Pune",
      state: "MH",
      zip: "411058",
      country: "India",
    },
    {
      id: 2,
      type: "Billing",
      name: "Xyz",
      street: "Kothrud",
      city: "Pune",
      state: "MH",
      zip: "411038",
      country: "India",
    },
  ]);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const addAddress = (newAddress) => {
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setIsAddingAddress(false);
  };

  const updateAddress = (updatedAddress) => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === updatedAddress.id ? updatedAddress : addr
      )
    );
    setEditingAddressId(null);
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-600">My Addresses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={() => setEditingAddressId(address.id)}
            onDelete={() => deleteAddress(address.id)}
          />
        ))}
      </div>
      {editingAddressId && (
        <AddressForm
          address={addresses.find((addr) => addr.id === editingAddressId)}
          onSave={updateAddress}
          onCancel={() => setEditingAddressId(null)}
        />
      )}
      {isAddingAddress ? (
        <AddressForm
          onSave={addAddress}
          onCancel={() => setIsAddingAddress(false)}
        />
      ) : (
        <button
          className="mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center"
          onClick={() => setIsAddingAddress(true)}
        >
          <Home className="mr-2 h-4 w-4" />
          Add New Address
        </button>
      )}
    </div>
  );
};

const AddressCard = ({ address, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="font-semibold text-lg mb-2">{address.type} Address</h3>
    <p>{address.name}</p>
    <p>{address.street}</p>
    <p>
      {address.city}, {address.state} {address.zip}
    </p>
    <p>{address.country}</p>
    <div className="mt-4 flex space-x-2">
      <button
        className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center"
        onClick={onEdit}
      >
        <Edit className="mr-1 h-4 w-4" />
        Edit
      </button>
      <button
        className="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center"
        onClick={onDelete}
      >
        <Trash className="mr-1 h-4 w-4" />
        Delete
      </button>
    </div>
  </div>
);

const AddressForm = ({ address, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    address || {
      type: "Shipping",
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-semibold text-lg mb-4">
        {address ? "Edit" : "Add"} Address
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 p-2 bg-white border border-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="Shipping">Shipping</option>
            <option value="Billing">Billing</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block p-2 bg-white border border-gray-900 w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street
          </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="mt-1 p-2 bg-white border border-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block p-2 bg-white border border-gray-900 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block p-2 bg-white border border-gray-900 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ZIP Code
          </label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-white border border-gray-900 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-white border border-gray-900 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

const PaymentSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Payment Methods</h2>
      <div className="space-y-4">
        <PaymentCard type="Visa" last4="4242" />
        <PaymentCard type="Mastercard" last4="5555" />
      </div>
      <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md flex items-center">
        <CreditCard className="mr-2 h-4 w-4" />
        Add New Payment Method
      </button>
    </div>
  );
};

const PaymentCard = ({ type, last4 }) => (
  <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
    <div>
      <p className="font-semibold">
        {type} ending in {last4}
      </p>
      <p className="text-sm text-gray-500">Expires 12/2025</p>
    </div>
    <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
      <Edit className="mr-1 h-4 w-4" />
      Edit
    </button>
  </div>
);

const ProfileField = ({ label, name, value, isEditing, onChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="flex-1 text-black bg-white border border-gray-900 block w-full rounded-md sm:text-sm border-gray-300 p-2"
          readOnly={!isEditing}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
