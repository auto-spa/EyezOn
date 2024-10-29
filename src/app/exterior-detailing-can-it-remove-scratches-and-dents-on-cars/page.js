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
    heading: "Understanding Exterior Detailing",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Before we dive into the subject of scratches and dents, it’s important to grasp what exterior detailing actually involves. Exterior detailing’s is a thorough process focused on cleaning and rejuvenating your vehicle’s outer surfaces. This isn’t your run-of-the-mill car wash; it’s a meticulous procedure that encompasses a series of steps aimed at enhancing your car’s appearance and protecting its exterior.
            </p>
            <p className="mt-2">
              
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "The Scratches Dilemma",
    sections: [
      {
        paragraph:
          "Scratches are the bane of existence for many car owners. Whether they stem from minor accidents, encounters with tree branches, or simply the wear and tear of daily life, scratches can significantly detract from your car’s overall beauty. The big question: can exterior detailing work its magic and make these scratches vanish?",
        image: "",
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "",
        paragraph:
          "The reality is that exterior detailing can indeed make a substantial improvement in the appearance of scratches. However, it might not completely eliminate them, especially if the scratches are deep or extensive. Detailing professionals utilize specialized compounds and polishes to reduce the visibility of scratches. Through careful buffing of the affected area, they can make the scratch less noticeable while restoring the paint’s shine and luster. Nevertheless, for those deep scratches that penetrate the clear coat and reach the base paint, a professional repainting job may be necessary for a truly flawless repair.",
      },
      
    ],
  },
  {
    heading: "Dents and the Detailing Solution",
    sections: [
      {
        paragraph:
          "Dents are yet another headache for car owners. Whether it’s the result of a minor parking lot mishap or an errant baseball, dents can be an eyesore and a source of frustration. So, can exterior detailing work its magic on dents as well?",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        paragraph:
          "Unfortunately, exterior detailing isn’t equipped to remove dents from your car’s body panels. Dents are structural deformities in the metal or bodywork of your vehicle, and addressing them calls for a different set of skills and tools. To remedy dents, you’ll need to seek the expertise of a professional auto body shop or a dent removal specialist who can employ techniques like paintless dent repair (PDR) to restore the affected areas without the need for extensive painting or bodywork.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "The Synergy of Detailing and Dent Removal",
    sections: [
      {
        paragraph:
          "While exterior detailing may not provide the solution for dents, it plays a crucial role in enhancing your car’s overall appearance, even after dent repair. After a dent has been expertly fixed, detailing can help seamlessly blend the repaired area with the rest of your vehicle’s exterior. By meticulously cleaning and polishing the car’s surface, detailing professionals ensure that the paint and finish appear uniform and flawless.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "DIY vs. Professional Detailing",
    sections: [
      {
        paragraph:
          "When it comes to keeping your car looking its best, exterior detailing becomes a key player. Many car owners opt",
        listItems: [],
        image: "/images/blog-29-car.png",
      },
    ],
  },
  
];
const faqsData = [
  {
    question: "What Causes Swirl Marks on Cars?",
    answer:
      "Swirls are generally due to flawed washing and drying techniques. Abrasive substances, inclusive of difficult sponges or towels, and automated car washes with grimy brushes also contribute to these marks. Additionally, washing the auto in direct daylight or the usage of low-excellent products can exacerbate the trouble.",
  },
  {
    question: "How to Remove Swirl Marks from Car",
    answer:
      "To dispose of stains, use a mark remover or a sharpening compound. Apply the product with a clean microfiber fabric or polisher, working in small sections. For severe scratches, remember a clay bar remedy or expert detailing to restore your vehicle’s end efficaciously.",
  },
  {
    question: "Is It Possible to Avoid Swirl Marks?",
    answer:
      "Yes, minimizing stains is feasible with proper care. Use notable washing products, smooth equipment, and tender clothes. Avoid washing in direct daylight and choose hand washing as opposed to automatic car washes. Regular preservation and cautious washing techniques assist prevent stains",
  },
  {
    question: "Can I Remove Swirl Marks by Hand?",
    answer:
      "Yes, removing swirls by using a hand is possible with a mark remover and a microfiber fabric. This approach requires greater effort and endurance as compared to machine polishing. Apply the remover in small sections, lightly work it into the paint, and buff the location until clean.",
  },
  {
    question: "How to Buff Without Swirl Marks?",
    answer:
      "To buff without growing marks, use a smooth, tender microfiber cloth or a buffing pad. Apply light, and even pressure, and use an again-and-forth or side-to-side motion instead of circular moves. Ensure the floor is clean and avoid excessive stress to save you new blemishes.",
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
              "The Power of Exterior Detailing: Can it Remove Scratches and Dents on Cars?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 19, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:47 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-29.png"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            When it comes to keeping your car looking its best, exterior
            detailing becomes a key player. Many car owners opt for exterior
            detailing services to ensure their vehicles maintain that pristine,
            showroom-ready appearance. You might be wondering whether exterior
            detailing has the power to effectively eliminate those bothersome
            scratches and dents from your car. In this blog, we’re here to
            explore the world of exterior detailing and its potential to address
            these common imperfections.
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
            In the realm of car care, exterior detailing’s emerges as a potent
            tool for enhancing and preserving your vehicle’s appearance. While
            it can significantly enhance the look of scratches, it’s crucial to
            keep in mind that it may not completely erase deep or extensive
            ones. As for dents, they call for specialized dent removal
            techniques.
          </p>
          <p className="text-md text-white mt-2">
            Ultimately, the synergy between exterior detailing and professional
            dent removal can provide your car with a comprehensive makeover,
            leaving it looking as good as new. So, if you’re looking to restore
            your car’s exterior beauty, remember that while exterior detailing
            is a crucial step, it’s not a magic wand for all imperfections.
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
