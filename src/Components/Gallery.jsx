import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Sample Image Data (Replace with real images)
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
    id="gallery" 
    className="py-16 text-red-600">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold mb-10">School Gallery</h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-lg font-semibold">View Full</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Full View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl">
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-black p-2 rounded-full hover:bg-red-600 transition"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img src={selectedImage} alt="Full View" className="w-full max-h-screen object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;