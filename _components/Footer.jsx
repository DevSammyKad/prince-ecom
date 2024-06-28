"use client";
import React from "react";
import {
  CiMail,
  CiInstagram,
  CiFacebook,
  CiYoutube,
  CiLocationOn,
} from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="justify-items-center bg-white text-black text-xl text-center">
            <h1>
              <strong>OVER MILLIONS OF CUSTOMERS</strong>
            </h1>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">CONTACT US</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    {" "}
                    +911231231230{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    Working Days <br />
                    Monday - Saturday
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    Working Hours <br />
                    10:00AM - 6:00PM
                  </a>
                </li>
                <li className="flex justify-center sm:justify-start">
                  <a
                    className="flex items-center space-x-2 transition hover:text-gray-400"
                    href="#"
                  >
                    <CiMail className="text-xl" />
                    <span>support@abc.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">QUICK LINKS</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    Influncer Collaboration
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    {" "}
                    Wholesale Inquiry{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    {" "}
                    Return / Exchange{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">OCCASIONS</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    {" "}
                    Birthday Gifts{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    Anniversary Gifts
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    {" "}
                    Wedding Gifts{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-400" href="#">
                    {" "}
                    House warming Gifts{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">VISIT US</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex justify-center sm:justify-start">
                  <a
                    className="flex items-center space-x-2 transition hover:text-gray-400"
                    href="#"
                  >
                    <CiLocationOn className="text-xl" />
                    <span>ABC Road, Pune, Maharastra 422006</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <ul className="flex justify-center gap-6 sm:justify-end">
              <li>
                <a href="#" className="transition hover:text-gray-400">
                  <CiInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-400">
                  <CiFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-400">
                  <CiYoutube size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-400">
                  <LiaTelegramPlane size={24} />
                </a>
              </li>
            </ul>

            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="mt-4 text-center text-sm text-gray-400 sm:mt-0 sm:text-right">
                Copyright &copy; 2022 E-COM | All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
