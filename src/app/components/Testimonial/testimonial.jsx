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
      name: "John Davis",
      role: "Baby Carer",
      date: "2023-10-15",
      profileImage: "/images/t1.jpg", // Use path from public folder
      text: "I used this website to see how my living room would look with different colors, and it saved me from making a bad paint choice. Super helpful for both interiors and exteriors!"
    },
    {
      name: "Emily Thompson",
      role: "Baby Carer",
      date: "2023-09-05",
      profileImage: "/images/t2.jpg",
      text: "I love how I can upload a picture of my house and preview different colors instantly. The exterior visualizer was especially helpful for my new siding colors!"
    },
    {
      name: "Michael Rodriguez",
      role: "Chef, Maid",
      date: "2024-08-25",
      profileImage: "/images/t3.jpg",
      text: "This site is a game-changer. I tested so many color combinations for both my living room and the exterior, and it was so easy to use. Highly recommended!"
    },
    {
      name: "Jessica Miller",
      role: "Cook",
      date: "2024-07-15",
      profileImage: "/images/t4.jpg",
      text: "The ability to preview different colors on my home is awesome, but I wish there were even more colors and textures to choose from. Still, a great tool for home designers!"
    },
    {
      name: "David Martinez",
      role: "Gardener",
      date: "2022-06-20",
      profileImage: "/images/t5.jpg",
      text: "I was stuck between a few color choices, but seeing them on my house made the decision so much easier. The tool works for both interiors and exteriors – super useful!"
    },
    {
      name: "Sarah Johnson",
      role: "Housekeeper",
      date: "2022-05-10",
      profileImage: "/images/t6.jpg",
      text: "The color preview feature really helped me see how my house would look after painting. Both the inside and outside options worked perfectly for my renovation plan."
    }
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
      <h2 className="text-5xl lg:text-7xl font-bold leading-tight uppercase pt-10 pl-10">Testimonials</h2>
      <p className="text-3xl leading-relaxed text-white pl-14 pt-4">
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
