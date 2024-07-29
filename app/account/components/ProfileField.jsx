export const ProfileField = ({ label, name, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          disabled
          className="flex-1 text-black bg-white border border-gray-900 block w-full rounded-md sm:text-sm border-gray-300 p-2"
          name={name}
          value={value}
        />
      </div>
    </div>
  );
};
