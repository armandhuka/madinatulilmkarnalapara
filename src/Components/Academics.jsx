import React from "react";

const Academics = () => {
  return (
    <section 
    id="academics"
    className="py-16 px-6 lg:px-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-600 leading-snug">
          Academics
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
          Our school provides high-quality education from early childhood to higher secondary levels, ensuring every student thrives academically.
        </p>
      </div>

      {/* Academic Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* L.K.G & U.K.G */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-2xl font-semibold text-gray-800">L.K.G & U.K.G</h3>
          <p className="text-gray-600 mt-2">
            A playful and creative environment designed to spark curiosity and lay the foundation for learning.
          </p>
        </div>

        {/* Primary Education */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-2xl font-semibold text-gray-800">1st to 5th Grade</h3>
          <p className="text-gray-600 mt-2">
            Engaging young minds with fundamental skills in mathematics, languages, and science through interactive lessons.
          </p>
        </div>

        {/* Middle School */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-2xl font-semibold text-gray-800">6th to 10th Grade</h3>
          <p className="text-gray-600 mt-2">
            Encouraging analytical thinking, problem-solving skills, and in-depth subject knowledge to build academic confidence.
          </p>
        </div>

        {/* Arts Stream */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Arts Stream</h3>
          <p className="text-gray-600 mt-2">
            Ideal for creative learners, offering subjects like History, Sociology, and Political Science to foster critical thinking.
          </p>
        </div>

        {/* Commerce Stream */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Commerce Stream</h3>
          <p className="text-gray-600 mt-2">
            Preparing students for business and finance with Accountancy, Business Studies, and Economics as core subjects.
          </p>
        </div>

        {/* Senior Secondary */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-2xl font-semibold text-gray-800">11th & 12th Grade</h3>
          <p className="text-gray-600 mt-2">
            Advanced education tailored to prepare students for higher studies in their chosen streams of Arts or Commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academics;