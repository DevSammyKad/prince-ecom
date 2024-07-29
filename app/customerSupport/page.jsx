import React from "react";
import Header from "@/_components/header";
import { mainNav } from "@/config/nav";
import { CustomerSupportForm } from "./components/CustomerSupportForm";
import { FAQ } from "./components/FAQ";

const CustomerSupportPage = () => {
  return (
    <>
      <Header navItems={mainNav} />
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <CustomerSupportForm />
          </div>
          <div className="lg:w-1/2">
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupportPage;
