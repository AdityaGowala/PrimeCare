import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      location: "San Francisco, CA",
      rating: 5,
      text: "Amazing experience! Dr. Johnson was incredibly thorough and caring. The online booking system made everything so convenient. Highly recommend PrimeCare to anyone looking for quality medical care.",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      treatment: "Cardiology Consultation",
    },
    {
      id: 2,
      name: "Robert Chen",
      location: "New York, NY",
      rating: 5,
      text: "The pediatric care my daughter received was exceptional. Dr. Rodriguez was patient, kind, and made my daughter feel comfortable throughout the visit. The facility is clean and modern.",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      treatment: "Pediatric Care",
    },
    {
      id: 3,
      name: "Amanda Thompson",
      location: "Austin, TX",
      rating: 5,
      text: "I was able to book an appointment the same day I needed one. The staff was professional and the doctor was knowledgeable. The entire process from booking to treatment was seamless.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      treatment: "General Medicine",
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Chicago, IL",
      rating: 5,
      text: "After my sports injury, Dr. Wilson provided excellent orthopedic care. The recovery plan was clear and effective. I'm back to my activities faster than expected. Great service!",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      treatment: "Orthopedic Surgery",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#5F6FFF]">Patients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from patients who trust us with their healthcare
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#5F6FFF]/10 to-[#5F6FFF]/5 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <FaQuoteLeft className="text-[#5F6FFF] text-4xl mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                "{currentTestimonialData.text}"
              </p>
            </div>

            {/* Profile */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <img
                src={currentTestimonialData.image}
                alt={currentTestimonialData.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-900">
                  {currentTestimonialData.name}
                </h4>
                <p className="text-gray-600">{currentTestimonialData.location}</p>
                <p className="text-[#5F6FFF] font-medium text-sm">
                  {currentTestimonialData.treatment}
                </p>

                {/* Star Ratings */}
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentTestimonialData.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition"
              >
                <FaChevronLeft className="text-gray-600 text-lg" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-[#5F6FFF]"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition"
              >
                <FaChevronRight className="text-gray-600 text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#5F6FFF]">5,000+</div>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">50+</div>
            <p className="text-gray-600">Expert Doctors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
