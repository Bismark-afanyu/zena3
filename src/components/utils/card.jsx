"use client";

import React from "react";

const Card = ({ title, categories, buttonLabel, imageSrc, onButtonClick, imageSize }) => {
  // Default values for image size when not provided
  const defaultImageSize = { width: '100%', height: 'auto' };
  const imageStyles = imageSize ? { width: imageSize.width, height: imageSize.height } : defaultImageSize;

  return (
    <div className="card bg-yellow-20 shadow-md rounded-md overflow-hidden flex flex-col md:flex-row">
      {/* Left Section - Content */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>

        {/* Categories */}
        <ul className="list-disc list-inside text-Teal_blue-50 mb-8">
          {categories.map((category, index) => (
            <li key={index} className="text-xs">
              {category}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="bg-Teal_blue-50 font-bold text-white text-sm px-4 py-2 rounded-full hover:bg-Teal_blue-60 transition-all duration-300 self-start"
        >
          {buttonLabel}
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover"
          style={imageStyles}  // Apply the calculated image styles (either custom or default)
        />
      </div>
    </div>
  );
};

export default Card;
