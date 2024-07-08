"use client";
import React, { useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";

function Brands() {
  useEffect(() => {
    let ul = document.querySelector('[x-ref="logos"]');
    ul.insertAdjacentHTML("afterend", ul.outerHTML);
    ul.nextSibling.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="w-full max-w-7xl mx-auto px-2 md:px-48 my-20"
    >
      <header className="text-center pb-10">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Brands</h2>
      </header>
      <div className="text-center">
        {/* Logo Carousel animation */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* First carousel */}
          <ul
            x-ref="logos"
            className="flex items-center justify-center li:mx-4 md:mx-8 img:max-w-none animate-infinite-scroll"
          >
            <li>
              <img
                src="https://www.svgrepo.com/show/315271/whatsapp.svg"
                alt="WhatsApp"
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </li>
            <li className="mx-12">
              <img
                src="https://www.svgrepo.com/show/315263/snapchat.svg"
                alt="Snapchat"
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </li>
            <li>
              <img
                src="https://www.svgrepo.com/show/315283/apple.svg"
                alt="Apple"
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </li>
          </ul>
          {/* Second carousel */}
          <ul
            className="flex items-center justify-center li:mx-4 md:mx-8 img:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <img
                src="https://www.svgrepo.com/show/315282/android.svg"
                alt="Android"
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </li>
            <li className="mx-12">
              <img
                src="https://www.svgrepo.com/show/315289/facebook.svg"
                alt="Facebook"
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </li>
            <li>
              <img
                src="https://www.svgrepo.com/show/315299/instagram.svg"
                alt="Instagram"
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </li>
          </ul>
        </div>
        {/* End: Logo Carousel animation */}
      </div>
    </div>
  );
}

export default Brands;
