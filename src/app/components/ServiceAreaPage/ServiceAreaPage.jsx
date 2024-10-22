"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Service Area Data
const serviceAreas = [
  {
    title: "Charlotte, NC",
    description:
      "Searching for a way to restore your vehicle’s sparkle in Charlotte, NC? Find excellent detail shops near Charlotte that specialize in comprehensive car care and thorough cleaning services. Our team of expert detailers is dedicated to rejuvenating your car’s flawless state, both internally and externally.",
    link: "/junk-removal-florida-usa",
    image: "/images/Charlotte-NC.webp",
  },
  {
    title: "Huntersville, NC",
    description:
      "Try our superior marine detailing services in Huntersville, NC for the ultimate marine luxury experience. Our group of experienced experts focuses on thorough boat cleaning and detailing, guaranteeing that your boat stays in top condition throughout the entire year. ",
    link: "/",
    image: "/images/Huntersville-NC.jpg",
  },
  {
    title: "Mooresville, NC",
    description:
      "Give your vehicle engine a new look with our thorough car engine detailing services in Mooresville, NC. Our skilled technicians are dedicated to cleaning engine bays and engines carefully to give your vehicle’s powerhouse the care it needs. By using refined methods",
    link: "/auburndale",
    image: "/images/Mooresville-NC.jpg",
  },
  {
    title: "Cornelius, NC",
    description:
      "Engage your car in a refreshing exterior car wash experience in Cornelius, NC. Our super attention to detail ensures your car appears spotless, shining, and ready to turn heads on the road.",
    link: "/auburndale",
    image: "/images/Cornelius-NC.jpg",
  },
  {
    title: "Concord, NC",
    description:
      "Bring back the beauty and comfort of your ride with our car interior cleaning services in Concord. Our professional crew focuses on cleaning the indoors of your ride, ensuring each inch of your vehicle’s interior is perfectly neat and clean.",
    link: "/auburndale",
    image: "/images/Concord-NC.jpg",
  },
  // Add more service areas as needed
];

const ServiceAreaPage = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8 ">
      {/* <h1 className="text-3xl font-bold text-gray-900">Service Areas</h1>
      <h2 className="text-xl font-semibold text-gray-700 mt-4">
        See How We Take Care of Your Areas Cleaning
      </h2>
      <p className="text-gray-600 mt-2 mb-8">
        Choose Trinity Junk Removal for professional, reliable, and eco-friendly services.
      </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceAreas.map((area, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <Link href={area.link} className="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={area.image}
                  alt={area.title}
                />
              </Link>
              <div className="flex-1 px-4 py-5 sm:p-6">
                <Link href={area.link}>
                  <p className="text-lg font-bold text-gray-900">{area.title}</p>
                  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    {area.description}
                  </p>
                </Link>
              </div>
              <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#7100BB]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    <Link href={area.link}>Read More</Link>
                  </p>
                  <Link href={area.link} role="button">
                    <svg
                      className="w-5 h-5 text-white transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ServiceAreaPage;
