import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";

const SupportCard = () => {
  return (
    <div data-aos="fade-up">
      <div className="hidden lg:block container mx-auto px-10 pt-12">
        <div className="grid gap-4 py-4 sm:grid-cols-2 md:grid-cols-4">
          <a
            href="#"
            className="group relative block w-full h-40 sm:h-48 lg:h-48 mx-auto"
          >
            <span className="absolute inset-0 border-2 border-dashed border-blue-500"></span>
            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white
            hover:bg-blue-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div className="p-2 sm:p-4 lg:p-4 transition-opacity group-hover:absolute group-hover:opacity-0">
                <FaShippingFast className="h-6 sm:h-8 lg:h-8" size={24} />
                <h2 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Delivery
                </h2>
              </div>
              <div className="absolute p-2 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                <h3 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Free Delivery
                </h3>
                <p className="mt-2 text-xs sm:text-sm">
                  Enjoy free delivery on all orders. We offer fast and reliable
                  shipping services to ensure that your products arrive on time.
                </p>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group relative block w-full h-40 sm:h-48 lg:h-48 mx-auto"
          >
            <span className="absolute inset-0 border-2 border-dashed border-blue-500"></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white hover:bg-blue-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 sm:p-4 lg:p-4 transition-opacity group-hover:absolute group-hover:opacity-0">
                <MdSupportAgent className="h-6 sm:h-8 lg:h-8" size={24} />
                <h2 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Support
                </h2>
              </div>
              <div className="absolute p-2 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                <h3 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Customer Support
                </h3>
                <p className="mt-2 text-xs sm:text-sm">
                  Our dedicated support team is here to assist you. Reach out to
                  us for any queries or concerns, and experience exceptional
                  customer service.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative block w-full h-40 sm:h-48 lg:h-48 mx-auto"
          >
            <span className="absolute inset-0 border-2 border-dashed border-blue-500"></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white hover:bg-blue-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 sm:p-4 lg:p-4 transition-opacity group-hover:absolute group-hover:opacity-0">
                <GiReturnArrow className="h-6 sm:h-8 lg:h-8" size={24} />
                <h2 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Return
                </h2>
              </div>
              <div className="absolute p-2 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                <h3 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Easy Returns
                </h3>
                <p className="mt-2 text-xs sm:text-sm">
                  Enjoy hassle-free returns on all orders. If you are not
                  satisfied with your purchase, we will provide a full refund or
                  exchange within 30 days of purchase.
                </p>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group relative block w-full h-40 sm:h-48 lg:h-48 mx-auto"
          >
            <span className="absolute inset-0 border-2 border-dashed border-blue-500"></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white hover:bg-blue-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 sm:p-4 lg:p-4 transition-opacity group-hover:absolute group-hover:opacity-0">
                <FaRupeeSign className="h-6 sm:h-8 lg:h-8" size={24} />
                <h2 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Payment
                </h2>
              </div>
              <div className="absolute p-2 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                <h3 className="mt-2 text-base font-semibold sm:text-lg lg:text-lg">
                  Secure Payment
                </h3>
                <p className="mt-2 text-xs sm:text-sm">
                  Our secure payment gateway ensures that your personal and
                  financial information is protected. Shop with confidence and
                  peace of mind.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
