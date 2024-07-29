import { FiChevronDown } from "react-icons/fi";


export const FAQItem = ({ question, answer }) => {
    return (
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span>{question}</span>
            <span className="transition group-open:rotate-180"></span>
            <FiChevronDown size={18} className="justify-items-end" />
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            {answer}
          </p>
        </details>
      </div>
    );
  };