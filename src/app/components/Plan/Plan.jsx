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
const plans = [
  {
    id: 1,
    title: "Preservation of Vehicle Appearance",
    description:
      "Regular detailing helps preserve your vehicle’s exterior and interior appearance. Professional detailers use specialized products and techniques to protect the paint, prevent oxidation, and maintain the shine of your car. This can significantly extend the life of your vehicle’s aesthetic appeal.",
  },
  {
    id: 2,
    title: "Protection Against Environmental Damage",
    description:
      "Environmental factors such as UV rays, bird droppings, tree sap, and road salts can damage your vehicle’s paint over time. Routine detailing involves protective measures like waxing and sealant application, creating a barrier against these elements and reducing the risk of long-term damage.",
  },
  {
    id: 3,
    title: "Interior Comfort and Health",
    description:
      "Interior detailing involves thorough cleaning of the upholstery, carpets, and other surfaces. This not only enhances the comfort of your driving experience but also removes allergens, dust, and bacteria that can accumulate inside the vehicle, promoting a healthier environment for you and your passengers.",
  },
  {
    id: 4,
    title: "Preservation of Resale Value",
    description:
      "A well-maintained vehicle is likely to retain a higher resale value. Potential buyers are often willing to pay more for a car that has been consistently detailed and well-cared-for. Regular maintenance can help you maximize your investment by ensuring that your vehicle maintains its market appeal.",
  },
  {
    id: 5,
    title: "Prevention of Wear and Tear",
    description:
      "Detailing involves cleaning and protecting various components of your vehicle, including the engine bay, wheels, and undercarriage. By addressing these areas regularly, you can prevent corrosion, rust, and other forms of wear and tear that could lead to costly repairs down the line.",
  },
  {
    id: 6,
    title: "Timely Identification of Issues",
    description:
      "During the detailing process, professionals often inspect various parts of your vehicle. This allows them to identify potential issues early on, such as paint chips, scratches, or minor mechanical problems. Addressing these concerns promptly can prevent them from escalating into more significant and expensive issues.",
  },
  {
    id: 7,
    title: "Customization Options",
    description:
      "Auto detailers often offer customization services, allowing you to tailor the detailing process to your specific preferences. Whether you’re interested in ceramic coatings, paint correction, or specialty services, a routine maintenance program provides an opportunity to personalize the care your vehicle receives.",
  },
  {
    id: 8,
    title: "Time and Effort Savings",
    description:
      "Consistent maintenance reduces the need for intensive cleaning and restoration efforts in the future. By addressing small issues regularly, you can save time and effort compared to dealing with larger problems that may arise due to neglect.",
  },
];
const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black to-purple-900 text-white py-16 px-6">
      <div className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-yellow-400 uppercase text-sm font-semibold tracking-wide">
          Our Plans
        </h2>
        <h1 className="mt-2 text-4xl font-extrabold uppercase">
          Join a Plan for Routine Care
        </h1>
        <p className="mt-4 text-lg">
          A routine maintenance program with us can offer numerous benefits,
          ensuring that your vehicle not only looks great but also maintains its
          overall condition. Here are several advantages of incorporating a routine
          maintenance program with an auto detailer:
        </p>

        <div className="mt-10 space-y-8">
          {plans.map((plan) => (
            <div key={plan.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase">{plan.title}</h3>
                <p className="mt-2 text-base">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-center space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Plan Card */}
        <div className="relative bg-white text-gray-900 rounded-lg p-8 shadow-lg overflow-hidden w-full lg:w-1/2 flex flex-col">
          {/* Triangle Shape Design */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rotate-45 translate-x-12 -translate-y-16"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-700 rotate-45 translate-x-20 -translate-y-4"></div>

          <span className="absolute top-6 left-4 bg-purple-300 text-purple-600 text-sm font-semibold px-4 py-1 rounded-full">
            {plan.badge}
          </span>
          <div className="mt-12 text-4xl font-extrabold mb-2">
            ${plan.price}
          </div>
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
