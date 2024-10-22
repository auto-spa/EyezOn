"use client";
import { useState } from "react";

const categories = ["All", "AutoSpa", "Interior",];

const images = [
  { src: "/images/M3CS-interior-819x1024-1.jpg", category: "Interior" },
  { src: "/images/bmw-interior-black-819x1024-1.jpg", category: "Interior" },
  { src: "/images/SRT-interior-1-823x1024-1.jpg", category: "Interior" },
  { src: "/images/R8-interior-1-1018x1024-1.jpg", category: "Interior" },
  { src: "/images/Ford-Raptor-interior-1022x1024-1.png", category: "Interior" },
  { src: "/images/dj-escalade-interior-1-1024x1024-1.png", category: "Interior" },
  { src: "/images/s51.png", category: "AutoSpa" },
  { src: "/images/s52.png", category: "AutoSpa" },
  { src: "/images/s53.png", category: "AutoSpa" },
  { src: "/images/s54.jpg", category: "AutoSpa" },
  { src: "/images/s55.jpg", category: "AutoSpa" },
  { src: "/images/s56.png", category: "AutoSpa" },
  { src: "/images/s57.jpg", category: "AutoSpa" },
  { src: "/images/s58.jpg", category: "AutoSpa" },
  { src: "/images/s59.jpg", category: "AutoSpa" },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-black border border-white hover:border-purple-900 bg-white 
              focus:ring-4 focus:outline-none focus:ring-gray-300 
              rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 
              ${selectedCategory === category ? "bg-purple-950 text-black" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
