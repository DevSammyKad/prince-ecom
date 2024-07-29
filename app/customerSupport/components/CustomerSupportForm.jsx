import { formFields } from "@/config/dummyData";
import { FormField } from "./FormField";

export const CustomerSupportForm = () => {
  return (
    <div className="max-w-screen-sm rounded-md border shadow-lg mx-auto p-5 mt-12 md:mt-20 bg-white">
      <h2 className="text-xl md:text-2xl text-center font-bold mb-5">
        Customer Support Form
      </h2>
      <form>
        <div className="grid grid-cols-1 gap-5">
          {formFields.map((field, index) => (
            <FormField key={index} {...field} />
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
