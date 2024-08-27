"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Package,
  Heart,
  Home,
  CreditCard,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { mainNav } from "@/config/nav";
import Header from "@/_components/header";
import { AccountSection } from "./tabs/AccountsSection";
import { OrdersSection } from "./tabs/OrdersSection";
import { WishlistSection } from "./tabs/WishlistSection";
import { AddressesSection } from "./tabs/AddressSection";
import { PaymentSection } from "./tabs/PaymentSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Page() {
  const [activeTab, setActiveTab] = useState("account");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useKindeBrowserClient();
  console.log(user);

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
      <div className="min-h-screen mt-12 md:mt-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Mobile sidebar toggle */}
              <div className="md:hidden p-4 flex justify-between items-center bg-blue-600">
                <h2 className="text-xl font-semibold text-white">
                  {user?.given_name}'s Profile
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="text-white hover:text-blue-200"
                >
                  {isSidebarOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Sidebar */}
              <aside
                className={`w-3/5 md:w-64 m-1  rounded-md bg-blue-600 text-white p-6 
                ${
                  isSidebarOpen
                    ? "fixed inset-0 z-50 transition-all mb-16 duration-300 ease-in-out"
                    : "hidden"
                } 
                md:relative md:block transition-all duration-300 ease-in-out`}
              >
                <div className="mb-8 text-center">
                  <div className="relative inline-block">
                    <img
                      src={user?.picture}
                      alt="Profile Picture"
                      width={80}
                      height={50}
                      className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">
                    {user?.given_name + " " + user?.family_name}
                  </h2>
                  <p className="text-sm text-blue-200 truncate">
                    {user?.email}
                  </p>
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
                  <button
                    className={`flex items-center w-full py-3 px-4 rounded-lg transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white `}
                  >
                    <LogOut className="mr-3 h-5 w-5" />
                    <LogoutLink>Logout</LogoutLink>
                  </button>
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
                  {activeTab === "account" && <AccountSection user={user} />}
                  {activeTab === "orders" && <OrdersSection user={user} />}
                  {activeTab === "wishlist" && <WishlistSection user={user} />}
                  {activeTab === "addresses" && (
                    <AddressesSection user={user} />
                  )}
                  {activeTab === "payment" && <PaymentSection user={user} />}
                </motion.div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
