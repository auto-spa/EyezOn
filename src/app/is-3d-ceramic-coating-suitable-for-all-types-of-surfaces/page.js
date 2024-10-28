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
    heading: "Understanding 3D Ceramic Coating",
    sections: [
      {
        paragraph:
          "To completely understand the compatibility of 3D ceramic coating, it is important to begin by gaining an overview of its nature and properties. 3D graphene ceramic coating refers to a liquid polymer that’s used to coat the external surfaces of vehicles, boats, motorbikes, and a few structural surfaces. This coating comprises particles that chemically attach to the first paint, forming a protective layer with a few advantages, such as:",
        listItems: [
          "Enhanced Strength: 3D ceramic coatings give a solid and long-lasting barrier against a wide range of pollutants.",
          "Hydrophobic Characteristics: The coating’s hydrophobic properties cause it to repulse water, facilitating easier cleaning and minimizing water-induced harm.",
          "UV Resistance: It protects against detrimental UV rays, hence preventing the oxidation and blurring of paint.",
          "Chemical Resistance: Shows resistance to destructive chemicals, avian excrement, and plant resin."
        ],
      },
    ],
  },
  {
    heading: "Automobile Surfaces",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            3D ceramic coating is most commonly associated with automotive applications. It is suitable for all types of vehicle surfaces, including:
            </p>
          </div>
        ),
        listItems: [
          "Paint: The primary application is on the vehicle’s paintwork, enhancing its gloss and protection.",
          "Wheels: Coating on wheels provides resistance against brake dust and makes cleaning easier.",
          "Glass: It can be applied to glass surfaces, providing improved visibility during adverse weather conditions.",
          "Plastic Trim: Restoring and protecting plastic trims from fading and environmental damage."
        ],

        image: "",
      },
    ],
  },
  {
    heading: "Marine Surfaces",

    sections: [
      {
        subheading: "",
        paragraph:
          "Boats and marine vessels are also prime candidates for 3D ceramic coating:",
        listItems: [
          "Hull: Coating the hull offers protection against saltwater, algae, and oxidation.",
          "Metal: Metal surfaces, namely stainless steel and aluminum, experience improved resistance against corrosion.",
          "Gelcoat: This protective layer shields the gel coat from the harmful effects of UV radiation and environmental damage."
        ],
      },
    ],
  },
  {
    heading: "Motorcycle Surfaces",
    sections: [
      {
        paragraph:
          "Motorcycles, with their exposed surfaces, can benefit from 3D ceramic coating:",
        listItems: [
          "Paint and Metal: Enhancing the paint and protecting metal components from environmental wear.",
          "Chrome: Coating on chrome surfaces adds a layer of protection against corrosion and pitting."
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Architectural Surfaces",
    sections: [
      {
        subheading: "",
        paragraph:
          "The versatility of 3D ceramic coating extends beyond vehicles to certain architectural surfaces:",
        listItems: [
          "Exterior Walls: Protects against environmental pollutants and weathering.",
          "Glass Facades: Enhances the clarity and durability of glass exteriors.",
          "Metal Structures: Guards against rust and corrosion on metal architectural elements."
        ],
      },
    ],
  },
  {
    heading:
      "Aircraft Surfaces",
    sections: [
      {
        subheading: "",
        paragraph:
          "Even aircraft surfaces can benefit from the protective properties of 3D ceramic coating:",
        listItems: [
          "Exterior: Protects the exterior paint and metal surfaces from high-altitude exposure.",
          "Cockpit Windows: Enhances visibility and provides resistance to environmental contaminants."
        ],
      },
    ],
  },
  {
    heading: "Elevate Protection Across Surfaces And Partner with Us for Expert Ceramic Coating Services!",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Ready to experience the transformative benefits of ceramic coating across your vehicles? Partner with us for professional ceramic coating services tailored to your specific needs. Our expert team ensures meticulous application, unlocking enhanced durability, gloss, and resistance.
            </p>
            <div className="mt-2"> <p>Don’t settle for standard protection.</p> </div>
            <div className="mt-2"> <p>Elevate your surfaces with our advanced ceramic coating solutions. Contact us today to plan a discussion and find the unparalleled benefits of ceramic coating!</p> </div>
          </div>
        ),
        listItems: [
          
        ],

        image: "",
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
            {title || "Is 3D Ceramic Coating Suitable for All Types of Surfaces?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 19, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "6:29 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-19.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            The advancement of 3D ceramic coating has presented a new
            arrangement that gives improved durability, sparkle, and protection
            against a run of characteristic components. Car enthusiasts and
            surface specialists are looking into the points of interest of 3D
            ceramic coatings and inquiring about an essential inquiry: Does this
            advanced coating work well on all surface sorts? The article will
            explore the wide extent of uses for 3D car care ceramic coating,
            including its capacity to work well on many surfaces and its amazing
            transforming qualities.
          </p>
          <p className="mt-6"></p>
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
            The 3D ceramic coating has great flexibility, making it suitable for
            an extensive variety of surfaces across many industries. Despite
            whether it is used on automotive, marine, motorcycle, architectural,
            or aviation surfaces, its protective characteristics remain
            unchanged. It is important to acknowledge that the application
            procedure and specific refers to may differ based on the surface
            type.To optimize the advantages of 3D product ceramic coating car,
            it is recommended to utilize the services of noticed application
            tools. Experts can customize the application method to match the
            unique characteristics of every surface, providing the best possible
            protection and durability. With the advancement of technology, the
            development of 3D ceramic coating remains, confirming its position
            as an innovative solution for protecting surfaces in many different
            industries.
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
