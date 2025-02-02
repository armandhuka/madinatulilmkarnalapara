import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 p-8 rounded-lg">
        {/* Left Side - Contact Details */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-red-600">Contact Us</h2>
          <p className="text-lg text-[#262626]">
            Reach out to us for any queries or support. We’re here to help!
          </p>

          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="flex items-center bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <FaPhoneAlt className="text-red-600 text-2xl mr-4" />
              <p className="text-[#262626] text-lg">+91 98765 43210</p>
            </div>

            <div className="flex items-center bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <FaEnvelope className="text-red-600 text-2xl mr-4" />
              <p className="text-[#262626] text-lg">info@schoolname.com</p>
            </div>

            <div className="flex items-center bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <FaMapMarkerAlt className="text-red-600 text-2xl mr-4" />
              <p className="text-[#262626] text-lg">4JH8+XRF, Karnala Para, Ta-, Vadgam, Gujarat</p>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="w-full">
          <iframe
            title="School Location"
            className="w-full h-72 md:h-full rounded-lg shadow-lg"
            src="https://maps.app.goo.gl/GTYcoSETaW5e5umS6https://d2witnme7llgpy.cloudfront.net/lyra011/"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;