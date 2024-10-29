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
    heading: "The Science Behind Ceramic Coating’s Lasting Power",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            To understand how ceramic coating lasts, we need to delve into its composition. Unlike traditional wax or sealants, ceramic coatings are made of Nano-ceramic particles that bond chemically with a vehicle’s paint. This chemical bond creates a resilient and durable shield that can withstand the test of time.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2">
              
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Ceramic Coating’s Resilience Against Environmental Factors",
    sections: [
      {
        paragraph:
          "One of the key reasons ceramic coating lasts longer than traditional options is its ability to repel environmental contaminants. UV rays, acidic rain, bird droppings, and road salts are no match for the protective barrier formed by ceramic coatings. Unlike wax, which can wear off quickly, ceramic coatings maintain their integrity, keeping your vehicle’s paint safe and sound.",
        listItems: [
          
          ,
        ],
        image: "",
      },
    ],
  },
  {
    heading: "The Self-Cleaning Effect of Ceramic Coating",
    sections: [
      {
        paragraph: (
          <div>
            <p>
            A remarkable feature of ceramic coatings is their self-cleaning effect. Thanks to their hydrophobic properties, water and dirt slide off the coated surface effortlessly. This means less dirt and grime stick to your vehicle’s paint, reducing the need for frequent washes. As a result, your ceramic coating can last for years without losing its protective qualities.
            </p>
            <p className="mt-2">
             
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Durability Beyond Wax and Sealants",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            Compared to traditional wax and sealants, ceramic coatings boast unmatched durability. While wax may last a few weeks, and sealants a few months, a professionally applied ceramic coating can last for several years. Its ability to resist scratches and swirl marks ensures your vehicle’s paint remains flawless for an extended period.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
    listItems: [
     
    ],
  },
  {
    heading: "Proper Maintenance for Longevity",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            While ceramic coatings are known for their lasting power, proper maintenance plays a crucial role in maximizing their durability. Regularly washing your vehicle using the correct techniques and products designed for coated surfaces will help preserve the coating’s effectiveness. Additionally, periodic inspections by professionals can identify any areas that may require reapplication to maintain peak performance
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
    listItems: [
     
    ],
  },
  {
    heading: "The Role of Professional Application",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            The longevity of ceramic coatings heavily depends on the quality of application. DIY kits are available, but for the best results and durability, it’s recommended to have your ceramic coating professionally applied. Professionals have the expertise and tools to ensure a uniform and long-lasting coating that can withstand the rigors of everyday driving.
            </p>
            <p className="mt-2">In conclusion, the longevity of ceramic coatings is a testament to its superior protection and resilience. Its chemical bond with the vehicle’s paint, resistance to environmental factors, self-cleaning properties, and durability make it a standout choice for those looking to keep their vehicles looking pristine for years. However, it’s essential to remember that proper maintenance and professional application are key factors in ensuring your ceramic coating lasts as long as possible.</p>
            <p className="mt-2">Investing in a ceramic coatings for your vehicle is not just about enhancing its appearance; it’s about safeguarding its value and beauty for the long haul. So, if you’re looking to enjoy years of head-turning shine and protection, consider the lasting power of ceramic coating – a true game-changer in the world of automotive care.</p>
          </div>
        ),
      },
    ],
    listItems: [
     
    ],
  },
];

const faqsData = [
  {
    question: "Is ceramic or wax better for cars?",
    answer:
      "Wax needs to be reapplied every few months, but the wax gives a shiny finish and is much easier to apply. Ceramic coatings provide a stronger and durable coat compared to wax. It can last years, offering superior protection.",
  },
  {
    question: "How often should I wax my car?",
    answer:
      "Waxing after every three months is ideal for most cars under normal weather conditions.",
  },
  {
    question: "Does washing a car remove wax?",
    answer:
      "Regular washing with a mild car soap won’t remove your wax immediately. However, over time, repeated washes will gradually wear down the wax layer.",
  },
  {
    question: "Which is better, paste or liquid car wax?",
    answer:
      "It is according to your needs. A longer-lasting shine is achieved on your car with paste wax, although it does require more work. On the other hand, using liquid wax is quite simple and quick, but it has a short life.",
  },
  {
    question: "How do you prolong car wax?",
    answer:
      "To make your wax last longer, wash your car with a wax-safe car soap, avoid rough materials, and park in shaded or covered areas.",
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
            {title || "The Magic of Ceramic Coating: Unveiling the Longevity"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 14, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:06 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-30.png"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Ceramic Coating has taken the automotive world by storm in recent
            years, promising unrivaled protection and shine for vehicles. But
            how does ceramic coating last, and what makes it stand out among
            traditional wax or sealant options? In this blog, we’ll dive deep
            into the science and benefits of ceramic coating, shedding light on
            its remarkable longevity
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
          <h2 className="text-2xl font-bold text-white"></h2>
          <p className="text-md text-white mt-2">
            
          </p>
        </div>
        {/* FAQs Section */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs About Car Wax</h2>
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
