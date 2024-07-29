import { faqData } from "@/config/dummyData";

const { FAQItem } = require("./FAQItem");

export const FAQ = () => {
  return (
    <div className="max-w-screen-sm mx-auto mt-16 md:mt-20 p-5 bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-5">
        Frequently Asked Questions
      </h2>
      <div className="grid divide-y divide-neutral-200">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};
