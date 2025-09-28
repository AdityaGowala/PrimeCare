import React from 'react';
import { FaSearch, FaCalendarAlt, FaCreditCard, FaUserCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {

  const navigate = useNavigate();


  const steps = [
    {
      step: 1,
      title: 'Find a Doctor',
      description:
        'Search by specialty, location, or doctor name to find the right healthcare provider for you.',
      icon: FaSearch,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      step: 2,
      title: 'Book Appointment',
      description:
        'Choose your preferred date and time from available slots and book instantly.',
      icon: FaCalendarAlt,
      color: 'bg-green-100 text-green-600',
    },
    {
      step: 3,
      title: 'Make Payment',
      description:
        'Secure payment processing with multiple payment options for your convenience.',
      icon: FaCreditCard,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      step: 4,
      title: 'Meet Your Doctor',
      description:
        'Visit the clinic or join online consultation at your scheduled time.',
      icon: FaUserCheck,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-[#5F6FFF]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your appointment in just 4 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-0.5 bg-[#5F6FFF] opacity-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center group transform transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white border-4 border-[#5F6FFF] border-opacity-40 rounded-full text-xl font-bold text-[#5F6FFF] shadow-sm group-hover:border-opacity-70 transition-all duration-300">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-14 h-14 ${step.color} rounded-full shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <button className="bg-[#5F6FFF] hover:bg-[#4F5FEF] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
           onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
          >
            Start Booking Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
