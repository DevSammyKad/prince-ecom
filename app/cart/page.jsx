import React from "react";

const Page = () => {
  return (
    <div>
      <div className="relative lg:p-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-md:px-2">
            <div className="img">
              <div className="img-box h-full max-lg:mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Mobile Phone image"
                  className="max-w-full h-auto mx-auto"
                />
              </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="w-full max-w-xl">
                <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                  Electronics&nbsp; /&nbsp; Mobile Phones
                </p>
                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                  Example Mobile Phone Model
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                    ₹99999
                  </h6>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <svg
                        key={index}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </svg>
                    ))}
                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                      1245 reviews
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-base font-normal mb-5">
                  Explore the features and capabilities of our latest example
                  mobile phone model. Stay connected with advanced technology
                  and sleek design that fits your lifestyle.
                  <a href="#" className="text-indigo-600">
                    More...
                  </a>
                </p>
                <ul className="grid gap-y-4 mb-8">
                  {[
                    "5G Connectivity",
                    "Quad Camera Setup",
                    "High-resolution Display",
                    "Multiple Color Options",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="26" height="26" rx="13" fill="#4F46E5" />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                  <div className="flex sm:items-center sm:justify-center w-full">
                    <button className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                      <svg
                        className="stroke-gray-900 group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                      placeholder="1"
                    />
                    <button className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                      <svg
                        className="stroke-gray-900 group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 5.5V16.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5"
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5"
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.5 11H16.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.5 11H16.5"
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.5 11H16.5"
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-gray-900 py-4 px-6 w-full font-semibold text-lg leading-8 text-white border border-gray-400 rounded-full transition-all duration-300 hover:bg-indigo-600 hover:border-indigo-600">
                    Add To Cart
                  </button>
                </div>
                <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                  Specifications
                </p>
                <div className="flex justify-between items-center pb-8 border-b border-gray-100">
                  <div className="flex-1 pr-5">
                    <h6 className="text-gray-900 font-semibold text-lg leading-8">
                      Specifications
                    </h6>
                  </div>
                  <button className="text-lg leading-7 font-semibold text-indigo-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
