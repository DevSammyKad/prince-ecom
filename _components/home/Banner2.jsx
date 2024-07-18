import { Button } from "@/components/ui/button";
import React from "react";

const Banner2 = () => {
  return (
    <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 ease-linear animate-slow-zoom"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/thumbnails/004/707/502/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight animate-fade-in-up">
            Sale is Live Now!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-300">
            Discover amazing deals on our latest collection.
          </p>
          <Button className="inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6  text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-600">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
