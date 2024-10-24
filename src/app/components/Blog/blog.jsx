"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const blogPosts = [
  {
    title:
      "The Best Pressure Washers for Car Detailing and Cleaning",
    image: "/images/blog-1.jpg",
    description:
      "Looking for the best pressure washers for cars? Here you can find the relevant information about why pressure washing has",
    category: "September 17, 2024 ",
    readTime: "",
    link: "/the-best-pressure-washers-for-car-detailing-and-cleaning",
  },
  {
    title:
      "The Complete Guide to Car Wax: How to Choose and Use?",
    image: "/images/blog-2.png",
    description:
      "The paint of your car needs more than just a simple water and soap cleaning. It deserves safety, shine, and..",
    category: "September 15, 2024",
    readTime: "",
    link: "/the-complete-guide-to-car-wax-how-to-choose-and-use",
  },
 
  {
    title:
      "How Long Does Car Detailing Take? A Comprehensive Guide",
    image: "/images/blog-3.png",
    description:
      "Hey there, fellow car enthusiasts! Whether you’re passionate about your vehicle or just want your daily driver to shine, understanding..",
    category: "September 10, 2024",
    readTime: "",
    link: "/how-long-does-car-detailing-take-a-comprehensive-guide",
  },
  {
    title:
      "What’s the difference between Polishing and buffing process; Which Technique is Right for Your Car?",
    image: "/images/blog-4.png",
    description:
      "If you ever search for the improvement of paint for your vehicle, you must hear about the terms vehicle polishing",
    category: "September 10, 2024",
    readTime: "",
    link: "/unveiling-the-difference-between-buffing-and-polishing-which-technique-is-right-for-your-car",
  }
  ,
  {
    title:
      "Easy Ways to Remove Swirl Marks from Your Car",
    image: "/images/blog-5.jpg",
    description:
      "Swirl marks on your car can be an actual problem, diminishing its usual appearance. These light scratches and abrasions often",
    category: "August 12, 2024 ",
    readTime: "",
    link: "/easy-ways-to-remove-swirl-marks-from-your-car",
  }
  ,
  {
    title:
      "Is a Touchless Car Wash Safe for All Vehicle Types?",
    image: "/images/blog-6 .jpg",
    description:
      "In today’s fast-paced world, consolation and performance are key. One provider that has gained popularity is the touchless car wash.",
    category: "August 6, 2024  ",
    readTime: "",
    link: "/is-a-touchless-car-wash-safe-for-all-vehicle-types",
  },
  {
    title:
      "Best Methods for Car Detailing Smoke Odor Removal",
    image: "/images/blog-7.jpg",
    description:
      "Keeping your car neat and smelling good can be tricky, especially when dealing with smoke. This stubborn smell is known",
    category: "July 15, 2024  ",
    readTime: "",
    link: "/car-detailing-smoke-odor-removal",
  }
  ,
  {
    title:
      "Quick and Easy Steps for Successful RV Oxidation Removal",
    image: "/images/blog-8.jpg",
    description:
      "Owning a luxury vehicle (RV) is an entry of immense effort, yet after some time, the acceptance of parts can.........",
    category: "July 12, 2024 ",
    readTime: "",
    link: "/quick-and-easy-steps-for-successful-rv-oxidation-removal",
  }
  ,
  {
    title:
      "How Do You Decide How Much to Tip for Car Detailing?",
    image: "/images/blog-9.jpg",
    description:
      "When it comes to car detailing, deciding on the appropriate tip can be challenging. Various factors influence how much to",
    category: "July 5, 2024",
    readTime: "",
    link: "/how-much-to-tip-for-car-detailing",
  }
  ,
  {
    title:
      "Can You Achieve a Showroom Shine with a Car Wash Detail at Home?",
    image: "/images/blog-10.jpg",
    description:
      "“Yes,” You can achieve the showroom shine of your car with car wash details at home. Achieving a showroom shine",
    category: "May 13, 2024",
    readTime: "",
    link: "/can-you-achieve-a-showroom-shine-with-a-car-wash-detail-at-home",
  },
  // Add more blog posts as needed
];

const Blog1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="py-12 bg-gradient-to-r from-purple-500 to-black bg-center bg-no-repeat bg-cover z-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              className="relative"
              variants={cardVariants}
              key={index}
            >
              <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border-2 border-[#7100BB] rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4),0_2px_4px_-1px_rgba(0,0,0,0.2)] hover:shadow-lg hover:-translate-y-1">
                {/* Blog Tag */}
                <span className="absolute top-2 right-2 bg-purple-400 text-black px-2 py-1 text-xs font-bold rounded-md z-10">
                  Blog
                </span>
                <Link
                  href={post.link}
                  title={post.title}
                  className="block w-full h-60 overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={post.image}
                    alt={`thumbnail-${index + 1}`}
                  />
                </Link>
                <div className="flex-1 px-4 py-5 sm:p-6">
                  <Link href={post.link} title={post.title}>
                    <p className="text-lg font-bold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-black">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-white">
                        <Link href={post.link} title={post.category}>
                          {post.category}
                        </Link>
                      </p>
                      <span className="text-sm font-medium text-gray-900">
                        
                      </span>
                      <p className="text-sm font-medium text-gray-900">
                        {post.readTime}
                      </p>
                    </div>
                    <Link href={post.link} title="" className="" role="button">
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog1;
