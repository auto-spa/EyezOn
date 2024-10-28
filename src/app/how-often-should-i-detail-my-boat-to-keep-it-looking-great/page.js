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
    heading: "Factors Affecting Detailing Frequency",
    sections: [
      {
        paragraph: "Several factors influence how often you should detail your boat:",
        listItems: [
          "Frequency of Use: Boats used frequently, especially in saltwater or freshwater bodies with high algae or debris content, require more frequent detailing to remove buildup and prevent corrosion.",
          "Environmental Conditions: Boats exposed to harsh environmental conditions such as saltwater, UV rays, and air pollution may require more frequent detailing to protect surfaces from damage.",
          "Storage Conditions: How is your boat stored when not in use? Whether indoors, outdoors, covered, or uncovered. It affects the accumulation of dirt, grime, and oxidation.",
          "Type of Boat and Materials: Different types of boats (e.g., fiberglass, aluminum, wood) and materials (e.g., gel coat, vinyl, upholstery) have varying maintenance requirements that dictate boat detailing frequency",
       
        ],
        
      
      },
    ],
  },
  {
    heading: "Recommended Detailing Schedule",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            The ideal schedule for your boat detail depends on these factors:
            </p>
            
          </div>
        ),
        listItems:[
          "Weekly Maintenance: For boats used frequently or exposed to harsh conditions, perform weekly maintenance tasks. Such as rinsing with fresh water to remove salt and debris, wiping down surfaces, and inspecting for any signs of damage or wear. This regular upkeep helps to stop the collection of dirt and extends the time between detailed cleanings. You can search boat detailing near me in Charlotte for maintenance of your boat.",
          "Bi-Monthly to Quarterly Detailing: Schedule a more comprehensive detailing every 2 to 3 months, depending on usage and environmental exposure. This involves washing the boat thoroughly with marine-grade soap, cleaning and conditioning surfaces (e.g., fiberglass, vinyl, metal), polishing to restore showroom shine, and applying wax or protective coatings to safeguard against UV rays and saltwater.",
          "Annual or Seasonal Detailing: Plan for a thorough annual or seasonal detailing before or after the boating season. This includes a deep clean of all surfaces, inspecting and treating the hull, topsides, and interior, and addressing any repairs or maintenance needs identified during the inspection."

        ],

        image: "",
      },
    ],
  },
  {
    heading: "Signs Your Boat Needs Detailing",

    sections: [
      {
        subheading: "",
        paragraph:
          "Here are common signs that indicate your boat is due for detailing:",
        listItems: [
          "Dull or Faded Finish: If the boat’s exterior appears dull, faded, or lacks luster. It is time for a thorough cleaning and waxing to restore shine and protect the finish.",
          "Visible Stains or Water Spots: Stubborn stains, water spots, or algae growth on the hull, deck, or upholstery indicate the need for cleaning and surface treatment.",
          "Salt or Corrosion Buildup: Salt deposits and corrosion are common issues in saltwater environments. Regular cleaning and protective treatments are essential to prevent damage with the help of boat detailers near me in Charlotte with modern cleaning equipment.",
          "Mold or Mildew: Moisture can lead to mold and mildew growth on upholstery, carpets, and other surfaces. Address these issues promptly to prevent further damage and maintain a clean interior.",
          
        ],
      },
    ],
  },
  {
    heading: "DIY vs. Professional Detailing",
    sections: [
      {
        paragraph:
          "Some boat owners prefer DIY boat detail to save costs and maintain control over the process. Professional detailing offers several advantages, especially for thorough cleanings and specialized treatments:",
        listItems: [
          "Expertise and Equipment: Professional detailers have the knowledge, experience, and specialized equipment to tackle tough stains, restore finishes, and apply protective coatings effectively.",
          "Time-Saving: Detailing a boat can be time-consuming, especially for larger vessels or complex surfaces. Professional detailers efficiently handle the job, allowing you to focus on other aspects of boat maintenance.",
          "Quality Results: Professional detailing services deliver high-quality results. Moreover, ensuring your boat looks its best and is adequately protected against environmental damage.",
          ,
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Is Your Boat Ready to Shine on the Water?",
    sections: [
      {
        paragraph:
          "Ensure your vessel always makes a grand splash with our specialized Boat Detailing Services. From thorough cleans that strip away the harsh remnants of salt and sun, to waxing that leaves a gleaming, protective layer against the elements, we handle every aspect of boat detailing with precision and care. Don’t let the environment dull your boat’s sparkle. Our expertise in boat maintenance will ensure your boat not only looks spectacular but operates at its best.",
        listItems: [
          "Ready to see your boat in its best light and turn heads on the water?",
          
        ],
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
              "How Often Should I Detail My Boat to Keep It Looking Great?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem icon={<FaCalendarAlt />} text={date || "May 3, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "9:21 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-12.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Proper maintenance and detailing are essential to keep your boat
            looking its best and preserve its value over time. Regular detailing
            helps protect the boat’s surfaces from environmental factors and
            ensures a clean and attractive appearance. It’s time to explore how
            often you should do your boat detail based on usage, environmental
            conditions, and specific maintenance needs.
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
            The frequency of your boat detail depends on various factors,
            including usage, environmental conditions, and storage practices.
            Regular maintenance is key to preserving the appearance and value of
            your boat. Consider a combination of weekly upkeep, bi-monthly to
            quarterly cleanings, and annual or seasonal detailing. To keep your
            boat looking great and functioning optimally. Pay attention to signs
            that indicate your boat needs detailing. Additionally, don’t
            hesitate to enlist professional help for thorough cleanings and
            specialized treatments. With proper care and maintenance, your boat
            will remain in excellent condition and provide years of enjoyment on
            the water
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
