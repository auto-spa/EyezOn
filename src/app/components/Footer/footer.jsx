
"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYelp, FaTiktok, FaYoutube, FaPinterest, FaCarSide, FaShip, FaTools, FaSprayCan, FaChair, FaGem, FaCampground, FaCogs, FaTint, FaBuffer } from 'react-icons/fa'; // Import necessary icons
import { FaTrash, FaBroom, FaCouch, FaTv, FaLeaf, FaHardHat, FaWarehouse } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCog, faMapMarkerAlt, faImages, faBlog, faShieldAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



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

  <Link href="/privacy-policy">
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
    <Link href="/auto-detailing">
      <span>Auto Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaShip className="mr-2" />
    <Link href="/boating-detailing">
      <span>Boating Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaTools className="mr-2" />
    <Link href="/engine-bay-detailing">
      <span>Engine Bay Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaSprayCan className="mr-2" />
    <Link href="/exterior-detailing">
      <span>Exterior Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaChair className="mr-2" />
    <Link href="/interior-detailing">
      <span>Interior Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaGem className="mr-2" />
    <Link href="/luxury-detailing">
      <span>Luxury Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaCampground className="mr-2" />
    <Link href="/rv-detailing">
      <span>RV Detailing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaBuffer className="mr-2" />
    <Link href="/polishing">
      <span>Polishing</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaCogs className="mr-2" />
    <Link href="/upholstery-cleaning">
      <span>Upholstery Cleaning</span>
    </Link>
  </div>

  <div className="mb-2 flex items-center">
    <FaTint className="mr-2" />
    <Link href="/ceramic-coating">
      <span>Ceramic Coating</span>
    </Link>
  </div>
</motion.div>


        <motion.div variants={itemVariants} className="text-left">
  <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
  
  <div className="mb-2 flex items-center">
    <FaPhone className="mr-2" /> {/* Phone Icon */}
    <a href="tel:+19803070431" className="text-sm group-hover:underline group-hover:text-[#EDA940]">
    (980) 307-0431
            </a> {/* Replace with your actual phone number */}
  </div>
  
  <div className="mb-2 flex items-center">
    <FaEnvelope className="mr-2" /> {/* Email Icon */}
    <a href="mailto:eyezontheprizeautospa@gmail.com" className="text-sm group-hover:underline group-hover:text-[#EDA940]">
    eyezontheprizeautospa@gmail.com
            </a> {/* Replace with your actual email address */}
  </div>
  
  <div className="mb-2 flex items-center">
    <FaClock className="mr-2" /> {/* Time Icon */}
    <span>Mon to Sun: 24 hours</span> {/* Replace with your actual working hours */}
  </div>
  
  <div className="mb-2 flex items-center">
    <FaMapMarkerAlt className="mr-2" /> {/* Location Icon */}
    <span>Fairview Rd, Charlotte, NC 28210</span> {/* Replace with your actual location */}
  </div>

  <div className="flex space-x-4 mt-4">
    <a href="https://www.facebook.com/trinityjunkremovalinc/" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://www.yelp.com/biz/trinity-junk-removal-riverview-5" target="_blank" rel="noopener noreferrer">
      <FaYelp />
    </a>
    <a href="https://www.instagram.com/trinityjunk813/" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.tiktok.com/@trinityjunk?_t=8hkU3Ll578h&_r=1" target="_blank" rel="noopener noreferrer">
      <FaTiktok />
    </a>
    <a href="https://www.youtube.com/@trinityjunkremovalinc" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
    <a href="https://www.pinterest.com/trinityjunkremovalinc1/" target="_blank" rel="noopener noreferrer">
      <FaPinterest />
    </a>
    {/* Add more social icons as needed */}
  </div>
</motion.div>
      </div>

      <div className="relative mt-8 overflow-hidden h-10 bg-transparent border-b border-gray-500">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center "
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50px" height="50px" viewBox="0 0 476.669 476.669">
            <g>
              <path d="M469.668,269.394h-2.84V187.42c0-1.545-0.511-3.046-1.453-4.271l-48.377-62.835c-1.325-1.721-3.375-2.729-5.547-2.729h-96.752c-3.866,0-7,3.134-7,7v37.688h-3.934v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.865,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.135-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.617v-0.298c0-3.866-3.134-7-7-7H86.009c-3.866,0-7,3.134-7,7v0.298h-5.616v-0.298c0-3.866-3.134-7-7-7H39.934c-3.866,0-7,3.134-7,7v0.298H20.125c-3.866,0-7,3.134-7,7v100.121H7c-3.866,0-7,3.133-7,7v41.463c0,3.865,3.134,7,7,7h26.528c3.333,19.41,20.284,34.228,40.632,34.228c20.348,0,37.299-14.815,40.632-34.228h9.158c3.333,19.41,20.284,34.228,40.631,34.228c20.348,0,37.3-14.815,40.633-34.228h114.104c3.333,19.41,20.283,34.228,40.631,34.228s37.3-14.815,40.633-34.228h69.087c3.866,0,7-3.135,7-7v-41.463C476.668,272.528,473.534,269.394,469.668,269.394z M74.16,334.808c-9.346,0-16.948-7.604-16.948-16.951c0-9.345,7.603-16.947,16.948-16.947c9.345,0,16.949,7.604,16.949,16.947C91.109,327.204,83.505,334.808,74.16,334.808z M164.581,334.808c-9.347,0-16.947-7.604-16.947-16.951c0-9.345,7.601-16.947,16.947-16.947c9.345,0,16.949,7.604,16.949,16.947C181.53,327.204,173.926,334.808,164.581,334.808z M359.948,334.808c-9.346,0-16.947-7.604-16.947-16.951c0-9.345,7.603-16.947,16.947-16.947c9.344,0,16.95,7.604,16.95,16.947C376.898,327.204,369.293,334.808,359.948,334.808z M435.613,215.128l-99.028-0.043v-67.693h63.011l36.043,48.219L435.613,215.128z" fill="#000000" />
            </g>
          </svg>
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-start text-sm">
        <p className="font-semibold">Eyez On The Prize Auto-Spa</p>
        <p className="mt-2 md:mt-0 font-light">Copyright {year}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
