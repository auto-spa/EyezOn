"use client";
import React from "react";
import Image from "next/image";

const plan = {
  title: "Cost of Routine",
  price: 100,
  badge: "Cost of Routine",
  features: [
    "Foam Bath/Pre Wash",
    "Contact Wash",
    "Air Blower & Towel Dry",
    "Wheels Deep Cleaned",
    "Gas Cap",
    "Tire Dressing",
    "Spot Free Windows",
    "Interior Blow Out",
    "Deep Vacuum",
    "Doors & Trunk Jambs",
    "Air Freshener",
    "Paint Sealant",
  ],
};

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black to-purple-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-center space-y-8 lg:space-y-0 lg:space-x-16">
        
        {/* Plan Card */}
        <div className="relative bg-white text-gray-900 rounded-lg p-8 shadow-lg overflow-hidden w-full lg:w-1/2 flex flex-col">
          {/* Triangle Shape Design */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rotate-45 translate-x-12 -translate-y-16"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-700 rotate-45 translate-x-20 -translate-y-4"></div>

          <span className="absolute top-6 left-4 bg-purple-300 text-purple-600 text-sm font-semibold px-4 py-1 rounded-full">
            {plan.badge}
          </span>
          <div className="mt-12 text-4xl font-extrabold mb-2">${plan.price}</div>
          <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
          <ul className="space-y-2 mb-6 flex-grow">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex">
          <Image
            src="/images/plans-image.jpg"
            alt="Business Plan"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Plans;
