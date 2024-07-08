import React from "react";

const deals = [
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F9hsZsq3%2Fproduct-cat-7.jpg&w=128&q=75",
    imageAlt: "August Gift",
    name: "August Gift Voucher",
    discount: 50,
    timeLeft: { days: 15, hours: 12, minutes: 20, seconds: 17 },
    couponActive: true,
    couponCode: "KOMAL",
  },
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FQHTxCfc%2Fproduct-cat-3.jpg&w=128&q=75",
    imageAlt: "Summer Gift",
    name: "Summer Gift Voucher",
    discount: 12,
    timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    couponActive: false,
    couponCode: "SUMMER23",
  },
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F58zCBkK%2Fproduct-cat-2.jpg&w=128&q=75",
    imageAlt: "Winter Gift",
    name: "Winter Gift Voucher",
    discount: 15,
    timeLeft: { days: 88, hours: 12, minutes: 20, seconds: 17 },
    couponActive: true,
    couponCode: "WINTER23",
  },
  {
    imageSrc:
      "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FzfTZRSf%2Fproduct-cat-1.jpg&w=128&q=75",
    imageAlt: "January Gift",
    name: "January Gift Voucher",
    discount: 20,
    timeLeft: { days: 15, hours: 22, minutes: 1, seconds: 17 },
    couponActive: true,
    couponCode: "JANUARY23",
  },
];

const DealOfTheDay = () => {
  return (
    <section className="py-12 px-6 bg-gray-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Deal of The Day</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={deal.imageSrc}
                  alt={deal.imageAlt}
                  className="w-20 h-20 object-cover rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {deal.name}
                  </h3>
                  <p className="text-sm text-gray-500">{deal.discount}% Off</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">
                  {deal.timeLeft.days} DAYS {deal.timeLeft.hours} HRS{" "}
                  {deal.timeLeft.minutes} MIN {deal.timeLeft.seconds} SEC
                </div>
                <div
                  className={`text-sm ${
                    deal.couponActive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Coupon {deal.couponActive ? "Active" : "Inactive"}
                </div>
              </div>
              <div className="text-center">
                <button
                  className={`${
                    deal.couponActive
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  } py-2 px-4 rounded-lg border border-dashed border-current`}
                >
                  {deal.couponCode}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
