"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebookF, FaYelp, FaInstagram, FaTiktok, FaYoutube, FaPinterest } from 'react-icons/fa';


function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Clear the form fields after submission
    reset();
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-r from-black via-black to-purple-900">
    <div className="bg-gradient-to-r from-black via-black to-purple-900">
      {/* hero section  */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-black via-black to-purple-900 bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/junk-gallery-2.png')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-[#7100BB]" />
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div className=" text-white flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-purple-500">
          Contact Us
        </span>

        <p className="mt-2 text-md text-opacity-85 font_barlow text-center md:w-[35%]">
          Connect with Us, Your Journey Starts Here
        </p>
      </div>

      {/* book now  */}
      <div className="min-h-[70vh] rounded-3xl grid grid-cols-1 md:grid-cols-[1fr_1fr]  m-5 md:m-20 pb-24">
        {/* left side  */}
        <div className="text-white p-10 bg-[#f4f4f4]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className={ `text-black mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                  errors.name ? "border-purple-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-purple-500 text-xs mt-2">Name is required</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                className={`text-black mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                  errors.phone ? "border-purple-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-purple-500 text-xs mt-2">Phone is required</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className={`text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                  errors.email ? "border-purple-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-purple-500text-xs mt-2">Email is required</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: true })}
                className={`
                   text-black mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                  errors.subject ? "border-purple-500" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-purple-500 text-xs mt-2">
                  Subject is required
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows="4"
                className="text-black mt-1  block w-full px-3 py-2 border border-purple-500 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-4 mt-10 rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* right side  */}
        <div className="w-full h-full">
  <div className=" text-white p-10 hidden md:block">
    <span className="inline-block text-xl uppercase text-purple-500">
      Contact Us
    </span>

    <h1 className="mt-10 text-3xl font-extrabold">
      Connect with Us, Your Journey Starts Here
    </h1>

    <p className="mt-2 text-lg text-opacity-85 font_barlow text-justify">
      Reach out effortlessly. Our Contact Us page ensures seamless
      communication. Share your queries, feedback, or collaboration
      ideas. We are here to listen and assist.
    </p>

    {/* Contact Information */}
    <div className="mt-4">
      <div className="mb-2 flex items-center">
        <FaPhone className="mr-2 text-purple-500" /> {/* Phone Icon */}
        <a href="tel:+19803070431" className="text-sm group-hover:underline group-hover:text-purple-500">
        (980) 307-0431
        </a>
      </div>
      
      <div className="mb-2 flex items-center">
        <FaEnvelope className="mr-2 text-purple-500" /> {/* Email Icon */}
        <a href="mailto:eyezontheprizeautospa@gmail.com" className="text-sm group-hover:underline group-hover:text-purple-500">
        eyezontheprizeautospa@gmail.com
        </a>
      </div>
      
      <div className="mb-2 flex items-center">
        <FaClock className="mr-2 text-purple-500" /> {/* Time Icon */}
        <span>Mon to Sun: 24 hours</span>
      </div>
      
      <div className="mb-2 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-purple-500" /> {/* Location Icon */}
        <span>Fairview Rd, Charlotte, NC 28210</span>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <a href="https://www.facebook.com/EyezPrizeAutoSpa" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-purple-500" />
        </a>
        
        <a href="https://www.instagram.com/eyezontheprizeclt/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-purple-500" />
        </a>
        <a href="https://www.tiktok.com/@eyezontheprizeautospa" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-purple-500" />
        </a>
        <a href="https://www.youtube.com/@EyezonAutospa" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-purple-500" />
        </a>
        <a href="https://www.pinterest.com/eyezona/" target="_blank" rel="noopener noreferrer">
          <FaPinterest className="text-purple-500" />
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
    </div>
  );
}

export default ContactUs;
