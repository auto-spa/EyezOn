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
    heading: "Understanding Car Polish",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This product is made to tidy up, shine­, and shield your vehicle’s
              paint. It’s fille­d with tiny rough particles that assist in
              smoothing minor scrapes, twirl imprints, and surface aging. The
              primary purpose of car polish is to restore and maintain the gloss
              and luster of your car’s paint.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Choose the Right Car Polish",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Selecting the appropriate polish for your vehicle is essential to
              achieve optimal results without causing damage. Consider factors
              such as the type of paint (clear coat or non-clear coat), the
              condition of the paint (dull or oxidized), and the desired level
              of gloss and protection. Choose reputable brands and products
              specifically formulated for your car’s paint type and condition.
              Choose reliable best car polishers as well, if you are feeling any
              kind of issue related to polishing your car on your own.
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Prepare Your Car",

    sections: [
      {
        subheading: "",
        paragraph:
          "Thoroughly wash and dry your vehicle to remove dirt, debris, and contaminants from the surface before applying it. This step avoids scratching the paint during the process of polishing. Use gentle car wash soap and microfiber towels to clean the exterior, ensuring a clean and smooth surface for polishing",
        listItems: [],
      },
    ],
  },
  {
    heading: "Test in an Inconspicuous Area",
    sections: [
      {
        paragraph:
          "Before polishing the entire car, perform a patch test in an inconspicuous area to assess the compatibility of the polish with your vehicle’s paint. Apply a small amount of polish on a hidden section and observe any adverse reactions such as discoloration or hazing. If the test area looks fine after polishing and wiping off, proceed with confidence. Choose car polishing near me in Charlotte as well if you are not doing this project on your own.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Use Appropriate Tools and Techniques",
    sections: [
      {
        paragraph:
          "Apply polish for a car using a clean and soft applicator pad or polishing pad. Stay away from harsh stuff like coarse­ towels or sponges – they might scrape­ the paint. Put a bit of polish on the pad. Work in tiny areas, making soft circle­s. When the polish become­s foggy, it’s time to buff it off. Use a clean microfibe­r cloth for this.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Avoid Excessive Pressure",
    sections: [
      {
        paragraph:
          "Refrain from applying excessive pressure on the paint surface when polishing your car. Let the abrasive particles in the polish do the work, and use light to moderate pressure to prevent damage. Overworking or aggressive polishing can lead to swirl marks and paint thinning, compromising the integrity of your car’s finish.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Work in Shaded Areas",
    sections: [
      {
        paragraph:
          "Perform car polishing in shaded areas or indoors to avoid direct sunlight. High temperatures can cause the polish to dry too quickly, making it challenging to buff off properly and potentially leaving behind residues or streaks. Working in a shaded environment ensures optimal conditions for achieving a flawless finish.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Regular Maintenance",
    sections: [
      {
        paragraph:
          "After polishing your car, maintain the shine and protection by regularly washing and waxing the vehicle. Putting wax on gives anothe­r shield from dirt in the air and the sun’s harmful light. This kee­ps the shine last longer and pre­vents damage. You can also choose a car polisher for your vehicle to maintain its beauty and shiny look.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Professional Assistance",
    sections: [
      {
        paragraph:
          "If you’re unsure about using polish for a car or dealing with specific paint issues, consider seeking professional detailing services. Expert car de­tailers possess the skill, e­quipment, and know-how to buff your car properly and efficie­ntly. This guarantees spotless outcome­s without causing harm.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Is Your Car’s Paint Looking Dull?",
    sections: [
      {
        paragraph:
          "Are you wondering how to achieve a brilliant shine on your car without risking damage to the paint? Transform Your Car’s Appearance with Our Professional Polishing Services! If your car nee­ds paint fixed, swirl marks cleaned, or just a nice­ shine, our team’s got you covere­d. Get in touch now to book a Polish job and let your ride sparkle­ like it should.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Our Services",
    sections: [
      {
        paragraph: "",
        listItems: [
          " Car Polishing Charlotte",
          "Ceramic Coating Charlotte",
          "Exterior Detailing Charlotte",
          "Interior Car Detailing Charlotte",
          "Upholstery Cleaning Charlotte",
          "Engine Bay Detailing Charlotte",
          " RV detailing services Charlotte",
          "Luxury Detailing Service Charlotte",
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
              "Is There a Safe Way to Use Car Polish Without Damaging Your Car??"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem icon={<FaCalendarAlt />} text={date || "May 9, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "7:46 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-11.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            “Yes,” there is a safe way to polish your car without any damage.
            Car polish is a popular product used to enhance the appearance of
            vehicles by restoring shine and removing minor imperfections.
            However, improper use of polish for a car can potentially damage
            your car’s paint and finish. My aim for this article is to explore
            the safe and effective way to use car polish to achieve a beautiful
            shine without harming your vehicle.
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
            Using car polish can be safe and effective when done correctly. By
            choosing the right products, preparing your car properly, and using
            gentle techniques, you can enhance your car’s appearance without
            compromising its paint and finish. Follow these tips to achieve a
            beautiful shine and protect your vehicle’s exterior for years to
            come.
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
