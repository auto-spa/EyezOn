"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import styles from './gallery.module.css'; // Import CSS module

export default function Gallery() {
  const sliderRef = useRef(null); // Ref to access slider
  const formRef = useRef(null); // Ref to access form
  const [startX, setStartX] = useState(0);
  const [left, setLeft] = useState(0);

  // Handle mouse and touch down events
  const handleStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setStartX(clientX); // Store the initial touch or click position
  };

  // Handle mouse and touch move events
  const handleMove = (e) => {
    if (startX === 0) return; // Only move if a touch or mouse down occurred

    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = clientX - startX;

    sliderRef.current.style.userSelect = 'none';
    sliderRef.current.style.cursor = 'grab';
    formRef.current.style.pointerEvents = 'none';

    // Toggle form class based on movement direction
    if (deltaX > 0) {
      formRef.current.classList.add(styles.left);
      formRef.current.classList.remove(styles.right);
    } else {
      formRef.current.classList.remove(styles.left);
      formRef.current.classList.add(styles.right);
    }

    // Adjust speed and limits
    const speed = 3;
    const newLeft = left + deltaX / speed;
    const maxLeft = formRef.current.offsetWidth - sliderRef.current.offsetWidth / 2;

    // Ensure the new position is within bounds
    if (newLeft < 0 && Math.abs(newLeft) < maxLeft) {
      formRef.current.style.setProperty('--left', `${newLeft}px`);
      setLeft(newLeft);
      setStartX(clientX); // Update the start position for smooth sliding
    }
  };

  // Handle mouse and touch end events
  const handleEnd = () => {
    setStartX(0); // Reset the start position
    sliderRef.current.style.userSelect = 'unset';
    sliderRef.current.style.cursor = 'unset';
    formRef.current.style.pointerEvents = 'unset';
    formRef.current.classList.remove(styles.left, styles.right);
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchStart={handleStart} // Support for touch start
      onTouchMove={handleMove}   // Support for touch move
      onTouchEnd={handleEnd}     // Support for touch end
    >
      <div className={styles.form} ref={formRef}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.content}>
              {/* Use Next.js Image for better optimization */}
              <Image 
                src={`/images/${index + 1}.jpg`} 
                alt={`Image ${index + 1}`} 
                width={200} 
                height={300} 
                objectFit="cover" 
              />
              <div className={styles.des}>
                <div>Image Name</div>
                <button>More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
