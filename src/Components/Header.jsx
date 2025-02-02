import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-600 tracking-wide">MIK</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Academics", "Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              className="relative text-lg font-medium text-green-600 hover:text-red-500 transition duration-300 cursor-pointer group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-red-600 text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md transition-all duration-300">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Academics", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold text-green-700 hover:text-red-500 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;