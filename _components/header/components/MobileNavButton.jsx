export const MobileNavButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button onClick={onClick} className="focus:outline-none">
    <div className="flex flex-col items-center">
      <Icon
        size={24}
        className={isActive ? "text-blue-500" : "text-gray-600"}
      />
      <span
        className={`text-xs mt-1 ${
          isActive ? "text-blue-500" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </div>
  </button>
);
