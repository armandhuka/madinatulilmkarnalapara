import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-red-600 leading-snug">
          Our Legacy
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          A rich history of nurturing excellence and building future leaders.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Image Gallery */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg"
              alt="School Building"
              className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-medium">
                Our Beautiful Campus
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg"
              alt="Interactive Classroom"
              className="rounded-xl shadow-md transform hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-medium">
                Interactive Classrooms
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg"
              alt="Sports Facilities"
              className="rounded-xl shadow-md transform hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-medium">
                World-Class Sports Facilities
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-gray-800">
            Who We Are
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our school was founded in <strong className="text-red-600">[Year]</strong> by 
            <strong className="text-red-600"> [Founder's Name]</strong>. It began with the vision of creating an 
            educational environment that fosters creativity, values, and excellence.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over the years, we have grown into a vibrant community of learners 
            and educators, dedicated to shaping the future of our students by 
            nurturing their unique talents.
          </p>
          <a
            href="#academics"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-700 transition"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://via.placeholder.com/1600x900"
          alt="School Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
    </section>
  );
};

export default About;