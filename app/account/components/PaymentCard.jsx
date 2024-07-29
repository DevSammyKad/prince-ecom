import { Edit } from "lucide-react";

export const PaymentCard = ({ type, last4 }) => (
  <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
    <div>
      <p className="font-semibold">
        {type} ending in {last4}
      </p>
      <p className="text-sm text-gray-500">Expires 12/2025</p>
    </div>
    <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
      <Edit className="mr-1 h-4 w-4" />
      Edit
    </button>
  </div>
);
