"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, spring } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/bg-image.jpg')", // Ensure the image is in the public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
      className="overflow-x-hidden"
    >
      <div className="inset-0 bg-gradient-to-b from-black/90 to-purple-800/50">
        <div className="container text-white">
          <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
            {/* text content section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                  duration: 0.4,
                }}
                className="space-y-8"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight uppercase ">
                  Eyez on the Prize
                  <br />
                  <span className="uppercase text-transparent text-outline">
                    Auto Spa
                  </span>
                </h1>
                <button className="outline-btn flex justify-center items-center gap-4 group">
                 <Link href="/services">Explore</Link> 
                  <FaArrowRight className="group-hover:translate-x-2 transition" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                  duration: 0.4,
                }}
                className="bg-[#7100BB]/55 p-6 -space-y-2 lg:max-w-[500px] !mt-[30px]"
              >
                {/* feature section here */}
                <h1 className="text-3xl uppercase mb-3">
                  Extensive Car Detailing for the Valuable Care You Deserve
                </h1>
                {/* <p className="text-base leading-loose">
                  Welcome to Eyez on the Prize Auto Spa in Charlotte, where
                  expert detailing transforms your car, increasing its beauty
                  and value with impressive accuracy and care.
                </p> */}
              </motion.div>
            </div>

            {/* image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0, scale: 1.4 }}
                transition={{
                  duration: 1,
                }}
                src="/images/ford.png"
                alt="Honda Sports EV"
                className="w-[85%] pl-[3%] relative z-30 pt-[9%] md:pl-0"
              />
              {/* glowing circle  */}
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                  duration: 0.8,
                }}
                className=" border-[20px] border-[#7100BB] rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px] absolute top-0 left-1/2 glowing-shadow "
              >
                {/* bg text here  */}
                {/* <div className="absolute -top-40 left-0 z-[1]" >
                <h1 className="text-[70px] scale-130 font-bold text-cyan-200/10 leading-none">Auto Detailing</h1>
              </div> */}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
