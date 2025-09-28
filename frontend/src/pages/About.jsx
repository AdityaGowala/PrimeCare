import React from 'react';
import { assets } from '../assets/assets';
import { FaClock, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'; // Icons for cards

const About = () => {
  return (
    <div className="px-4 md:px-16">

      {/* About Us Heading */}
      <div className="text-center text-3xl sm:text-4xl pt-10 text-[#707070] font-sans">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* About Us Section */}
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center">
        <img 
          className="w-full md:max-w-[400px] rounded-lg shadow-md" 
          src={assets.about_image} 
          alt="About PrimeCare" 
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm sm:text-base text-gray-600">
          <p>
            Welcome to <b className="text-gray-800">PrimeCare</b>, your trusted partner for managing healthcare efficiently. 
            We make it simple to find the right doctor, book appointments, and stay on top of your health.
          </p>
          <p>
            At PrimeCare, we are committed to leveraging modern healthcare technology to enhance your experience. 
            Whether it’s scheduling your first appointment or managing ongoing care, we’re here to support you every step of the way.
          </p>
          <b className="text-gray-800 text-lg">Our Vision</b>
          <p>
            Our vision at PrimeCare is to create a seamless healthcare experience for every user. 
            We aim to connect patients with trusted healthcare providers, ensuring care is accessible, convenient, and reliable.
          </p>
        </div>
      </div>

      {/* Why Choose Us Heading */}
      <div className="text-center text-2xl sm:text-3xl my-6 font-sans">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      {/* Why Choose Us Cards with Icons */}
      <div className="flex flex-col md:flex-row gap-6 mb-20">

        {/* Efficiency Card */}
        <div className="group border px-8 md:px-12 py-10 sm:py-16 flex flex-col items-center gap-4 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-sm hover:bg-primary">
          <FaClock className="text-5xl text-[#5F6FFF] group-hover:text-white transition-colors duration-300" />
          <b className="text-lg text-[#5F6FFF] group-hover:text-white transition-colors duration-300">EFFICIENCY</b>
          <p className="text-center group-hover:text-white transition-colors duration-300">
            Streamlined appointment scheduling designed to fit your busy lifestyle.
          </p>
        </div>

        {/* Convenience Card */}
        <div className="group border px-8 md:px-12 py-10 sm:py-16 flex flex-col items-center gap-4 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-sm hover:bg-primary">
          <FaMapMarkerAlt className="text-5xl text-[#5F6FFF] group-hover:text-white transition-colors duration-300" />
          <b className="text-lg text-[#5F6FFF] group-hover:text-white transition-colors duration-300">CONVENIENCE</b>
          <p className="text-center group-hover:text-white transition-colors duration-300">
            Access a network of trusted healthcare professionals whenever and wherever you need.
          </p>
        </div>

        {/* Personalization Card */}
        <div className="group border px-8 md:px-12 py-10 sm:py-16 flex flex-col items-center gap-4 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-sm hover:bg-primary">
          <FaHeart className="text-5xl text-[#5F6FFF] group-hover:text-white transition-colors duration-300" />
          <b className="text-lg text-[#5F6FFF] group-hover:text-white transition-colors duration-300">PERSONALIZATION</b>
          <p className="text-center group-hover:text-white transition-colors duration-300">
            Receive tailored recommendations and reminders to help you stay on top of your health journey.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
