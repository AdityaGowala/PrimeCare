import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        <section className="py-16 bg-gray-50">
            {/* Header */}
            <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Meet Our <span className="text-[#5F6FFF]">Top Doctors</span>
                </h1>
                <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                    Discover top-rated specialists and schedule your consultation in just a few clicks.
                </p>
            </div>

            {/* Doctors Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctors.slice(0, 4).map((doc) => (
                    <div
                        key={doc._id}
                        onClick={() => { navigate(`/appointment/${doc._id}`); scrollTo(0, 0); }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                        {/* Doctor Image */}
                        <div className="relative">
                            <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-full h-56 object-cover rounded-t-2xl"
                            />
                            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${doc.available ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                                {doc.available ? 'Available' : 'Not Available'}
                            </div>
                        </div>

                        {/* Doctor Info */}
                        <div className="p-5 flex flex-col gap-2">
                            <p className="text-lg font-semibold text-gray-900">{doc.name}</p>
                            <p className="text-sm text-[#5C5C5C]">{doc.speciality}</p>

                            {/* Experience & Location */}
                            <div className="flex flex-col gap-1 mt-2 text-gray-600 text-sm">
                                <div className="flex items-center gap-1">
                                    <FaAward className="text-[#5F6FFF]" /> {doc.experience}
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-[#5F6FFF]" /> {doc.address?.line1}, {doc.address?.line2}
                                </div>
                            </div>

                            {/* About */}
                            <p className="text-sm text-gray-700 mt-2">{doc.about}</p>

                            {/* Fee & Book */}
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-sm font-bold text-gray-900">Fee: ₹{doc.fees}</span>
                                <button className="bg-[#5F6FFF] hover:bg-[#4F5FEF] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-all duration-200">
                                    <FaCalendarAlt className="h-4 w-4" /> Book
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <div className="text-center mt-12">
                <button
                    onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
                    className="bg-[#EAEFFF] hover:bg-[#D0DBFF] text-gray-700 px-10 py-3 rounded-full font-medium transition-colors duration-200"
                >
                    View All Doctors
                </button>
            </div>
        </section>
    );
};

export default TopDoctors;
