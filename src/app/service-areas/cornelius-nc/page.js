"use client";
import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const sections = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 15h17.25M5.625 15v1.5a2.25 2.25 0 01-2.25 2.25h-.75m18 0h-.75a2.25 2.25 0 01-2.25-2.25V15m-12-6h12l1.5 4.5H4.125L5.625 9zm3.75-3.75h6.75a.75.75 0 01.75.75v2.25H8.625V6a.75.75 0 01.75-.75z"
        />
      </svg>
    ),
    title: "Detailing Delight, Exterior Cleaning in Cornelius",
    description: (
      <div style={{ whiteSpace: "pre-line" }}>
        <div style={{ marginBottom: "1rem" }}>
          Engage your car in a refreshing exterior car wash experience in
          Cornelius, NC. Our super attention to detail ensures your car appears
          spotless, shining, and ready to turn heads on the road.
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Improve the beauty of your car with our top-class vehicle exterior
          detailing services in Cornelius, NC. Our professional group
          specializes in ensuring your automobile shines like new. Enjoy the
          transformation of your ride with our paint correction services in
          Cornelius, designed to get rid of imperfections and restore your car
          to its original beauty.
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Experience a luxury look with our car waxing and polishing services in
          Cornelius, assured to decorate your vehicle’s shine and guard it
          against environmental factors. Discover the difference yourself and
          treat your ride to the care it deserves. Whether you want to restore
          your automobile’s look or maintain its showroom shine, trust our
          skilled professionals to provide unmatched results. You are sure to
          love the results.
        </div>
      </div>
    ),
    imgSrc: "/images/Cornelius-NC.jpg",
  },
];

const ServiceDetailPage = () => {
  return (
    <div>
      <div className="relative min-h-[60vh] bg-gradient-to-r from-purple-500 to-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold">
          Car Detailing Services in Cornelius, NC

          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center mt-3">
              Home
              <FaLongArrowAltRight className="text-lg text-purple-600" />
              Cornelius, NC
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-gradient-to-r from-black via-black to-purple-900 pt-16 pb-32 space-y-24">
        {sections.map((section, idx) => (
          <div key={section.id} className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
              {/* Use Flexbox for equal height alignment */}
              <div className="flex flex-col lg:flex-row items-stretch lg:gap-12">
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center px-6 lg:py-16">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500">
                    {section.icon}
                  </div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 text-lg text-gray-300">
                    {section.description}
                  </div>
                  <div className="mt-6">
                    <a
                      href="/login"
                      className="inline-flex rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-900 hover:ring-purple-900"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center">
                  <Image
                    src={section.imgSrc}
                    alt={section.title}
                    width={500}
                    height={375}
                    className="rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailPage;
