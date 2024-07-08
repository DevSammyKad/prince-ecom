import React from "react";
import { Facebook, Instagram, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-white" data-aos="fade-up">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {["About", "Blog", "Team", "Pricing", "Contact", "Terms"].map(
            (item) => (
              <div key={item} className="px-5 py-2">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  {item}
                </a>
              </div>
            )
          )}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {[
            { href: "#", label: "Facebook", Icon: Facebook },
            { href: "#", label: "Instagram", Icon: Instagram },
            { href: "#", label: "Twitter", Icon: Twitter },
            { href: "#", label: "GitHub", Icon: Github },
            { href: "#", label: "Dribbble", Icon: Dribbble },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{label}</span>
              <Icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 SomeCompany, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
