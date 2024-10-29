import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

// Updated Data Structure
const defaultData = [
  {
    heading: "Why Engine Cleaning Matters",
    sections: [
      {
        paragraph:
          "A clean engine is more than just a cosmetic preference; it’s a crucial aspect of preventive maintenance. Over time, dirt, grease, and debris accumulate on engine components, hindering their functionality. Regular cleaning prevents the buildup of contaminants that can lead to corrosion and diminished performance.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Necessary Tools and Materials",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Before diving into the cleaning process, gather the following tools and materials:",
          "Safety Gear: Ensure you have gloves and safety goggles to protect yourself.",
          "Cleaning Solution: Choose a degreaser or an engine cleaning solution suitable for your vehicle.",
          "Soft-Bristled Brush: Ideal for scrubbing away dirt without causing damage.",
          "Plastic Bags or Covers: Safeguard sensitive components such as the alternator and air intake.",
          "Water Hose: For rinsing off the cleaning solution.",
        ],

        image: "",
      },
    ],
  },
  {
    heading: "Step-by-Step Cleaning Process",

    sections: [
      {
        subheading: "",
        paragraph: "",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "1. Preparing the Engine",
        paragraph:
          "Start by disconnecting the car battery to ensure safety during the cleaning process. Cover sensitive components such as the alternator, air intake, and electrical components with plastic bags or covers",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "2. Applying the Cleaning Solution",
        paragraph:
          "Spray the engine generously with the chosen cleaning solution, ensuring even coverage. Allow the solution to sit for a few minutes to break down the accumulated grime and grease.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "3. Scrubbing and Agitating",
        paragraph:
          "Using a soft-bristled brush, gently scrub the engine components to dislodge stubborn dirt. Pay special attention to areas with heavy buildup, such as the engine block and surrounding areas.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "4. Rinsing Off",
        paragraph:
          "Thoroughly rinse the engine with a water hose, ensuring all cleaning solutions and loosened debris are washed away. Be cautious around electrical components and connectors.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "5. Drying and Final Checks",
        paragraph:
          "Allow the engine to air-dry or use a clean, dry cloth to speed up the process. Reconnect the car battery and remove any protective covers. Conduct a final inspection to ensure no residue remains on the engine.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Take the Next Step Towards Automotive Excellence!",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              After delving into this comprehensive guide on engine cleaning,
              it’s time to turn knowledge into action. Your vehicle deserves the
              best, and at Eyez on the Prize Auto Spa, we’re committed to
              ensuring it receives just that.
            </p>
            <p className="mt-2">
              Ready to witness the transformative impact of a meticulously
              cleaned engine on your vehicle’s performance and longevity? Look
              no further. Trust in our expertise to guide you through the
              process with precision and care.
            </p>
            <p className="mt-2">
              For unparalleled detailing and a commitment to optimal automotive
              health, reach out to us today. Call (980) 307-0431, email us at
              eyezontheprizeautospa@gmail.com or visit our website Eyez on the
              Prize Auto Spa. Let us be your partner in achieving a vehicle that
              not only looks impeccable but operates at its peak for years to
              come.
            </p>
            <p className="mt-2">
              Elevate your driving experience – because your vehicle deserves
              nothing but the best. Contact Eyez on the Prize Auto Spa for
              automotive detailing excellence
            </p>
          </div>
        ),
        listItems: [],
      },
    ],
  },
  
];
const faqsData = [
  {
    question: "What PSI Pressure Washer for Car?",
    answer:
      "A pressure washing machine with a PSI type of 1200 to 1900 is right for car detailing. This variety affords sufficient pressure to cast off dirt without being unfavorable to the auto’s paint.",
  },
  {
    question: "What Soap to Use in Pressure Washer for Car?",
    answer:
      "Use a soap or detergent that is specifically designed for vehicle pressure washers. Avoid household detergents or dish soaps, as they could strip wax and harm the paint.",
  },
  {
    question: "What Pressure Washer Nozzle for Car?",
    answer:
      "The best nozzle for automobile washing is the 40-diploma nozzle. It gives a huge, gentle spray that successfully cleans the automobile’s surface without causing damage.",
  },
  {
    question: "Is it Safe to Wash a Car with a Pressure Washer?",
    answer:
      "Yes, it’s completely secure to wash a vehicle with a pressure washer in case you use a suitable pressure nozzle. Always maintain a secure distance from the car’s surface to avoid harm.",
  },
  {
    question: "Can I Use Any Pressure Washer on My Car?",
    answer:
      "Not all pressure washers are appropriate for car detailing. Choose a pressure washing machine with the proper PSI, GPM, and appropriate nozzles to ensure safe and effective cleansing without affecting the automobile’s paint.",
  },
];
const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-purple-500 to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title ||
              "Comprehensive Guide to Engine Cleaning for Peak Performance"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 15, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:21 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-27.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            In the quest for peak vehicle performance, a pristine engine is
            non-negotiable. At Eyez on the Prize Auto Spa, we grasp the vital
            importance of engine cleanliness. In this detailed guide, we unveil
            the fundamental steps to meticulously cleanse your car’s engine,
            ensuring it operates at its best.
          </p>
          <p className="mt-6">
            Engine maintenance extends beyond aesthetics; it’s a preventive
            ritual crucial for sustained functionality. In the course of
            temporal progression, sediments of filth, lubricant residues, and
            detritus amass the intricacies of engine constituents, impeding
            their operational efficacy. Routine purification serves as a
            deterrent against the accretion of impurities capable of inducing
            corrosion and the attenuation of functional prowess. Requisite
            Implements and Substances Before immersing oneself in the purgation
            procedure, amass the ensuing implements and substances:
          </p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-600">
              {item.heading}
            </h2>

            {item.sections.map((section, secIndex) => (
              <div key={secIndex} className="mt-4">
                {section.subheading && (
                  <h3 className="text-xl font-semibold text-white mt-2">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraph && (
                  <div className="text-md text-white mt-2">
                    {section.paragraph}
                  </div>
                )}

                {section.image && (
                  <div className="my-4">
                    <img
                      src={section.image}
                      alt={section.subheading || item.heading}
                      className="w-3/4 max-w-md h-auto rounded-lg"
                    />
                  </div>
                )}

                {section.listItems && (
                  <ul className="list-disc list-inside text-white mt-2">
                    {section.listItems.map((listItem, liIndex) => (
                      <li key={liIndex} className="ml-4">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-8">
          <Link href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-[#7100BB] hover:bg-black hover:text-[#7100BB] transition-all duration-300">
              Booking
            </button>
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">Conclusion</h2>
          <p className="text-md text-white mt-2">
            Regularly maintaining your car’s engine proves to be a
            straightforward yet highly effective method to guarantee optimal
            performance and longevity. By adhering to the comprehensive guide
            provided by Eyez on the Prize Auto Spa, you not only elevate the
            visual appeal of your vehicle but also play a pivotal role in
            enhancing its overall health and efficiency.
          </p>
          <p className="text-md text-white mt-2">
            The significance of embracing the habit of engine cleaning goes
            beyond mere aesthetics. It directly impacts the sustained well-being
            of your cherished vehicle. A well-cleaned engine translates to
            improved functionality, reduced risk of corrosion, and heightened
            efficiency in the long run.
          </p>
          <p className="text-md text-white mt-2">
            So, make engine cleaning a regular part of your vehicle maintenance
            routine. Witness firsthand the transformative difference it can make
            in the prolonged performance and well-maintained state of your
            beloved vehicle. Trust Eyez on the Prize Auto Spa to guide you on
            this journey towards ensuring your vehicle not only looks good but
            performs at its peak for years to come.
          </p>
        </div>
        {/* FAQs Section */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-600">
                {faq.question}
              </h3>
              <p className="text-md text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

// InfoItem Component for Header Icons
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 w-1/2 sm:w-1/4 md:w-auto mt-2 sm:mt-0">
    {icon}
    <span>{text}</span>
  </div>
);

export default Blog1;
