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
    heading: "What’s Paint Correction Anyway?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Picture this: you’ve got a car with some minor paint imperfections like scratches, scuff marks, and stains. That’s where paint correction steps in. It’s like a beauty treatment for your car’s exterior, aiming to fix those flaws.
            </p>
            <p className="mt-2">Paint correction involves using various tools and products, including stuff like gentle car wash soap, soft microfiber towels, synthetic clay bars, and even machines called polishers. All of these come together to clean, polish, protect, and enhance your car’s exterior.</p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Now, Ceramic Coating – What’s That?",
    subheading: "",
    sections: [
      {
        paragraph:
          "Think of ceramic coating as a super shield for your car’s paint. Once applied, it bonds with your car’s factory paint and forms an extra layer of protection on top of your clear coat. This shield is like a superhero cape that defends against the villains of the automotive world: UV rays, heat, tree sap, bird droppings, road tar, dirt, brake dust – you name it! Ceramic coatingsHow Much Is Paint Correction and Ceramic Coating not only protect but also add that “just drove out of the showroom” glossy look to your car. Plus, they can last for years, depending on the quality and how well you take care of them.",
        image: "",
      },
    ],
  },
  {
    heading: "What’s the Damage to Your Wallet?",

    sections: [
      {
        subheading: "",
        paragraph: "",
        listItems: [
          "Now, let’s talk numbers. The cost of paint correction and ceramic coating varies based on a bunch of factors:",
          "Car Size and Condition: If you’ve got a big car or it’s in rough shape, it might take more time and materials to detail it.",
          "Service Level: Paint correction and ceramic coating services come in different flavors, from basic to full-scale. Naturally, the more comprehensive the service, the higher the cost.",
          "Tools and Products Used: The tools and products used in the process can also affect the price. Some are pricier but deliver top-notch results."
        ],
      },
    ],
  },
  {
    heading: "Paint Correction and Ceramic Coating Costs – Rough Estimates",
    sections: [
      {
        paragraph:
          "",
        listItems: [
          "Basic Wash and Wax: This is a budget-friendly option, a quick wash and wax that can cost around $50 to $100. It’s perfect for a quick spruce-up.",
          "Standard Detail: This mid-range option goes a step further, including things like clay barring, polishing, and more. Expect to pay about $150 to $300.",
          "Full Detail: The royal treatment, covers everything from top to bottom, inside and out. It’s the priciest, ranging from $510 to $1100 or more. Now, remember, these are just ballpark figures. The actual cost can vary depending on your car’s specifics and the detailer’s skills."
        ],
        image: "/images/blog-28-car.png",
      },
    ],
  },
  {
    heading: "Is It Worth It?",
    sections: [
      {
        paragraph:
          "",
          listItems:[
            "Here’s the million-dollar question – are paint correction and ceramic coating worth it? If you love your car and want to keep it looking sharp, increase its resale value, and reduce the frequency of washes and waxes, then yes, they’re worth it.",
            "They also provide serious protection against all sorts of paint-damaging culprits. Plus, they’ll make your car’s paint look glossier, shinier, and smoother. But, if you don’t care about your car’s looks, have a limited budget, or prefer to spend your money elsewhere, you may want to skip it.",
            "Also, it is important to remember that maintaining a ceramic coating requires some effort. It’s not a set-it-and-forget-it deal. You’ll need to follow some maintenance steps to keep that shield strong.",
            
          ],
      },
      
    ],
  },
  {
    heading: "In a nutshell",
    sections: [
      {
        paragraph: "",
        listItems: [
          "Paint correction and ceramic coating offer cosmetic enhancement and protection for your car. The cost varies based on your car’s size, condition, and service level. Here’s a quick breakdown:",
         "Basic wash and wax: Around $50 to $100 for a quick refresh.",
         "Standard detail: Approximately $160 to $310 for more in-depth cleaning.",
         "Full detail: The top-tier treatment can range from $510 to $1100 or more.",
         "Whether it’s worth it depends on your priorities and budget. If you love a pristine car and want to reduce maintenance, they’re a great choice. But if you’re less concerned about appearance or have budget constraints, you might skip them. Remember, ceramic coatings need proper maintenance. In the end, a well-detailed car makes for a happy car owner, so choose what suits you best!",
         "Remember, ceramic coatings need proper maintenance. In the end, a well-detailed car makes for a happy car owner, so choose what suits you best!" 
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
            {title || "How Much Is Paint Correction and Ceramic Coating"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem icon={<FaCalendarAlt />} text={date || "October 6, 2023"} />
            <InfoItem icon={<FaClock />} text={time || "8:15 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-28.png"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
          So, you’re thinking about giving your beloved car a little extra TLC with paint correction and ceramic coating? Good call! These processes can work wonders to make your car look stunning and protect it from the elements. But, let’s be honest about their cost and whether they are truly worth the investment.
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
