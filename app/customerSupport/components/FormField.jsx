export const FormField = ({ label, type, required, options }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "select" ? (
        <select
          className="mt-1 block w-full rounded-md bg-white py-1 border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:select..."
          required={required}
        >
          <option>Select...</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="mt-1 block w-full rounded-md px-2 py-1 bg-white border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required={required}
        />
      )}
    </div>
  );
};
