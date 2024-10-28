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
    heading: "Understanding Micro Scratches on Car",
    sections: [
      {
        paragraph:
          "Micro scratches also known as swirl marks, are tiny and frequently invisible scratches that develop on the exterior of a car’s paint. These can arise from different reasons, such as improper cleaning strategies, harsh chemicals, or indeed being exposed to serious weather. Although little scratches may not affect the quality of the paint, they may reduce the overall visual value of your car.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Fixing Micro Scratches On Car",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
             
            </p>
          </div>
        ),
        listItems: [],

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading: "Washing and Prepping",
        paragraph:
          "Before addressing the micro scratches on car, start by thoroughly washing your car using a high-quality car wash soap. This removes any dirt or debris that could potentially worsen the scratches during the repair process. Once clean, dry the car completely.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Inspecting the Severity",
        paragraph:
          "Carefully inspect the micro scratches on car to determine their severity. If the scratches are superficial and haven’t penetrated the clear coat, you can likely address them with DIY methods. However, deeper scratches may require professional assistance",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "DIY Scratch Remover",
    sections: [
      {
        subheading: "",
        paragraph:
          "To address minor scratches on rental car, it is recommended to utilize a solid scratch remover or a specific cleaning compound. Take a small amount of the substance and apply it onto a microfiber cloth that has been cleaned. Proceed to gently rub the cloth onto the scratched area using a circular motion. Follow the product instructions for the best results for micro scratches on car.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "Toothpaste as a DIY Solution",
        paragraph:
          "Surprisingly, toothpaste can act as a gentle rough and help reduce the appearance of smaller-scale scratches. Apply a small amount of non-gel toothpaste to a soft cloth and rub it onto the scratched area in circular movements. Wipe away any residue and inspect the results.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "Polishing and Waxing",
        paragraph:
          "After addressing the scratches, it’s basic to restore the shine to your car’s paint. Utilize a high-quality car cover scratches clean to assist and reduce any remaining flaws. Take after up with a coat of wax to protect the paint and upgrade its luster.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "Fixing Dents on Cars",
    sections: [
      {
        subheading: "",
        paragraph:
          "",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "Assessing Dent Severity",
        paragraph:
          "Scratches come in different shapes and sizes and their seriousness can shift. Evaluate the dent’s depth and area to determine whether it’s a candidate for DIY repair or if proficient intervention is necessary.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "DIY Dent Repair",
        paragraph:
          "For small, shallow dents, DIY methods can be effective. One popular approach involves using a plunger. Ensure the area around the dent is clean and wet, place the plunger over the dent, and firmly push and pull to create suction. This may pop the dent back into place.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "Boiling Water Method",
        paragraph:
          "For plastic or malleable bumpers, pouring boiling water over the dent and using your hands or a suction cup to massage the area gently can sometimes help reshape the plastic.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "Dent Repair Kits:",
        paragraph:
          "Various dent repair kits are available that utilize tools like dent pullers, glue, and suction cups. Follow the kit’s instructions carefully for optimal results. These kits are suitable for minor dents but may have limitations on deeper or larger dents and micro scratches on car.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "Professional Dent Repair",
        paragraph:
          "For deep or extensive dents, seeking professional assistance is recommended. Professional auto body shops have the expertise and tools, such as paint-less dent repair techniques, to address complex dent issues without compromising the vehicle’s paint.",
        listItems: [],
      },
    ],
  },
  {
    heading:
      "",
    sections: [
      {
        subheading: "Preventive Measures",
        paragraph:
          "To minimize the occurrence of micro scratches and dents, adopt these preventive measures:",
        listItems: [
          "Use a soft microfiber wash mitt and quality car wash soap for washing.",
          "Avoid abrasive materials or aggressive scrubbing.",
          "Park in shaded areas to reduce sun exposure.",
          "Be cautious in tight parking spaces to prevent door dings."
        ],
      },
    ],
  },
  {
    heading:
      "Restore Your Car’s Brilliance And Consult with Our Experts for Micro Scratches Solutions!",
    sections: [
      {
        subheading: "",
        paragraph:
          "Are you prepared to restore your car’s appearance and remove minor scratches and scratches? Reach out to us before long to arrange a meeting with our team of specialists who excel in the field of car cover scratches, exterior restoration and micro scratches on car. We have the necessary instruments and skills to effectively handle minor scratches and scratches, reestablish the initial shine and brilliance of your vehicle. Ensure that your car’s charm remains unchanged by fixing any issues.",
        listItems: [
          "Take the first step toward a revitalized vehicle."
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
            {title || "How To Fix Dents and Micro Scratches On Car?"}
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
            <InfoItem icon={<FaClock />} text={time || "6:02 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-21.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Regular usage of your car subjects it to the natural attacks of
            everyday utilization, coming about in a buildup of little flaws such
            as scratches and micro scratches on car. Although these signs may
            show up normally, there are reasonable and feasible methods for
            returning your car’s exterior to its past state of excellence. The
            article will examine efficient techniques for repairing dents and
            addressing minor scratches, providing you with the tools and
            knowledge you need to restore your vehicle.
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
            The way it looks on your car’s exterior serves as a sign of your
            sense of pride and diligence. By acquiring knowledge on how to fix
            faults and micro scratches on car, you may take proactive measures
            to preserve its overall charm. Whether choosing to use homemade
            methods or getting help from professionals, the most important thing
            is to swiftly fix these flaws, ensuring that your vehicle remains to
            be a symbol of satisfaction and respect when driving
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
