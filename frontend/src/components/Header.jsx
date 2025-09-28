import React from 'react';
import { assets } from '../assets/assets';
import { FaUserMd, FaSmile, FaStethoscope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

  return (
    <div className="relative w-full flex flex-col md:flex-row bg-primary">

      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 md:py-[8vw] px-6 md:px-16 lg:px-20">
        
        {/* Heading */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          Your Health, <br /> Our Priority
        </p>

        {/* Subtitle */}
        <p className="text-white text-base md:text-lg font-light max-w-md">
          Book appointments with top-rated doctors instantly.
          <br className="hidden md:block" /> 
          Quality healthcare is just a click away.
        </p>

        {/* Stats with Icons */}
        <div className="grid grid-cols-3 gap-6 text-center text-white">
          <div className="flex flex-col items-center">
            <FaUserMd className="text-3xl mb-2" />
            <p className="text-2xl md:text-3xl font-bold">500+</p>
            <p className="text-sm md:text-base opacity-90">Doctors</p>
          </div>

          <div className="flex flex-col items-center">
            <FaSmile className="text-3xl mb-2" />
            <p className="text-2xl md:text-3xl font-bold">50k+</p>
            <p className="text-sm md:text-base opacity-90">Happy Patients</p>
          </div>

          <div className="flex flex-col items-center">
            <FaStethoscope className="text-3xl mb-2" />
            <p className="text-2xl md:text-3xl font-bold">25+</p>
            <p className="text-sm md:text-base opacity-90">Specialties</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm hover:scale-105 transition-all duration-300 mt-4"
        >
          Book Appointment 
          <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
        </button>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto"
          src={assets.header_img}
          alt="PrimeCare Doctors"
        />
      </div>
    </div>
  );
};

export default Header;
