import { useState } from "react";

export const ImageGallery = ({ images, alt, onFullscreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="hidden lg:flex flex-col overflow-y-auto space-y-2 max-h-[510px] hide-scroll-bar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-all ${
              index === currentIndex
                ? "border-2 border-indigo-500 rounded-md cursor-pointer"
                : "border border-gray-200 hover:border-indigo-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="flex-1">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out mb-4"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${alt} ${index + 1}`}
                className="w-full h-auto rounded-md shadow-md object-cover aspect-square flex-shrink-0"
                onClick={() => onFullscreen(index)}
              />
            ))}
          </div>
          <div className="lg:hidden absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
