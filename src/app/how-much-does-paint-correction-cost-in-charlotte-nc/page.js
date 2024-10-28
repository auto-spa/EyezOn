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
    heading: "What is Paint Correction?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Paint correction is an organized process meant for removing imperfections within the paintwork of a vehicle. The defects can include swirl marks, scratches, wet stains, and rust. Paint correction, in contrast with standard detailing methods, uses chemicals that are abrasive and polished to even out the paint surface, removing flaws and improving the overall clarity and depth of the paint.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Factors Influencing Paint Correction Costs",
    subheading: "",
    sections: [
      {
        paragraph:
          "",
        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading: "Extent of Paint Damage",
        paragraph: "The severity and extent of paint damage significantly impact the cost of correction. Superficial swirl marks may require less intensive correction compared to deep scratches or heavy oxidation. A thorough assessment of the paint’s condition helps determine the level of correction needed.",
        listItems: [
          
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Vehicle Classification",
        paragraph:
          "The dimensions and category of the vehicle are factors that affect the pricing of paint correction service. Regularly, the method of fixing bigger vehicles, such as SUVs and trucks, requires a greater amount of time and cash in comparison to smaller cars. Specialized care and consideration required by luxury or exotic vehicles can result in higher costs.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Paint Correction Methods",
        paragraph:
          "Paint correction covers a range of procedures and approaches, including both single-stage and multiple-stage correction. Single-stage correction is used to fix little flaws, whereas multi-stage correction is a more comprehensive technique that deals with larger scratches and pimples.",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Professional Expertise",
      paragraph:"The expertise and reputation of the paint correction professional or detailing service can affect the cost. Highly skilled professionals with a track record of successful paint corrections may charge higher fees for their services. Investing in experienced hands ensures a quality outcome."
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Location and Facility",
       paragraph:"The geographic location and the facility where the paint correction takes place can contribute to cost variations. In urban areas like Charlotte, NC, where the cost of living may be higher, paint correction service may be priced accordingly. Additionally, state-of-the-art facilities equipped with advanced tools and technology may command higher paint correction costs."
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Additional Services",
       paragraph:"Some paint correction packages may include additional services such as ceramic coating or paint protection film installation. These supplementary services enhance the longevity of the correction results but also contribute to the overall cost. Discussing these options with the detailing professional allows you to tailor the service to your preferences and budget."
      },
    ],
  },
  {
    heading: "Estimating Paint Correction Costs in Charlotte, NC:",
    sections: [
      {
        paragraph:
          "The paint correction cost in Charlotte, NC often varies from $300 to $1,500 or higher, based on the aforementioned considerations..",
        image: "",
      },
    ],
  },
  {
    heading: "Benefits of Paint Correction",
    sections: [
      {
        paragraph:
          "",
        listItems: [
          "Improved Theme: Paint repair renews the vibrant hue and shine of your vehicle, enhancing its overall visual attraction.",
          "Enhanced Resale Value: A carefully kept exterior positively impacts the financial value of your vehicle during the process of selling or trading it in.",
          "Prevention of Additional Harm: Correcting flaws creates a safeguarding barrier, reducing the possibility of additional harm caused by external factors.",
        ],
      },
    ],
  },
  {
    heading: "Upgrade the Visual Appeal of Your Vehicle and Look for Professional Advice for Paint Correction",
    sections: [
      {
        paragraph:
          "Are you arranged to improve the visual attractiveness of your car by utilizing expert paint correction techniques? Reach out to us rapidly to organize a meeting with our profoundly talented staff or paint correction cost, that specializes in paint correction service in Charlotte, NC. Our highly qualified specialists are committed to achieving extraordinary things, whether it’s fixing scratches or restoring your car’s paintwork. Avoid any flaws from detracting from the, by and large, look of your vehicle",
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
            {title || "How Much Does Paint Correction Cost in Charlotte, NC?"}
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
            <InfoItem icon={<FaClock />} text={time || "6:17 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-20.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
          The exterior of your car, exposed to the outside and regular use, may slowly lose its shine as a result of imperfections such as swirl marks, scratches, and rust. When standard washing and waxing strategies are not sufficient, paint correction cost comes as an innovative treatment for returning your vehicle’s paintwork to its past state of excellence. This article will explore the various aspects that affect the costs of paint correction in Charlotte, NC. It is important to provide you with important data to assist you make informed choices on the repair of your car’s appearance.
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
          Participating in paint correction is a proactive measure to maintain and enhance the look of your car’s exterior. To make well-informed selections for the extent of paint repair required for your car, it is vital to get several aspects that affect the paint correction cost in Charlotte, NC. Paint repair could be a preparation that moves forward the appearance of your car by treating both small scratches and more substantial damage, resulting in a refreshed and cleaned see that is certain to catch people’s attention.
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
