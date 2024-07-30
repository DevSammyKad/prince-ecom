import { CreditCard } from "lucide-react";
import { PaymentCard } from "../components/PaymentCard";

export const PaymentSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Payment Methods</h2>
      <div className="space-y-4">
        <PaymentCard type="DebitCard" last4="1234" />
      </div>
      <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md flex items-center">
        <CreditCard className="mr-2 h-4 w-4" />
        Add New Payment Method
      </button>
    </div>
  );
};
