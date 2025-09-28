import React from 'react';
import { FaHeart, FaBrain, FaEye, FaBaby, FaBone, FaStethoscope, FaPills, FaShieldAlt } from 'react-icons/fa';

const SpecialityMenu = () => {
  const specialties = [
    {
      name: 'Cardiology',
      icon: FaHeart,
      description: 'Heart & cardiovascular care',
      doctors: 12,
      color: 'bg-red-50 hover:bg-red-100 border-red-200',
    },
    {
      name: 'Neurology',
      icon: FaBrain,
      description: 'Brain & nervous system',
      doctors: 8,
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
    },
    {
      name: 'Ophthalmology',
      icon: FaEye,
      description: 'Eye care & vision',
      doctors: 6,
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
    },
    {
      name: 'Pediatrics',
      icon: FaBaby,
      description: 'Children healthcare',
      doctors: 10,
      color: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200',
    },
    {
      name: 'Orthopedics',
      icon: FaBone,
      description: 'Bone & joint care',
      doctors: 9,
      color: 'bg-green-50 hover:bg-green-100 border-green-200',
    },
    {
      name: 'General Medicine',
      icon: FaStethoscope,
      description: 'Primary healthcare',
      doctors: 15,
      color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
    },
    {
      name: 'Pharmacy',
      icon: FaPills,
      description: 'Medication & prescriptions',
      doctors: 5,
      color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
    },
    {
      name: 'Dermatology',
      icon: FaShieldAlt,
      description: 'Skin & hair care',
      doctors: 7,
      color: 'bg-pink-50 hover:bg-pink-100 border-pink-200',
    },
  ];

  return (
    <section id="speciality" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your <span className="text-[#5F6FFF]">Specialist</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book appointments with our expert doctors across various medical specialties.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={index}
                className={`${specialty.color} border-2 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-white rounded-full shadow-md transition-shadow duration-300">
                    <IconComponent className="h-8 w-8 text-[#5F6FFF]" />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {specialty.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3">
                  {specialty.description}
                </p>

                {/* Doctors Count */}
                <p className="text-xs text-[#5F6FFF] font-medium">
                  {specialty.doctors} Doctors Available
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;
