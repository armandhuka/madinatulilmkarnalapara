import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 p-8 rounded-lg">
        {/* Right Side - Map (Moved to top on mobile) */}
        <div className="order-1 md:order-1 w-full">
          <iframe
            title="School Location"
            className="w-full h-72 md:h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5425580122496!2d72.40321907477598!3d23.049385779162407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzU4LjAiTiA3MsKwMjQnMTUuOCJF!5e0!3m2!1sen!2sin!4v1706540987068"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Left Side - Contact Details (Moved to bottom on mobile) */}
        <div className="order-2 md:order-2 space-y-6">
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
      </div>
    </section>
  );
};

export default Contact;