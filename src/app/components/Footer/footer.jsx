"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYelp,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaCarSide,
  FaShip,
  FaTools,
  FaSprayCan,
  FaChair,
  FaGem,
  FaCampground,
  FaCogs,
  FaTint,
  FaBuffer,
  FaWater,
  FaWrench,
  FaCrown,
} from "react-icons/fa"; // Import necessary icons
import {
  FaTrash,
  FaBroom,
  FaCouch,
  FaTv,
  FaLeaf,
  FaHardHat,
  FaWarehouse,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCog,
  faMapMarkerAlt,
  faImages,
  faBlog,
  faShieldAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  const controls = useAnimation();
  const footerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gradient-to-r from-purple-700 via-black to-purple-700 bg-opacity-50 text-white overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div variants={itemVariants} className="flex justify-start">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={192}
              height={64}
              className="w-24 md:w-64 h-auto"
              quality={100} // Ensures high-quality rendering
            />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="text-left">
          <h3 className="font-semibold text-lg mb-4">Features</h3>
          <Link href="/">
            <p className="mb-2">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </p>
          </Link>
          <Link href="/about-us">
            <p className="mb-2">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              About Us
            </p>
          </Link>
          <Link href="/services">
            <p className="mb-2">
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Services
            </p>
          </Link>
          <Link href="/service-areas">
            <p className="mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Service Areas
            </p>
          </Link>
          <Link href="/gallery">
            <p className="mb-2">
              <FontAwesomeIcon icon={faImages} className="mr-2" />
              Gallery
            </p>
          </Link>
          <Link href="/blogs">
            <p className="mb-2">
              <FontAwesomeIcon icon={faBlog} className="mr-2" />
              Blog
            </p>
          </Link>
          <Link href="/contact-us">
            <p className="mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              Contact Us
            </p>
          </Link>

          <Link href="/plans">
            <p className="mb-2">
              <FontAwesomeIcon icon={faShieldAlt} className=" mr-2" />
              Plans
            </p>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="text-left">
  <Link href="/services">
    <h3 className="font-semibold text-lg mb-4">Services</h3>
  </Link>

  <div className="mb-2 flex items-center">
    <FaCarSide className="mr-2" />
    <Link href="/services/auto-detailing">
      <span>Auto Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaWater className="mr-2" />
    <Link href="/services/boating-detailing">
      <span>Boating Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaWrench className="mr-2" />
    <Link href="/services/engine-bay-detailing">
      <span>Engine Bay Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaSprayCan className="mr-2" />
    <Link href="/services/exterior-detailing">
      <span>Exterior Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaCouch className="mr-2" />
    <Link href="/services/interior-detailing">
      <span>Interior Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaCrown className="mr-2" />
    <Link href="/services/luxury-detailing">
      <span>Luxury Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaCampground className="mr-2" />
    <Link href="/services/rv-detailing">
      <span>RV Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaBuffer className="mr-2" />
    <Link href="/services/polishing">
      <span>Polishing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaChair className="mr-2" />
    <Link href="/services/upholstery-cleaning">
      <span>Upholstery Cleaning</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaTint className="mr-2" />
    <Link href="/services/ceramic-coating">
      <span>Ceramic Coating</span>
    </Link>
  </div>
</motion.div>


        <motion.div variants={itemVariants} className="text-left">
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

          <div className="mb-2 flex items-center">
            <FaPhone className="mr-2" /> {/* Phone Icon */}
            <a
              href="tel:+19803070431"
              className="text-sm group-hover:underline group-hover:text-[#EDA940]"
            >
              (980) 307-0431
            </a>{" "}
            {/* Replace with your actual phone number */}
          </div>

          <div className="mb-2 flex items-center">
            <FaEnvelope className="mr-2" /> {/* Email Icon */}
            <a
              href="mailto:eyezontheprizeautospa@gmail.com"
              className="text-sm group-hover:underline group-hover:text-[#EDA940]"
            >
              eyezontheprizeautospa@gmail.com
            </a>{" "}
            {/* Replace with your actual email address */}
          </div>

          <div className="mb-2 flex items-center">
            <FaClock className="mr-2" /> {/* Time Icon */}
            <span>Mon to Sun: 9:00am- 7:00pm</span>{" "}
            {/* Replace with your actual working hours */}
          </div>

          <div className="mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> {/* Location Icon */}
            <span>Fairview Rd, Charlotte, NC 28210</span>{" "}
            {/* Replace with your actual location */}
          </div>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/EyezPrizeAutoSpa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            
            <a
              href="https://www.instagram.com/eyezontheprizeclt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@eyezontheprizeautospa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@EyezonAutospa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.pinterest.com/eyezona/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </motion.div>
      </div>

      <div className="relative mt-8 overflow-hidden h-10 bg-transparent border-b border-gray-500">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center "
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 476.669 476.669"
          >
            <g>
              <path d="M469.668,269.394h-2.84V187.42c0-1.545-0.511-3.046-1.453-4.271l-48.377-62.835c-1.325-1.721-3.375-2.729-5.547-2.729h-96.752c-3.866,0-7,3.134-7,7v37.688h-3.934v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.865,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.135-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.617v-0.298c0-3.866-3.134-7-7-7H86.009c-3.866,0-7,3.134-7,7v0.298h-5.616v-0.298c0-3.866-3.134-7-7-7H39.934c-3.866,0-7,3.134-7,7v0.298H20.125c-3.866,0-7,3.134-7,7v100.121H7c-3.866,0-7,3.133-7,7v41.463c0,3.865,3.134,7,7,7h26.528c3.333,19.41,20.284,34.228,40.632,34.228c20.348,0,37.299-14.815,40.632-34.228h9.158c3.333,19.41,20.284,34.228,40.631,34.228c20.348,0,37.3-14.815,40.633-34.228h114.104c3.333,19.41,20.283,34.228,40.631,34.228s37.3-14.815,40.633-34.228h69.087c3.866,0,7-3.135,7-7v-41.463C476.668,272.528,473.534,269.394,469.668,269.394z M74.16,334.808c-9.346,0-16.948-7.604-16.948-16.951c0-9.345,7.603-16.947,16.948-16.947c9.345,0,16.949,7.604,16.949,16.947C91.109,327.204,83.505,334.808,74.16,334.808z M164.581,334.808c-9.347,0-16.947-7.604-16.947-16.951c0-9.345,7.601-16.947,16.947-16.947c9.345,0,16.949,7.604,16.949,16.947C181.53,327.204,173.926,334.808,164.581,334.808z M359.948,334.808c-9.346,0-16.947-7.604-16.947-16.951c0-9.345,7.603-16.947,16.947-16.947c9.344,0,16.95,7.604,16.95,16.947C376.898,327.204,369.293,334.808,359.948,334.808z M435.613,215.128l-99.028-0.043v-67.693h63.011l36.043,48.219L435.613,215.128z" />
            </g>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" viewBox="0 0 50 50" id="SportsCar" width="70px" height="70px">
  <path fill="#555555" d="M17.4,19.8c0,0,0,1.3,0,1.3s0,0.6,0.3,0.8l0.7-0.1c-0.2-0.3-0.3-0.6-0.4-0.9l-0.1-1.1
		C17.7,19.6,17.5,19.5,17.4,19.8z" className="color555555 svgShape"></path>
  <path fill="#999999" d="M48,27.8c-0.1,0.1,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.2,0.2,0.3l-0.1,0.7
		c0,0-0.3,0.4-3.4,0.4v-1.6c0-0.5-0.1-0.9-0.2-1.3c-0.5-1.7-1.9-3.1-3.8-3.2c-2.6-0.2-4.8,1.8-4.8,4.4v1.9h-0.1l-20.9,0.5v-2.6
		c0,0,0-0.1,0-0.1c0-2.3-1.8-4.4-4.1-4.6c-1.8-0.2-3.5,0.8-4.4,2.2c-0.4,0.7-0.6,1.5-0.6,2.3v2.1c-1.1-0.1-4.8-0.8-5.1-4.3l0.4-0.6
		l0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.1,0-0.2l0-1.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2l0.3-0.5c0.2-0.2,0.2-0.6,0-0.8
		L2,21.1c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.1,0.2-0.1c0.3-0.1,0.8,0,1.8,0.2c0,0,8.1-0.2,10-2.2c0,0,1.5-0.4,2.7-0.2l0,0.2l0.5,0
		l-1.5,2.2c0,0,1.4,0.8,10.9,0.9l0.2-0.8c0,0-3.2-1.5-4.5-1.7l0.3-1c0,0,2.5,0.4,8.8,3.6C45,20.9,49.5,25.4,49,26.2l-0.6,1.1
		L48,27.8z" className="color50b6e2 svgShape"></path>
  <path fill="#747474" d="M6.1,28v1.7c-1.1-0.1-4.8-0.8-5.1-4.3C1,25.4,2.1,25.2,6.1,28z" className="color747575 svgShape"></path>
  <path fill="#ffffff" d="M48.3,27.3L46.2,27c-0.4-0.1-0.8-0.3-1-0.7c-0.7-1.8-2.2-3-4.1-3.2c-3.2-0.2-5.4,2.2-5.4,4.9
		v1.7l-0.5,0c-1.2,0-1.8-0.3-2.2-0.7c-2.4-2.3-4.8-1-17.2-1.2v-0.1c-0.1-2.8-2.2-5.1-5.1-5.1c-1.7,0-3.4,0.9-4.3,2.4
		c-1.7-1.5-3.8-2-4.6-2.1c0-0.1,0-0.2,0.1-0.2l0.3-0.5c0.2-0.2,0.2-0.6,0-0.8L2,21.1c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.1,0.2-0.1
		c0.3-0.1,0.8,0,1.8,0.2c0,0,2-0.1,4.2-0.4c2.3-0.3,4.8-0.9,5.8-1.9c0,0,0.2,0,0.4-0.1c0.5-0.1,1.5-0.3,2.2-0.1l0,0.2l0.5,0
		l-1.5,2.2c0,0,1.4,0.8,10.9,0.9l0.2-0.8c0,0-3.2-1.5-4.5-1.7l0.3-1c0,0,0.1,0,0.3,0.1h0c0.2,0,0.4,0.1,0.6,0.2
		c2.7,0.8,6.9,2.8,7.9,3.4c5.3-0.4,14.6-0.1,17.7,4.1C49.1,26.1,48.8,26.4,48.3,27.3z" opacity=".1" className="colorffffff svgShape"></path>
  <path fill="#ffffff" d="M33.5 26.5c-.1.1-.3.2-.4.3-.3.2-.6.3-.9.4-.6.2-1.1 0-6.4.1 0 0 0 0 0 0-1.8-.3 7.1-1 7.2-1C33.2 26.3 33.5 26.3 33.5 26.5zM31 25.2l-9.3-1c-.6-.1-1 1.1-.6 1.1C24.7 25.4 33.5 25.8 31 25.2z" opacity=".1" className="colorffffff svgShape"></path>
  <path fill="#ffffff" d="M46.1,23.7l-2.4,0.5c-0.7-0.6-1.6-1-2.6-1.1c-0.9-0.1-1.6,0-2.5,0.4c-0.1,0-1,0.6-1.1,0.7
		c-0.1,0-2-0.3-2.1-0.3c-0.6-0.5-8.8-0.5-9.6-0.5c-1.5,0.9-6.6-0.9-6.6-0.9c-1.3-0.4-0.3,0.5-0.3,0.5c1.5,1.6-3.3,0.2-3.3,0.2
		c-1.9-0.6,0,1.8,0,1.8c0.6,1.2,0.3,1.6-0.1,1.6h0c0-0.1-0.1-0.3-0.1-0.4c-0.6-1.8-2-3-3.4-3.3c0,0,0,0,0,0c-0.5-0.2-1-0.2-1.4-0.2
		c-0.5,0-1.1,0.1-1.3,0.2c-0.2,0-1,0.4-1.2,0.5c-0.9-1-3.6-1.1-3.6-1.1c-0.5,0.8-0.9,0.5-0.9,0.5v-1.2l5.5-0.2
		c1.2-0.3,3.6-0.4,5-0.4c1.1,0.2,2.9,0.6,4.6,0.6c0,0,10.1,0.6,10.3,0.4l0.8,0c0,0,3.9-0.2,1.2-0.2l1.3-0.1
		C32.5,21.6,40.9,21.1,46.1,23.7z" opacity=".1" className="colorffffff svgShape"></path>
  <path fill="#555555" d="M11.1 23.1c-1.8-.2-3.5.8-4.4 2.2-.4.7-.6 1.5-.6 2.3v2.1l9.1.7v-2.6c0 0 0-.1 0-.1C15.2 25.4 13.5 23.3 11.1 23.1zM44.8 26.8c-.5-1.7-1.9-3.1-3.8-3.2-2.6-.2-4.8 1.8-4.8 4.4v1.9l8.8-.2v-1.6C45 27.7 44.9 27.2 44.8 26.8z" className="color555555 svgShape"></path>
  <path fill="#747474" d="M17.1 18.7l-1.5 2.2c-2.6-.3-5.7-.4-7.5-.3 2.3-.3 4.8-.9 5.8-1.9 0 0 1.5-.4 2.7-.2l0 .2L17.1 18.7zM30 22c-1.2-1-6.7-3.4-6.7-3.4l0-.2c2.7.8 6.9 2.8 7.9 3.4C33.9 21.8 30 22 30 22z" className="color747575 svgShape"></path>
  <path fill="#949494" d="M4.4,22.4c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.3-0.5-0.3H2.9c-0.3,0-0.5,0.2-0.5,0.5l0,1
		c0,0.3,0.2,0.5,0.5,0.5l0,0C3.5,23.3,4,22.9,4.4,22.4z" className="colore36046 svgShape"></path>
  <path fill="#555555" d="M2.9,25c-0.3,0-1-0.1-1.4-0.3l0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3l1.6,0.2C4.1,24.6,3.6,25.1,2.9,25z" className="color555555 svgShape"></path>
  <path fill="#d8d8d8" d="M48.4,25.3c-0.3,0.3,0.6,0.4-4.7-2.2c-1.1-0.3-1.1-0.5-0.8-0.5C44.9,23,47,23.9,48.4,25.3z" className="colord6d9db svgShape"></path>
  <path fill="#555555" d="M35.5,24.3c0.1,0.7-1.9,2.1-2.4,2.4C33,26.6,33,26.4,33,26.3C32.9,25.3,34.3,24.1,35.5,24.3z" className="color555555 svgShape"></path>
  <path fill="#ffffff" d="M23.4,27.3c7.7-0.1,8.2,0.1,8.8-0.1c1.1-0.4,2.3-1.4,3-2.1c1.4-1.6-0.6-1.3-9.4-1.8
		c2.5,0,6.4,0.1,8.9,0.4c0.2,0,0.5,0,0.8,0.2c0.2,0.2,0.4,0.5,0.3,0.7c-0.1,0.4-0.7,0.9-0.9,1.2c-0.8,0.6-1.6,1.2-2.5,1.6
		C31.7,27.6,23.7,27.3,23.4,27.3z" opacity=".2" className="colorffffff svgShape"></path>
  <path fill="#9c9c9c" d="M29.7 29.3l-.2 0c.1-.8.4-5.9.4-5.9 0-.5-.1-1-.4-1.2-.2-.2-.3-.2-.4-.2l0 0 0-.2c.3-.1.9.4.9 1.6C30.1 23.6 29.9 28.5 29.7 29.3zM17.9 28.9c-.8-.7-2.5-4.5-2.2-6.5.1-.6.4-1.1.8-1.2l.1.2c-.4.1-.6.5-.7 1.1-.3 2 1.3 5.7 2.1 6.3L17.9 28.9z" className="color62a0d6 svgShape"></path>
  <path fill="#747474" d="M36.2 29.7v.2h-.1l-20.9.5v-1.1c0 0 2.5-.9 5.3-.6L36.2 29.7zM29.2 21.9c-.1.1-10.9.2-15.8-1.3l.9-2.1c.5-.1 1.5-.3 2.2-.1l0 .2.5 0-1.5 2.2c0 0 1.4.8 10.9.9l.2-.8c0 0-3.2-1.5-4.5-1.7l.3-1c0 0 .1 0 .3.1l-.1.6C25 19.3 29.2 21.9 29.2 21.9z" className="color747575 svgShape"></path>
  <path fill="#9c9c9c" d="M18,22.8c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3-0.1-0.3-0.2
			c-0.1-0.1,0-0.2,0-0.3l0-0.1c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.4,0c0.3,0.1,0.6,0.2,0.7,0.4C18,22.7,18,22.8,18,22.8z" className="color62a0d6 svgShape"></path>
  <path fill="#999999" d="M17.9,22.8c0,0.2-0.4,0.3-0.8,0.2c-0.3-0.1-0.3-0.2-0.2-0.4s0-0.4,0.4-0.3C17.6,22.4,17.9,22.6,17.9,22.8z" className="color50b6e2 svgShape"></path>
  <path fill="#555555" d="M17.1,18.7l-1.5,2.2c0,0-0.5,0-1.3,0c-0.5-0.1-0.9-0.2-0.9-0.2l0.9-2.1c0.5-0.1,1.5-0.3,2.2-0.1l0,0.2
		L17.1,18.7z" className="color555555 svgShape"></path>
  <path fill="#646464" d="M27,22.1h-1.6c-0.5-0.1-0.7-0.4-0.7-0.7c0-0.2,0-0.3,0-0.3c0.4-1.3,1.9-0.2,1.9-0.2
		c0.4,0.2,0.4,0.4,0.4,0.5c0,0.2-0.2,0.3-0.2,0.3l0.7,0C27.7,22,27,22.1,27,22.1z" className="color646565 svgShape"></path>
  <path fill="#d8d8d8" d="M27,21.4L26,21.3c-0.3-0.1-0.4,0-0.5,0.1c-0.1,0.1-0.2,0.1-0.3,0.1l-0.6-0.1c0-0.2,0-0.3,0-0.3
		c0.4-1.3,1.9-0.2,1.9-0.2C27,21.1,27,21.3,27,21.4z" className="colord6d9db svgShape"></path>
  <circle cx="40.7" cy="27.9" r="3.9" fill="#747474" className="color747575 svgShape"></circle>
  <circle cx="40.7" cy="27.9" r="3" fill="#d8d8d8" className="colord6d9db svgShape"></circle>
  <circle cx="40.7" cy="27.9" r="2.4" fill="#555555" className="color555555 svgShape"></circle>
  <circle cx="40.7" cy="27.9" r="1.9" fill="#a3a3a3" className="colora0a4a7 svgShape"></circle>
  <path fill="#d8d8d8" d="M41.5,27.9C41.5,27.9,41.5,27.9,41.5,27.9l1.8-1.1L43,26.3l-1.7,1c-0.1-0.1-0.2-0.2-0.4-0.3v-1.9h-0.6v1.9
			c-0.1,0-0.2,0.1-0.3,0.2l-1.6-1l-0.3,0.5l1.6,1c0,0.2,0,0.3,0.1,0.6l-1.4,1.5l0.4,0.4l1.4-1.5c0.2,0.1,0.4,0.1,0.6,0l1.4,1.5
			l0.4-0.4l-1.4-1.5C41.5,28.2,41.5,28.1,41.5,27.9z" className="colord6d9db svgShape"></path>
  <g fill="#000000" className="color000000 svgShape">
    <circle cx="10.7" cy="27.9" r="3.9" fill="#747474" className="color747575 svgShape"></circle>
    <circle cx="10.7" cy="27.9" r="3" fill="#d8d8d8" className="colord6d9db svgShape"></circle>
    <circle cx="10.7" cy="27.9" r="2.4" fill="#555555" className="color555555 svgShape"></circle>
    <circle cx="10.7" cy="27.9" r="1.9" fill="#a3a3a3" className="colora0a4a7 svgShape"></circle>
    <path fill="#d8d8d8" d="M11.6,27.9C11.6,27.9,11.6,27.9,11.6,27.9l1.8-1.1L13,26.3l-1.7,1c-0.1-0.1-0.2-0.2-0.4-0.3v-1.9h-0.6v1.9
			c-0.1,0-0.2,0.1-0.3,0.2l-1.6-1l-0.3,0.5l1.6,1c0,0.2,0,0.3,0.1,0.6l-1.4,1.5L9,30.2l1.4-1.5c0.2,0.1,0.4,0.1,0.6,0l1.4,1.5
			l0.4-0.4l-1.4-1.5C11.5,28.2,11.6,28.1,11.6,27.9z" className="colord6d9db svgShape"></path>
  </g>
</svg>
        </motion.div>
      </div>

      <div className="mt-8 flex flex-row justify-between items-center text-sm">
  <p className="font-semibold ml-2">Eyez On The Prize Auto-Spa</p>
  <p className="font-light mr-2 ">Copyright {year}</p>
</div>

    </motion.footer>
  );
};

export default Footer;
