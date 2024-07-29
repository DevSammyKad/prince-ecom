export const ColorSelector = ({ colors, selectedColor, onSelectColor }) => (
  <div>
    <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onSelectColor(color)}
          className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
            selectedColor === color ? "ring-2 ring-indigo-500" : ""
          }`}
          style={{ backgroundColor: color.toLowerCase() }}
        />
      ))}
    </div>
  </div>
);
