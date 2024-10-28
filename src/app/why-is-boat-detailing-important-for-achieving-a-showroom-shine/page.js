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
    heading: "Understanding Boat Detailing",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Boat detailing involves meticulous cleaning, restoration, and
              finishing of a boat to ensure it looks its best and is protected
              from both saltwater and freshwater environments. The procedure
              encompasses a variety of services, including washing, waxing,
              polishing, and oxidation removal.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        image: "",
      },
    ],
  },
  {
    heading: "Essential Components of Boat Detailing",
    sections: [
      {
        listItems: [
          "Washing: Eliminates sodium chloride, dirt, and other particulate matter that may cause gradual deterioration of the boat’s exterior.",
          "Waxing and Polishing: Protects the finish and enhances the shine, helping the boat look new.",
          "Interior Cleaning: Ensures the inside of the boat is as pristine as the outside, enhancing overall comfort and aesthetics.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: "The Importance of Regular Boat Detailing",
    sections: [
      {
        paragraph: (
          <div>
            <p>
            
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Preserves the Boat’s Value",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Consistently performing thorough maintenance on the boat ensures
              its aesthetic appeal and operational efficiency, both of which can
              have a substantial impact on its potential resale value. A
              well-maintained boat often fetches a higher market price.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Extends the Lifespan of the Boat",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Saltwater and freshwater can be harsh on a boat’s surface. Regular
              detailing helps protect the boat from the corrosive effects of
              saltwater and the buildup of freshwater algae and scum.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Enhances Appearance",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Detailing removes oxidation and surface stains, prevents color
              fading, and restores the shine that makes the boat look like it
              just left the showroom floor.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Common Boat Detailing Services",
    sections: [
      {
        paragraph: (
          <div>
            <p>
            
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Hull Cleaning and Waxing",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The hull is prone to accumulating stains and algae, which can
              damage its surface over time. Cleaning and waxing the hull not
              only restores its shine but also adds a protective layer against
              future damage of boat detail.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Topside and Deck Detailing",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              This includes cleaning and polishing all above-water components of
              the boat, such as the deck, windows, and cockpit. It ensures that
              these areas are not only clean but also protected from UV rays and
              wear.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Interior Detailing",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Interior detailing involves cleaning the cabin, bathrooms, and
              sleeping areas. This not only improves comfort and air quality but
              also prevents mold and mildew growth, common issues in damp
              environments where boats are usually stored by boat detailers near
              me in Charlotte.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Tips for Maintaining Showroom Shine",
    sections: [
      {
        paragraph: (
          <div>
            <p>
            
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Regular Maintenance",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Consistent detailing is key to maintaining a showroom appearance.
              Scheduling regular detailing sessions, especially after long
              periods of storage or after exposure to harsh environments, keeps
              the boat in top condition.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Use High-Quality Products",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Using high-quality cleaning and waxing products is essential for
              achieving and maintaining a great finish. Cheap or incorrect
              products can damage the surface or leave residues that dull the
              shine.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Professional Detailing",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              While DIY detailing can be effective for minor upkeep,
              professional detailers have the tools, products, and experience
              necessary to achieve the best results, especially when dealing
              with deep stains, oxidation, or specialized materials like teak
              and vinyl.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Is Your Boat Ready to Turn Heads on the Water?",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Give your vessel the shine it deserves with our professional Boat
              Detailing Services. Our comprehensive boat detailing services
              include thorough hull cleaning, deck polishing, and interior
              refreshing to guarantee impeccable condition in every aspect of
              your vessel. Utilize our expertise to protect your investment,
              enhance its resale value, and make every outing a showcase. Are
              you seeking boat detailing near me in Charlotte? We are here to
              assist you with this service. Our dedicated team uses only the
              best products and techniques to deliver a showroom shine that
              lasts.
            </p>
            <p className="mt-2">
              Are you prepared to enhance the status of your boat as the most
              esteemed vessel in the marina?
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
];
const faqsData = [
  {
    question: "What is the Car polish and buffing cost?",
    answer:
      "The cost of automobile polishing and buffing generally remains from 50 to 200 dollars. However, it depends on your car’s size and the condition of the paint. Prices can vary based totally on the provider company, location, and whether or not additional remedies like waxing are covered. For a more precise quote, it’s best to consult with a local car detailing provider.",
  },
  {
    question: "Is Car Buff and Polish Beneficial before Selling it?",
    answer:
      "Yes, buffing and polishing your vehicle before selling it can be very beneficial. It enhances the look of the auto by removing scratches, swirl marks, and oxidation, making the paint clean and delightful. A good outside look can boost an automobile’s resale cost and attract a maximum number of buyers.",
  },
  {
    question: "What is Mean by Buff paint off paint?",
    answer:
      "“Buffing paint off paint” refers to the procedure of the usage of a buffer or polishing machine to remove a layer of paint or clear coat from the surface of a car. This method is regularly used to remove floor imperfections, including scratches or oxidation, by way of smoothing out the paint. However, if executed excessively, it may do away with too much paint, potentially damaging the car’s finish.",
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
              "Why is boat detailing Important for Achieving a Showroom Shine?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "April 21, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "5:49 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-13.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Acquiring a boat entails a substantial financial commitment, and
            preserving its visual beauty is crucial for any owner who takes
            pride in their possession. Boat detailing goes beyond simple
            cleaning. It involves comprehensive care designed to maintain the
            boat’s value and appearance. This article explores why boat
            detailing is crucial for achieving that sought-after showroom shine
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
            Boat detailing encompasses more than just having an aesthetically
            pleasing appearance. It concerns the extended conservation and
            satisfaction derived from your prized possession. Regular detailing
            ensures that every outing begins with a boat that looks and feels
            like new, enhancing the overall boating experience. Whether it’s for
            pride of ownership, maintaining resale value, or simply enjoying a
            clean and functional vessel. Detail boats are a crucial aspect of
            boat maintenance that cannot be overlooked.
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
