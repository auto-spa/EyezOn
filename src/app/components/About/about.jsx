"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const About = ({ topRef }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <main
      ref={topRef}
      style={{
        backgroundImage: "url('/images/automotive-aesthetics.webp')", // Update with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="overflow-x-hidden"
    >
      <div className="inset-0 bg-gradient-to-r from-purple-800/90 to-black/90">
        <div className="container text-white">
          <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
            {/* Text section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                  duration: 0.4,
                }}
                className="space-y-8"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight uppercase">
                  About Us
                </h1>
                <p className="text-3xl leading-relaxed text-white">
                  Discover How We Bring Outstanding Excellence to Car Detailing!
                </p>
                <p className="text-base leading-relaxed text-white">
                  At Eyez at the Prize Auto Spa, we specialize in top-class
                  mobile auto detailing services in Charlotte, NC, catering to
                  vehicles and boats with recognized interest in detail. Our
                  complete car cleaning and detailing services in Charlotte are
                  designed to give your vehicle a new life from the inside out.
                  We provide professional boat waxing and polishing services in
                  Charlotte, making sure your boat looks great on the water.
                  Trust us to enhance your vehicle’s look and protect its value
                  with our expert detailing strategies.
                </p>
                <Link href="/services">
                  <button className="outline-btn flex justify-center items-center gap-4 group mt-4 mb-[22%]">
                    Explore
                    <FaArrowRight className="group-hover:translate-x-2 transition text-white" />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Image section */}
            <div className="relative">
              {/* Glowing horizontal ring for desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="absolute glowing-shadow hidden md:block" // Desktop ring (hidden on mobile)
                style={{
                  width: "400px",
                  height: "200px",
                  border: "15px solid rgba(179, 0, 255, 0.8)", // Solid ring effect
                  borderRadius: "50%",
                  transform: "rotateX(75deg)",
                  boxShadow: "0 50px 50px rgba(0, 0, 0, 0.5)",
                  top: "50%",
                  left: "40%",
                  transform: "translate(-50%, -50%) rotateX(75deg)",
                }}
              ></motion.div>

              {/* Glowing horizontal ring for mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="absolute glowing-shadow md:hidden" // Mobile ring (hidden on desktop)
                style={{
                  width: "200px", // Smaller size for mobile
                  height: "100px",
                  border: "10px solid #7100BB", // Adjusted for mobile
                  borderRadius: "50%",
                  transform: "rotateX(75deg)",
                  boxShadow: "0 25px 25px rgba(0, 0, 0, 0.5)",
                  top: "50%",
                  left: "46%",
                  transform: "translate(-50%, -50%) rotateX(75deg)",
                }}
              ></motion.div>

              {/* Car image positioned above the ring */}
              <motion.img
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.2 }}
                transition={{
                  duration: 1,
                  delay: 1.8,
                }}
                src="/images/about-us-mustang.png"
                alt="Mustang Car"
                className="w-[70%] md:w-[85%] relative z-30" // Adjusted size for mobile
                style={{
                  position: "",
                  bottom: "50px",
                  left: "20%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
