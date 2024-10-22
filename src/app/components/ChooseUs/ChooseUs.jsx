"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ChooseUs = () => {
  const progressVariants = {
    initial: { width: "0%" },
    animate: (customWidth) => ({
      width: `${customWidth}%`,
      transition: { duration: 2, ease: "easeInOut" },
    }),
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold uppercase mb-8">Why Choose Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Reliable Auto Detailing in Charlotte Where Every Car Gets the VIP
              Treatment It Deserves!
            </h3>
            <p className="text-lg mb-8">
              At Eyez on the Prize Auto Spa, we take vehicle detailing to the
              next level. Our expert group is dedicated to creating the shine of
              your vehicle, interior and exterior, through the use of excellent
              products and the latest techniques. We know how important your
              vehicle is to you, so we customized our services to meet your
              unique wishes, ensuring an ideal finish each time. From deep
              indoor cleaning to perfect outdoor polishing, we guarantee your
              vehicle’s look will be outstanding.
            </p>

            {/* Progress Bars with Animation on Scroll */}
            <div className="space-y-6">
              {[
                { label: "Shine Guarantee", value: 99.99 },
                { label: "Customer Satisfaction", value: 99.99 },
              ].map((progress, index) => (
                <div key={index}>
                  <label className="block mb-2 font-semibold">
                    {progress.label}
                  </label>
                  <div className="w-full bg-gray-300 rounded-full h-6">
                    <motion.div
                      className="bg-purple-700 h-6 rounded-full flex items-center justify-end pr-4"
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.8 }}
                      custom={progress.value}
                      variants={progressVariants}
                    >
                      <span className="text-white text-sm font-semibold">
                        {progress.value}%
                      </span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Book Now Button */}
            <Link href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services">
              <button className="mt-8 inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-500 transition">
                Book Now
              </button>
            </Link>
          </div>

          {/* Right Section - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-purple-700 p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🚗</div>
                <h4 className="text-xl font-semibold">Our Mission</h4>
              </div>
              <p>
                To provide top-tier auto detailing services that exceed customer
                expectations, ensuring every vehicle looks and feels brand new.
              </p>
            </div>

            <div className="card overflow-hidden shadow-lg">
              <Image
                src="/images/choose-us.jpg"
                alt="Car detailing"
                width={400}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="card overflow-hidden shadow-lg">
              <Image
                src="/images/luxury-detailing.png"
                alt="Engine cleaning"
                width={400}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="card bg-purple-700 p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">💡</div>
                <h4 className="text-xl font-semibold">Our Vision</h4>
              </div>
              <p>To become the most trusted and preferred auto detailing service in Charlotte, known for our commitment to quality, sustainability, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
