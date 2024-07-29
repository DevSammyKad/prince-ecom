import React from "react";
import { mainNav } from "@/config/nav";
import Header from "../header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Header navItems={mainNav} isSearch={false} />
      <div className="bg-gradient-to-br mt-12 md:mt-24 from-indigo-50 to-purple-100 min-h-screen">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-indigo-800">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
