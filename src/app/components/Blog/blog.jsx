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
  {
    title:
      "Is There a Safe Way to Use Car Polish Without Damaging Your Car?",
    image: "/images/blog-11.jpg",
    description:
      "“Yes,” there is a safe way to polish your car without any damage. Car polish is a popular product used............",
    category: "May 9, 2024 ",
    readTime: "",
    link: "/is-there-a-safe-way-to-use-car-polish-without-damaging-your-car",
  },
  {
    title:
      "How Often Should I Detail My Boat to Keep It Looking Great?",
    image: "/images/blog-12.jpg",
    description:
      "Proper maintenance and detailing are essential to keep your boat looking its best and preserve its value over time. Regular",
    category: "May 3, 2024 ",
    readTime: "",
    link: "/how-often-should-i-detail-my-boat-to-keep-it-looking-great",
  },
  {
    title:
      "Why is boat detailing Important for Achieving a Showroom Shine?",
    image: "/images/blog-13.jpg",
    description:
      "Acquiring a boat entails a substantial financial commitment, and preserving its visual beauty is crucial for any owner who takes",
    category: "April 21, 2024  ",
    readTime: "",
    link: "/why-is-boat-detailing-important-for-achieving-a-showroom-shine",
  },
  {
    title:
      "How Do I Prevent Mobile RV Detailing Problems in the Future?",
    image: "/images/blog-14.jpg",
    description:
      "Mobile RV detailing is a convenient service that brings the detailing directly to your location, helping keep your recreational vehicle",
    category: "April 14, 2024  ",
    readTime: "",
    link: "/how-do-i-prevent-mobile-rv-detailing-problems-in-the-future",
  },
  {
    title:
      "How Often Should You Use a Car Cleaning Kit to Maintain Your Vehicle?",
    image: "/images/blog-15.jpg",
    description:
      "Maintaining the cleanliness of your car serves a purpose beyond creating a positive impression. Regular maintenance is essential for preserving",
    category: "April 7, 2024   ",
    readTime: "",
    link: "/how-often-should-you-use-a-car-cleaning-kit-to-maintain-your-vehicle",
  },
  {
    title:
      "How to Apply Car Ceramic Coating for Ultimate Protection?",
    image: "/images/blog-16.jpg",
    description:
      "Car ceramic coating has transformed car protection by providing exceptional durability, gloss, and resistance to",
    category: "February 20, 2024    ",
    readTime: "",
    link: "/how-to-apply-car-ceramic-coating-for-ultimate-protection",
  },
  {
    title:
      "How to Polish Your Car with Fiber for a Flawless Shine?",
    image: "/images/blog-17.jpg",
    description:
      "Do you feel fatigued by the uninteresting and uninspiring appearance of your car’s paint? Do you aspire to get a",
    category: "February 12, 2024",
    readTime: "",
    link: "/how-to-polish-your-car-with-fiber-for-a-flawless-shine",
  },
  {
    title:
      "How Much Does a Ceramic Coating Cost in Charlotte?",
    image: "/images/blog-18.jpg",
    description:
      "Vehicle lovers habitually contemplate the value of clay coatings. If you have at any point contemplated the cost of clay",
    category: "February 5, 2024",
    readTime: "",
    link: "/ceramic-coating-cost-in-charlotte",
  },
  {
    title:
      "Is 3D Ceramic Coating Suitable for All Types of Surfaces?",
    image: "/images/blog-19.jpg",
    description:
      "The advancement of 3D ceramic coating has presented a new arrangement that gives improved durability, sparkle, and protection against a",
    category: "January 19, 2024",
    readTime: "",
    link: "/is-3d-ceramic-coating-suitable-for-all-types-of-surfaces",
  },
  {
    title:
      "How Much Does Paint Correction Cost in Charlotte, NC?",
    image: "/images/blog-20.jpg",
    description:
      "The exterior of your car, exposed to the outside and regular use, may slowly lose its shine as a result................",
    category: "January 19, 2024 ",
    readTime: "",
    link: "/how-much-does-paint-correction-cost-in-charlotte-nc",
  },
  {
    title:
      "How To Fix Dents and Micro Scratches On Car?",
    image: "/images/blog-21.jpg",
    description:
      "Regular usage of your car subjects it to the natural attacks of everyday utilization, coming about in a buildup of",
    category: "January 19, 2024 ",
    readTime: "",
    link: "/how-to-fix-dents-and-micro-scratches-on-car",
  },
  {
    title:
      "What is Paint Correction on a Car?",
    image: "/images/blog-22.jpg",
    description:
      "Enter the transformative processes of paint correction and ceramic coating, two techniques that go beyond conventional",
    category: "December 11, 2023 ",
    readTime: "",
    link: "/what-is-paint-correction-on-a-car",
  },
  {
    title:
      "How to Fix Scratches on Interior Car Plastic in NC",
    image: "/images/blog-22.jpg",
    description:
      "Car scratches can be a source of frustration for car owners, no matter how minor. The interior plastic of",
    category: "December 5, 2023 ",
    readTime: "",
    link: "/how-to-fix-scratches-on-interior-car-plastic-in-nc",
  },
  {
    title:
      " Unveiling the Artistry behind Our Unmatched Hand Wash Technique for Your Car",
    image: "/images/25.jpg",
    description:
      "In the realm of automotive care, where every detail ",
    category: "November 19, 2023 ",
    readTime: "",
    link: "/how-to-fix-scratches-on-interior-car-plastic-in-nc",
  },
  {
    title:
      " The Unmatched Charm of Living in Charlotte: A Dive into Metro Marvels",
    image: "/images/blog-26.jpg",
    description:
      "Welcome to the enchanting realm of the Charlotte Metro Area, where urban",
    category: "November 17, 2023 ",
    readTime: "",
    link: "/the-unmatched-charm-of-living-in-charlotte-a-dive-into-metro-marvels",
  },
  {
    title:
      " Comprehensive Guide to Engine Cleaning for Peak Performance",
    image: "/images/blog-27.jpg",
    description:
      "In the quest for peak vehicle performance, a pristine engine is non-negotiable. At Eyez on the Prize Auto",
    category: "November 15, 2023 ",
    readTime: "",
    link: "/comprehensive-guide-to-engine-cleaning-for-peak-performance",
  },
  {
    title:
      " How Much Is Paint Correction and Ceramic Coating",
    image: "/images/blog-28.png",
    description:
      "So, you’re thinking about giving your beloved car a little extra TLC with paint correction and ceramic ",
    category: "October 6, 2023 ",
    readTime: "",
    link: "/how-much-is-paint-correction-and-ceramic-coating",
  },
  {
    title:
      " The Power of Exterior Detailing: Can it Remove Scratches and Dents on Cars?",
    image: "/images/blog-29.png",
    description:
      "When it comes to keeping your car looking its best, exterior detailing becomes a key",
    category: "September 19, 2023  ",
    readTime: "",
    link: "/exterior-detailing-can-it-remove-scratches-and-dents-on-cars",
  },
  {
    title:
      " The Magic of Ceramic Coating: Unveiling the Longevity",
    image: "/images/blog-30.png",
    description:
      "Ceramic Coating has taken the automotive world by storm in recent years, promising unrivaled protection ",
    category: "September 14, 2023",
    readTime: "",
    link: "/the-magic-of-ceramic-coating-unveiling-the-longevity",
  },
  {
    title:
      " How Car Detailing Service Can Preserve Your Car’s Value",
    image: "/images/blog-31.jpg",
    description:
      "Everything You Should Know About Car Detailing Car detailing is a thorough and meticulous cleaning  ",
    category: "August 8, 2023 ",
    readTime: "",
    link: "/how-car-detailing-service-can-preserve-your-cars-value",
  },

  // Add more blog posts as needed How Car Detailing Service Can Preserve Your Car’s Value

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
