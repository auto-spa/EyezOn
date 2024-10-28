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
    heading: "Understanding Car Ceramic Coating",
    sections: [
      {
        paragraph:
          "",
        listItems: [],
      },
    ],
  },
  {
    heading: "",

    sections: [

      {
        subheading: "What is Ceramic Coating?",
        paragraph: (
          <div>
            <p>
            Define ceramic coating and its advantages, such as improved shine, water-repellent characteristics, and protection against UV rays, in contrast to conventional wax or sealant solutions.
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
        subheading: "The Mechanism of Ceramic Coating",
        paragraph: "Describe the chemical makeup of ceramic coatings and how they bind with the clear coat of a vehicle to create a semi-permanent protective barrier.",
        listItems: [
         
        ],
      },
    ],
  },
  {
    heading: "Preparing Your Vehicle for Ceramic Coating",
    sections: [
      {
        paragraph:
          "",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Washing and Decontamination",
        paragraph: "Stress the significance of properly cleaning and decontaminating the outside of the vehicle to eliminate dirt, grime, and residues that may disrupt the bonding procedure.",
        listItems: [
         
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Paint Correction",
        paragraph: "Let’s talk about why paint correction procedures like polishing and buffing are crucial for fixing imperfections and improving the overall look and feel of the paint before adding a ceramic coating-safe car wash.",
        listItems: [
          
        ],
      },
    ],
  },
  {
    heading: "Application Process For Car Ceramic Coating Services",
    sections: [
      {
        paragraph:
          "",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Surface Preparation",
        paragraph:
          "Let’s walk users through the last few steps to prepare their surface perfectly. It’s crucial to make sure the surface is clean, dry, and completely free from any leftover polish or wax.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Applying Ceramic Coating",
        paragraph:
          "Give definite directions to applying ceramic coating utilizing implement cushions or microfiber towels, underscoring the significance of even inclusion and trying not to cover strokes.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:'Curing Time and Conditions',
        paragraph:
          "Make sense of the relieving system for car ceramic coating services, including the suggested restoring time and natural circumstances, for example, temperature and stickiness levels.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Post-Application Care",
    sections: [
      {
        subheading:'',
        paragraph:
          "",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:'Avoiding Water Contact',
        paragraph:
          "It is recommended to avoid getting the coated vehicle wet during the curing process to ensure a strong bond between the coating and the paint.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:'Regular Maintenance',
        paragraph:
          "Regular maintenance practices are key to keeping your car’s ceramic coating services in top shape. Make sure to emphasize the importance of gentle hand washing and using pH-neutral car wash products. These simple steps will help preserve the integrity and longevity of your coating, ensuring it stays looking its best for years to come.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:'Additional Protection',
        paragraph:
          "Recommend additional protective measures like applying a topcoat or sacrificial layers to boost longevity and offer extra protection from environmental pollutants.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Benefits of Professional Car Ceramic Coating Services",
    sections: [
      {
        subheading:'',
        paragraph:
          "",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {subheading:"Expertise and Experience",
        paragraph:
          "Discover the countless benefits of relying on skilled detailers with specialized training, top-notch equipment, and unmatched expertise when it comes to applying ceramic coating for car interiors.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {subheading:"Long-Term Protection",
        paragraph:
          "Discover the remarkable advantages of professional-grade ceramic coatings that provide unmatched durability and performance when compared to their consumer-grade counterparts.",
        listItems: [],
      },
    ],
  },
  {
    heading: "DIY vs. Professional Application",
    sections: [
      {subheading:"",
        paragraph:
          "",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {subheading:"DIY Kits",
        paragraph:
          "Unleash your inner DIY enthusiast with the remarkable ceramic coating DIY kits available in the market! These kits are designed to bring out the best in your beloved possessions, providing a glossy and protective shield. While they offer incredible features, it’s important to note their limitations and consider whether they are suitable for your level of expertise.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {subheading:"Professional Services",
        paragraph:
          "Find the amazing benefits of selecting proficient car ceramic coating services given by trustworthy enumerating organizations. Experience the craft of accuracy application, guaranteeing impeccable outcomes that will leave your vehicle looking spic and span. Relax realizing that quality confirmation is a first concern, ensuring a completion that surpasses your assumptions. To finish it off, partake in the genuine serenity that accompanies guaranteeing inclusion, giving added assurance to your venture.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Elevate Your Car’s Protection With The Power of Ceramic Coating",
    sections: [
      {subheading:"",
        paragraph:
          "Are you ready to give your car the royal treatment it deserves? Discover the transformative benefits of ceramic coating and interior detailing services that will leave your vehicle shining inside and out. Are you ready to experience unparalleled protection and a showroom-worthy finish? Let’s dive into the world of automotive care and elevate your driving experience to the next level! Transform your car into a masterpiece today! Whether you’re craving a pristine exterior with our exotic car ceramic coating or a refreshed interior with our detailing services, our team is here to exceed your expectations. Book now to give your car the VIP treatment it deserves and hit the road in style. Click below to schedule your appointment and let’s embark on a journey to elevate your driving experience together!",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {subheading:"Expertise and Experience",
        paragraph:
          "Discover the countless benefits of relying on skilled detailers with specialized training, top-notch equipment, and unmatched expertise when it comes to applying ceramic coating for car interiors.",
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
              "How to Apply Car Ceramic Coating for Ultimate Protection?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "February 20, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "4:34 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-16.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Car ceramic coating has transformed car protection by providing
            exceptional durability, gloss, and resistance to environmental
            dangers. This cutting-edge technique forms a protective barrier over
            the paint surface, shielding it from scratches, UV damage, and
            chemical pollutants. This article will provide a detailed
            exploration of the sequential technique for applying car ceramic
            coating services, enabling car enthusiasts to get high-quality
            results and durable protection for their vehicles.
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
            By following the sequential technique illustrated in this article,
            vehicle proprietors can apply ceramic coating to their vehicles,
            accomplishing unrivaled security and stylish upgrades. The car
            ceramic coating services are a revolutionary option for preserving
            the beauty and integrity of automotive finishes, providing a
            long-lasting shine and protection from the elements, whether DIY or
            professional services are sought.
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
