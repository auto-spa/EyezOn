"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Services Data with Correct Slugs
const services = [
  {
    title: "Polishing",
    description:
      "Discover superior car polishing services at Eyez on the Prize Auto Spa. Experience perfect shine and protection for your vehicle. Book now for careful attention and brilliant results.",
    image: "/images/polishing.png",
    slug: "polishing", // Correct slug
  },
  {
    title: "Ceramic Coating",
    description:
      "Experience the ultimate protection with Eyez on the Prize Auto Spa’s Ceramic Coating service. Our advanced coating ensures strong shine and superior defense against environmental damage, keeping your car looking perfect.",
    image: "/images/ceramic.png",
    slug: "ceramic-coating", // Correct slug
  },
  {
    title: "Exterior Detailing",
    description:
      "Transform your vehicle’s appearance with our Exterior Detailing Service at Eyez on the Prize Auto Spa. We offer expert polishing, waxing, and paint protection to ensure an ideal, outstanding shine.",
    image: "/images/exterior-detailing.png",
    slug: "exterior-detailing",
  },
  {
    title: "Interior Detailing",
    description:
      "Experience ideal interiors with Eyez on the Prize Auto Spa’s Interior Detailing. Our expert team carefully cleans and improves every inch, ensuring your car’s interior looks and feels brand new.",
    image: "/images/interior-detailing.png",
    slug: "interior-detailing",
  },
  {
    title: "Upholstery Cleaning",
    description:
      "Eyez on the Prize Auto Spa offers exceptional upholstery cleaning services, removing stains and odors to restore your car’s interior to mint condition.",
    image: "/images/Upholstery Cleaning.jpg",
    slug: "upholstery-cleaning",
  },
  {
    title: "Engine Bay Detailing",
    description:
      "Discover our Engine Bay Detailing service at Eyez on the Prize Auto Spa. We carefully clean and restore your engine bay, ensuring it looks as good as new.",
    image: "/images/interior-detailing.png",
    slug: "engine-bay-detailing",
  },
  {
    title: "RV Detailing",
    description:
      "Eyez on the Prize Auto Spa offers efficient RV detailing services, ensuring your RV looks outstanding inside and out. Experience excellent cleaning, polishing, and detailing customized specifically for your home on wheels.",
    image: "/images/RV Detailing.png",
    slug: "rv-detailing-2",
  },
  {
    title: "Auto Detailing",
    description:
      "At Eyez on the Prize Auto Spa, our auto detailing services deliver a perfect finish for your vehicle.",
    image: "/images/auto-detailing.png",
    slug: "auto-detailing",
  },
  {
    title: "Luxury Detailing",
    description:
      "Enjoy yourself in the ultimate car care with Eyez on the Prize Auto Spa’s Luxury Detailing Service.",
    image: "/images/luxury-detailing.png",
    slug: "luxury-detailing",
  },
  {
    title: "Boating Detailing",
    description:
      "Eyez on the Prize Auto Spa specializes in outstanding boat detailing services. Our skilled team delivers thorough cleaning and polishing to keep your boat looking brilliant.",
    image: "/images/Boating Detailing.png",
    slug: "boating-detailing",
  },
];

const ServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight uppercase text-purple-800">
        Our Services
      </h1>
      <h2 className="font-semibold text-white mt-4 text-2xl lg:text-3xl">
        What We Offer
      </h2>
      <p className="text-white mt-2 mb-8 text-1xl lg:text-2xl">
        Unleash Your Car's True Shine with Eyez on the Prize Auto Spa's Detailing Excellence in Charlotte
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <Link
                href={`/services/${service.slug}`}
                className="flex shrink-0 aspect-w-4 aspect-h-3"
              >
                <Image
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                />
              </Link>
              <div className="flex-1 px-4 py-5 sm:p-6">
                <Link href={`/services/${service.slug}`}>
                  <p className="text-lg font-bold text-gray-900">
                    {service.title}
                  </p>
                  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              </div>
              <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#7100BB]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    <Link href={`/services/${service.slug}`}>Read More</Link>
                  </p>
                  <Link href={`/services/${service.slug}`} role="button">
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
  );
};

export default ServicePage;
