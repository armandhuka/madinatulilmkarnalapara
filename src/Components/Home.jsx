import React, { useState } from "react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg", // Center image
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg", // Left image
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg", // Right image
  ];

  return (
    <section 
    id="home"
    className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 py-10 gap-8">
      {/* Left Side - Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-[#262626]">
          Welcome to <br /> Madinatul Ilm <p className="text-2xl">KarnalaPara</p>
        </h1>
        <p className="text-base lg:text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
          A journey of excellence and education, nurturing young minds from LKG
          to 12th standard. Arts and Commerce streams are available for 11th and
          12th standards. Building bright futures every day!
        </p>
        <a 
            href="#about"
         className="bg-[#262626] text-white px-6 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:px-10">
          Learn More
        </a>
      </div>

      {/* Right Side - Images */}
      <div className="w-full lg:w-1/2 flex justify-center items-center gap-2 lg:gap-4 relative">
        <div className="flex items-end gap-2 lg:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out overflow-hidden rounded-full shadow-lg cursor-pointer 
                ${
                  activeIndex === index
                    ? "w-36 h-52 sm:w-48 sm:h-64 lg:w-64 lg:h-96 z-10" // Expanded size
                    : hoverIndex === index
                    ? "w-32 h-48 sm:w-40 sm:h-56 lg:w-56 lg:h-80 transform scale-105 z-10" // Hover effect
                    : "w-24 h-40 sm:w-32 sm:h-48 lg:w-36 lg:h-72 opacity-70" // Default size
                }
                ${index === 0 ? "lg:-translate-y-4" : ""}`} // Center image moves up
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            >
              <img
                src={image}
                alt={`School Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;