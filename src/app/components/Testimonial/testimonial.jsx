"use client";
import React, { useState, useEffect } from "react";
import styles from "./Testimonial.module.css";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from 'next/image'; // Import Next.js Image component
import { FaStar } from 'react-icons/fa'; // Import star icon for rating



export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Gregory Keith",
      
      date: "2024-01-15",
      profileImage: "/images/t1.png", // Use path from public folder
      text: "Very detail oriented and professional work. Thank you!"
    },
    {
      name: "Dai Dai",
      
      date: "2024-01-07",
      profileImage: "/images/t2.png",
      text: "Excellent service like how he takes his time and thorough with the pricing. Very thrilled to find a great detailer who pays attention to detail and gives you knowledge as well."
    },
    {
      name: "Tasky HD",
      
      date: "2024-02-05",
      profileImage: "/images/t3.png",
      text: "Saved my car's exterior from a close encounter with some tire sealing foam.Now the paint is slick and clean like straight off the lot !"
    },
    {
      name: "Annicka Fisher",
      
      date: "2024-02-20",
      profileImage: "/images/t4.png",
      text: "Would highly recommend! My car was in desperate need of a good detail, and it now looks brand new. I was shocked to see how good it looks and the difference it made."
    },
    {
      name: "Brian Lundeen",
      
      date: "2024-02-27",
      profileImage: "/images/t5.png",
      text: "Jacob helped me avoid a complete catastrophe. I had a gallon of paint spill all over my passenger seat and carpet all throughout my truck. I gave Jacob a call, and.."
    },
    {
      name: "Kelli Corneau",
      
      date: "2024-02-28",
      profileImage: "/images/t6.png",
      text: "They did a great job and communicated what he thought was best for the condition my car was in. My car was brought back to life after a kid and two dogs being inside!.."
    },
    // {
    //   name: "Sarah Johnson",
     
    //   date: "2022-05-10",
    //   profileImage: "/images/t7.png",
    //   text: "The color preview feature really helped me see how my house would look after painting. Both the inside and outside options worked perfectly for my renovation plan."
    // },
    // {
    //   name: "Sarah Johnson",
      
    //   date: "2022-05-10",
    //   profileImage: "/images/t8.png",
    //   text: "The color preview feature really helped me see how my house would look after painting. Both the inside and outside options worked perfectly for my renovation plan."
    // }
  ];

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-r from-black via-purple-800 to-black bg-opacity-50 text-white ">
      <h2 className=" text-center  text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight uppercase pt-10 pl-10">Testimonials</h2>
      <p className="text-1xl lg:text-3xl leading-relaxed text-white pl-14 pt-4 text-center">
      What Our Client Says
                </p>
      <div className={styles.testimonialSection}>
        <button onClick={handlePrev} className={styles.arrowButton}>{"<"}</button>
        <div className={styles.testimonialWrapper}>
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className={styles.testimonialContainer}>
              <Image 
                src="/images/icon.svg" 
                alt="Google Icon" 
                width={24} 
                height={24} 
                className={styles.googleIcon} 
              /> {/* Google Icon */}
              <div className={styles.testimonialHeader}>
                <Image
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className={styles.profileImage}
                />
                <div className={styles.nameContainer}>
                  <h4 className={styles.heading}>{testimonial.name}</h4>
                  <p className={styles.date}>{testimonial.date}</p>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.testimonialBody}>
                <p className={styles.paragraph}>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className={styles.arrowButton}>{">"}</button>
      </div>
    </div>
  );
}
