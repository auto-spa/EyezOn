"use client";
import React, { useState } from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const services = [
  {
    step: "01",
    name: "Automotive aesthetics",
    imageUrl: "/images/card-1.webp",
    description:
      "Eyez at the Prize Auto Spa offers superior automotive aesthetics offerings, improving your car’s look with accurate detailing, paint correction, and ceramic coatings for an ideal, showroom-quality finish.",
  },
  {
    step: "02",
    name: "Ceramic Coating",
    imageUrl: "/images/card-2.png",
    description:
      "Experience the ultimate protection with Eyez on the Prize Auto Spa’s Ceramic Coating service. Our advanced coating ensures strong shine and superior defense against environmental damage, keeping your car looking perfect.",
  },
  {
    step: "03",
    name: "Automotive Car wash",
    imageUrl: "/images/card-3.png",
    description:
      "Experience superior automotive car wash offerings at Eyez at the Prize Auto Spa. We make certain your car shines with a thorough cleaning, top-class products, and amazing attention to detail. Drive away shining!",
  },
];

const FlipCardComponent = () => {
  const [flipped, setFlipped] = useState(Array(services.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="py-16 mx-auto sm:py-20 bg-gradient-to-r from-purple-700 via-black to-purple-700 bg-opacity-50 text-white">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight uppercase">
            Services
          </h2>
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`group h-96 w-96 [perspective:1000px]`}
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
                    flipped[index] || "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* Front face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {service.imageUrl && (
                      <Image
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        src={service.imageUrl}
                        alt={service.name}
                        width={320}
                        height={320}
                      />
                    )}
                    <p className="md:my-6 text-2xl">{service.name}</p>
                  </div>

                  {/* Back face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-[#2e0d44] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {service.name}
                      </h2>
                      <p className="text-lg text-pretty text-center mb-4">
                        {service.description}
                      </p>
                      <a href="tel:+19803070431" className="inline-flex">
                        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                          <span>Schedule Service</span>
                          <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipCardComponent;
