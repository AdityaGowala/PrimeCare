import React from 'react';
import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-50">

      {/* Heading */}
      <div className="text-center text-4xl sm:text-5xl font-bold text-gray-700 mb-12">
        CONTACT <span className="text-[#5F6FFF]">US</span>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Left Image */}
        <img 
          src={assets.contact_image} 
          alt="Contact PrimeCare" 
          className="w-full md:w-1/2 object-cover"
        />

        {/* Right Info */}
        <div className="w-full md:w-1/2 p-10 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-[#5F6FFF]">Get in Touch</h2>
          <p className="text-gray-600 leading-7">
            We’d love to hear from you! Reach out for inquiries, appointments, or career opportunities.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4 text-gray-600">
              <FaMapMarkerAlt className="text-[#5F6FFF] text-xl" />
              <span>54709 Willms Station, Suite 350, Washington, USA</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <FaPhoneAlt className="text-[#5F6FFF] text-xl" />
              <span>(415) 555-0132</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <FaEnvelope className="text-[#5F6FFF] text-xl" />
              <span>greatstackdev@gmail.com</span>
            </div>
          </div>

          {/* Careers Button */}
          <button className="mt-6 w-max px-8 py-3 rounded-lg border border-[#5F6FFF] text-[#5F6FFF] font-medium hover:bg-[#5F6FFF] hover:text-white transition-all duration-300">
            Explore Careers
          </button>
        </div>

      </div>

    </div>
  );
};

export default Contact;
