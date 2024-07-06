import { Button } from "@/components/ui/button";
import React from "react";

const Banner2 = () => {
  return (
    <div>
      {" "}
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-right ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Tranding T-Shirt
            </h2>

            <div className="mt-4 sm:mt-8">
              <Button className="inline-block rounded-md bg-indigo-600 px-5 text-sm font-medium text-white transition hover:bg-indigo-700 hover:border">
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner2;
