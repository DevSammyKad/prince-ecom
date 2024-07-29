import { Home } from "lucide-react";
import { AddressCard } from "../components/AddressCard";
import { AddressForm } from "../components/AddressForm";
import { useState } from "react";

export const AddressesSection = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Shipping",
      name: "Abc",
      street: "Warje Malwadi",
      city: "Pune",
      state: "MH",
      zip: "411058",
      country: "India",
    },
    {
      id: 2,
      type: "Billing",
      name: "Xyz",
      street: "Kothrud",
      city: "Pune",
      state: "MH",
      zip: "411038",
      country: "India",
    },
  ]);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const addAddress = (newAddress) => {
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setIsAddingAddress(false);
  };

  const updateAddress = (updatedAddress) => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === updatedAddress.id ? updatedAddress : addr
      )
    );
    setEditingAddressId(null);
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-600">My Addresses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={() => setEditingAddressId(address.id)}
            onDelete={() => deleteAddress(address.id)}
          />
        ))}
      </div>
      {editingAddressId && (
        <AddressForm
          address={addresses.find((addr) => addr.id === editingAddressId)}
          onSave={updateAddress}
          onCancel={() => setEditingAddressId(null)}
        />
      )}
      {isAddingAddress ? (
        <AddressForm
          onSave={addAddress}
          onCancel={() => setIsAddingAddress(false)}
        />
      ) : (
        <button
          className="mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center"
          onClick={() => setIsAddingAddress(true)}
        >
          <Home className="mr-2 h-4 w-4" />
          Add New Address
        </button>
      )}
    </div>
  );
};
