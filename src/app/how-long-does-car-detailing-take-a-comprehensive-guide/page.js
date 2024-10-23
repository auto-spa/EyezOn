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
    heading: "Answer: How Long Does It Take to Detail a Car?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The time wanted for a full-detail car wash depends on the
              automobile’s size, condition, and the selected detailing service.
              A simple complete-detail wash normally takes 2-4 hours, even as a
              complete element can close a full day, depending on the depth of
              the provider. Each minute spent detailing complements the car’s
              safety and look. Regular detailing now not simplest keeps your
              automobile searching new but additionally allows preserve its
              price over time.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "The Basics of Car Detailing",
    subheading: "What is Car Detailing?",
    sections: [
      {
        paragraph:
          "Car detailing isn’t your average car wash. It’s a careful process aimed at revitalizing your vehicle’s appearance and safeguarding it from wear and tear. This comprehensive service goes beyond the surface, addressing both interior and exterior aspects of your car.",
        image: "",
      },
    ],
  },
  {
    heading: "Different Levels of Detailing",

    sections: [
      {
        subheading: "Car detailing comes in various flavors:",
        paragraph: "",
        listItems: [
          "Basic Detailing: Focused on cleaning and protecting the exterior.",
          "Full Detailing: A thorough overhaul of both the interior and exterior, including paint correction and upholstery cleaning.",
          "Custom Detailing: Tailored solutions to meet specific preferences or address particular issues.",
        ],
      },
    ],
  },
  {
    heading: "Is Car Detailing Good for a Car?",
    sections: [
      {
        paragraph:
          "Full-detail car wash offers more than simply a smooth look. It provides safety by casting off contaminants and making use of coatings to save you paint damage, retaining your automobile’s floor in outstanding circumstances. Interior detailing guarantees a clean, allergen-free cabin, enhancing consolation and putting off awful odors. Regular detailing can also boost your car’s resale cost by way of demonstrating that it’s been nicely maintained. Additionally, detailing can assist pick out ability issues early, along with rust or chipped paint, permitting you to address those troubles earlier than they become costly repairs.",
        listItems: [],
        image: "/images/istockphoto-1068271342-612x612-1-300x200.jpg",
      },
    ],
  },
  {
    heading: "What Does a Full Car Detail Include?",
    sections: [
      {
        paragraph:
          "A complete car interior exterior cleansing is a thorough procedure masking every part of your vehicle. It consists of outside washing, waxing, and sharpening, as well as deep cleansing the indoors. The outdoors is wiped clean to take away dirt and contaminants before making use of a protective layer. The interior is vacuumed, steamed, and conditioned, with a special system used to save you harm and ensure a smooth, fresh finish.",
      },
    ],
  },
  {
    heading: "Factors Affecting Detailing Time",
    sections: [
      {
        subheading: "",
        listItems: [
          "Vehicle Size and Type: Smaller vehicles typically require less time compared to larger ones like SUVs or trucks. High-end luxury cars with intricate features may also demand additional time and attention.",
          "Current Condition: The state of your car plays a significant role in detailing time. Neglected or heavily soiled vehicles take longer to restore. Stains, scratches, and paint imperfections can extend the detailing process",
          "Selected Detailing Package: The chosen detailing package sets the stage for the duration of the service. Naturally, more comprehensive packages entail a longer time commitment.",
        ],
      },
    ],
  },
  {
    heading: "Exterior Car Detailing",
    sections: [
      {
        subheading: "",
        listItems: [
          "Washing and Prepping: The exterior gets a thorough cleaning, including wheels, tires, and the undercarriage. Stubborn contaminants like dirt, grime, and road salt are banished.",
          "Paint Correction: Imperfections such as swirl marks, scratches, and oxidation are addressed. Extensive polishing and buffing restore your car’s paint to a dazzling finish.",
          "Waxing and Sealant: Protection is key! A layer of wax or sealant is applied to shield the paint from environmental elements. Expect an added layer of shine and longevity.",
        ],
      },
    ],
  },
  {
    heading: "Interior Car Detailing",
    sections: [
      {
        subheading: "",
        listItems: [
          "Vacuuming and Cleaning: The interior gets a makeover too. Debris, dust, and dirt are meticulously removed from all surfaces. High-touch areas are disinfected for a clean and safe environment",
          "Upholstery and Carpet Cleaning: Stains and spills on seats, carpets, and floor mats are treated. Deep cleaning through steam cleaning or shampooing restores freshness.",
          "Dashboard and Trim: Interior surfaces like the dashboard, door panels, and trim are cleaned and conditioned. Protection against fading and cracking is part of the deal. Windows and Glass: Say goodbye to streaks! Interior and exterior windows receive a thorough cleaning and polish. Any stubborn adhesive residue or tinting is expertly removed.",
        ],
      },
    ],
  },
  {
    heading: "How Long Does Interior Detailing Take To Dry?",
    sections: [
      {
        paragraph:
          "Interior detailing typically requires 4 to 6 hours to fully dry, depending on the goods used and the climate. Adequate drying time is essential to prevent lingering moisture that may cause odors or mold. Humidity, airflow, and the exceptional of equipment can affect drying instances, with higher humidity extending the technique. In dry, nicely ventilated regions, drying can be faster. To obtain a spotless interior, use microfiber cloths, mild cleaning solutions, and a vacuum. Additionally, keep away from direct daylight in the course of drying to save you from streaking or choppy drying.",
        image: "/images/What-is-Car-Detailing-1024x683.png",
      },
    ],
  },
  {
    heading: "When Should You Schedule Your Next Detailing Session?",
    sections: [
      {
        paragraph:
          "Now, let’s talk about when to schedule your next car detailing session. The ideal frequency depends on your car’s usage and environmental factors. Here are some general guidelines:",
        listItems: [
          "Every 36 Months: For daily drivers exposed to regular wear and tear, a detailing session every 36 months keeps your vehicle in tip-top shape.",
          "Every Change of Season: If you live in an area with distinct seasons, consider detailing your car at the start of each season to prepare it for the specific challenges that season brings. After Special Events: After long road trips, beach vacations, or other adventures that leave your car looking worse for wear, treat it to a detailing session to bring it back to its prime.",
          "",
        ],
      },
    ],
  },
  {
    heading: "Why Regular Detailing is Essential?",
    sections: [
      {
        paragraph:
          "Regular indoors and exterior detailing is crucial for keeping your vehicle. It protects the paint, makes the interior easy, and ensures the engine bay is tidy. Experts advise detailing at least twice a year to hold appearance and price. This funding guards against environmental damage and enables preserving resale value.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Is Your Car Looking Dull and Worn Out?",
    sections: [
      {
        paragraph:
          "A complete car detail can deliver once more the shine and luxury you once needed. Our professional vehicle detailing services will rework your car interiors and out, making it appear and cost present-day. We use the most effective terrific products and strategies to make a radical, stable smooth that protects your car’s cost and enhances your riding level.",
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
            {title || "How Long Does Car Detailing Take? A Comprehensive Guide"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 10, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "10:00 am"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-3.png"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Hey there, fellow car enthusiasts! Whether you’re passionate about
            your vehicle or just want your daily driver to shine, understanding
            how long car detailing takes is essential. This article dives into
            the specifics of car detailing, the advantages it offers, and why
            it’s more than just a cosmetic development. From knowledge of the
            time commitment to knowing what’s included in a whole vehicle
            element and how much time it takes to fully detail a car, we will
            explore how vehicle detailing enhances your car’s situation and
            appearance.
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
            The duration of car detailing varies based on factors like your
            vehicle’s size, condition, and the detailing package you choose.
            Effective communication with your detailing professional is key to
            getting an accurate time estimate. Remember, car detailing is an
            investment in your vehicle’s beauty and value. Whether you opt for a
            basic wash or go all out with a full detailing package, the results
            will leave you beaming with pride, and scheduling regular sessions
            will keep your car looking its best year-round. Happy detailing!
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
