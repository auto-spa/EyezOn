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
    heading: "What is the Use of Pressure Washers?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Using a pressure washing machine for automobile detailing offers
              numerous benefits. It efficiently removes dirt, mud, and road
              salt, especially from hard-to-reach areas like wheel wells and
              grilles.
            </p>
            <p className="mt-2">
              Additionally, pressure washers save time and effort compared to
              manual scrubbing. They ensure your car's exterior is well
              maintained, preserving its value over time.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Working Principle of Pressure Washers",
    sections: [
      {
        paragraph:
          "A pressure washer uses a motor to pressurize water from a connected source. Water flows in at low pressure and exits through a nozzle at high pressure, enabling effective cleaning without harsh chemicals.",
        image: "/images/Car-Detailing-and-Cleaning1.jpg",
      },
    ],
  },
  {
    heading: "Factors to Consider When Choosing a Pressure Washer",
    sections: [
      {
        paragraph: "When selecting a pressure washer, consider the following:",
        listItems: [
          "PSI: 1200-1900 PSI is ideal for car detailing.",
          "GPM: 1.2 to 1.6 GPM ensures efficient cleaning.",
          "Power Source: Electric washers are compact and quieter.",
          "Nozzles: Look for interchangeable nozzles, such as a 40-degree nozzle.",
          "Portability: Choose a lightweight washer with wheels for easy maneuvering.",
        ],
      },
    ],
  },
  {
    heading: "Pros and Cons of Some Common Pressure Washers",
    sections: [
      {
        subheading: "Sun Joe SPX3000 - Pros",
        listItems: [
          "Dual detergent tanks for easy soap application.",
          "2030 PSI, suitable for car detailing.",
          "Five quick-connect nozzles for versatile cleaning.",
        ],
      },
      {
        subheading: "Sun Joe SPX3000 - Cons",
        listItems: [
          "Plastic hose connections may wear over the years",
          "Somewhat bulky for smaller garage areas",
        ],
      },
      {
        subheading: "Karcher K1700 - Pros",
        listItems: [
          "1700 PSI and 1.2 GPM, best for car washing",
          "Removable detergent tank for convenient cleaning soap utility",
          "Compact design and lightweight for easy maneuverability",
        ],
      },
      {
        subheading: "Karcher K1700 - Cons",
        listItems: [
          "Shorter hose duration as compared to different models",
          "Limited nozzle options",
        ],
      },
      {
        subheading: "Greenworks GPW1501 - Pros",
        listItems: [
          "1500 PSI and 1.2 GPM, gentle on car paint",
          "Lightweight and transportable",
          "Affordable option for beginners",
        ],
      },
      {
        subheading: "Greenworks GPW1501- Cons",
        listItems: [
          "Lower PSI might struggle with very cussed filth",
          "Limited to light-responsibility cleaning responsibilities",
        ],
      },
    ],
  },
  {
    heading: "Best Practices When Using a Pressure Washer",
    sections: [
      {
        paragraph:
          "To ensure effective and safe car detailing, comply with the great practices:",
        listItems: [
          "Choose the Right Nozzle: Use a 25- to forty-diploma nozzle for laundry motors. These nozzles offer a huge spray sample that is mild on the auto’s floor.",
          "Maintain a Safe Distance: Hold the spray wand at least 6-12 inches away from the automobile’s floor to save you harm to the paint.",
          "Start from the Top: Begin washing from the top of the car and painting your way down. This allows prevent grimy water from re-soiling areas you have already wiped clean.",
          "Use Proper Detergent: Use a car-unique detergent in the pressure washing machine’s detergent tank. Avoid the usage of family cleansing merchandise that could strip wax or harm the paint.",
          "Rinse Thoroughly: After making use of cleaning soap, rinse the auto thoroughly to put off all cleaning soap residues. Leftover soap can cause streaking and harm to the paint.",
        ],
      },
    ],
  },
  {
    heading: "How to Prolong the Life of a Pressure Washer?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              To lengthen the life of a pressure washer, regular renovation, and
              the right storage are essential. After every use, flush the
              machine with easy water to take away any detergent residue, which
              could clog the pump and nozzles. Inspect hoses, seals, and
              connections frequently for wear and tear, changing any broken
              parts directly to prevent leaks and maintain superior pressure.
              Always shop the pressure washing machine in a cool, dry area, far
              away from direct daylight and moisture, to save you rust and harm
              to electrical components
            </p>
            <p className="mt-2">
              During less warm months, winterize the unit with the aid of
              including antifreeze to the pump to prevent freezing and cracking.
              Additionally, use the best nozzles and avoid walking the washer
              without water, as this will overheat the pump and reason damage.
              By following those easy protection steps, you may enlarge the
              lifespan of your pressure washing machine, ensuring it continues
              to operate effectively for years.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading:
      "Does Your Car Need Complete Detailing instead of Simple Pressure Washing?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ready to give a new, stunning look to your car? While a pressure
              washer is excellent for surface cleaning, complete detailing is
              essential to address hidden issues and provide a deep, thorough
              service. Our professional detailing service offers just that. We
              ensure every nook and corner of your car is carefully cleaned and
              maintained with our advanced tools and years of expertise. Trust
              us to keep your car looking and performing its best.
            </p>
            <p className="mt-2">
            Contact us today to schedule your comprehensive car detailing service.
            </p>
          </div>
        ),
      },
    ],
  },
];
const faqsData = [
    {
      question: "What PSI Pressure Washer for Car?",
      answer: "A pressure washing machine with a PSI type of 1200 to 1900 is right for car detailing. This variety affords sufficient pressure to cast off dirt without being unfavorable to the auto’s paint.",
    },
    {
      question: "What Soap to Use in Pressure Washer for Car?",
      answer: "Use a soap or detergent that is specifically designed for vehicle pressure washers. Avoid household detergents or dish soaps, as they could strip wax and harm the paint.",
    },
    {
      question: "What Pressure Washer Nozzle for Car?",
      answer: "The best nozzle for automobile washing is the 40-diploma nozzle. It gives a huge, gentle spray that successfully cleans the automobile’s surface without causing damage.",
    },
    {
        question: "Is it Safe to Wash a Car with a Pressure Washer?",
        answer: "Yes, it’s completely secure to wash a vehicle with a pressure washer in case you use a suitable pressure nozzle. Always maintain a secure distance from the car’s surface to avoid harm.",
      },
      {
        question: "Can I Use Any Pressure Washer on My Car?",
        answer: "Not all pressure washers are appropriate for car detailing. Choose a pressure washing machine with the proper PSI, GPM, and appropriate nozzles to ensure safe and effective cleansing without affecting the automobile’s paint.",
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
              "The Best Pressure Washers for Car Detailing and Cleaning"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 17, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "10:19 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-1.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Looking for the best pressure washers for cars? Here you can find
            the relevant information about why pressure washing has become very
            common when getting your vehicle detailed.
          </p>
          <p className="mt-6">
            This entire article on the great pressure washers for automobile
            detailing will assist you in diving into how pressure washers work,
            what to search for while selecting one, and best practices for
            durability.
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
            Reclining sofas represent the perfect blend of comfort,
            functionality, and style, making them an ideal addition to any home.
          </p>
        </div>
          {/* FAQs Section */}
          <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-600">
                {faq.question}
              </h3>
              <p className="text-md text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
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
