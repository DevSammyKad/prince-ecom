import { Edit, Trash } from "lucide-react";

export const AddressCard = ({ address, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="font-semibold text-lg mb-2">{address.type} Address</h3>
    <p>{address.name}</p>
    <p>{address.street}</p>
    <p>
      {address.city}, {address.state} {address.zip}
    </p>
    <p>{address.country}</p>
    <div className="mt-4 flex space-x-2">
      <button
        className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center"
        onClick={onEdit}
      >
        <Edit className="mr-1 h-4 w-4" />
        Edit
      </button>
      <button
        className="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center"
        onClick={onDelete}
      >
        <Trash className="mr-1 h-4 w-4" />
        Delete
      </button>
    </div>
  </div>
);
