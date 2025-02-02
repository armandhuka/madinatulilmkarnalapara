import React from "react";
import { FaBookOpen, FaChalkboardTeacher, FaPalette, FaBusinessTime, FaSchool } from "react-icons/fa";

const Academics = () => {
  return (
    <section id="academics" className="py-16 px-6 lg:px-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-red-600 leading-snug">Academics</h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
          Our school offers a structured academic path, from foundational learning to specialized subjects in senior secondary levels.
        </p>
      </div>

      {/* Academic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* L.K.G & U.K.G */}
        <div className=" rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <FaBookOpen className="text-red-600 text-4xl mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800">L.K.G & U.K.G</h3>
          <p className="text-gray-600 mt-2">
            A playful and creative environment designed to spark curiosity and lay the foundation for learning.
          </p>
        </div>

        {/* Primary Education (English Medium) */}
        <div className=" rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800">1st to 5th Grade</h3>
          <p className="text-gray-600 mt-2">
            Interactive lessons in **English Medium**, covering fundamental skills in languages, mathematics, and science.
          </p>
        </div>

        {/* Middle School */}
        <div className=" rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <FaSchool className="text-green-600 text-4xl mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800">6th to 10th Grade</h3>
          <p className="text-gray-600 mt-2">
            Encouraging analytical thinking, problem-solving skills, and in-depth subject knowledge for academic excellence.
          </p>
        </div>

        {/* Arts Stream */}
        <div className=" rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <FaPalette className="text-yellow-600 text-4xl mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800">Arts Stream</h3>
          <p className="text-gray-600 mt-2">
            Focuses on creative disciplines, including History, Sociology, and Political Science, to build critical thinking skills.
          </p>
        </div>

        {/* Commerce Stream */}
        <div className=" rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <FaBusinessTime className="text-purple-600 text-4xl mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800">Commerce Stream</h3>
          <p className="text-gray-600 mt-2">
            Covers core subjects like Accountancy, Business Studies, and Economics to prepare students for financial and business fields.
          </p>
        </div>

        {/* Senior Secondary */}
        <div className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <FaSchool className="text-red-600 text-4xl mb-4"/>
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
