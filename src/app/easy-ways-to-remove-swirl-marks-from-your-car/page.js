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
    heading: "What is Meant by Swirls?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Swirl scratches are circular scratches on a car’s paint that end
              up seen below direct light. They often result from improper
              washing, drying strategies, or using abrasive substances. Common
              causes of swirl marks on the car consist of washing with grimy
              sponges or towels, the use of computerized car washes with worn
              brushes, and applying incorrect cleaning products
            </p>
            <p className="mt-2">
              These marks can affect the advent of your car, making it look dull
              and much less smooth. Regular preservation and careful washing
              strategies are essential to prevent and decrease marks on the car,
              making sure your vehicle’s paint stays smooth and shiny.
              Addressing those problems directly can help hold your vehicle’s
              aesthetic enchantment.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "What are the Causes of these Marks?",
    sections: [
      {
        paragraph:
          "These swirl marks on new cars are normally because of unsuitable washing and drying techniques. Using abrasive sponges or towels, washing in direct daylight, and coffee-high-quality car wash products can all contribute to these marks. Automated car washes with brushes can also go away swirls on new cars if the brushes are not wiped clean often. Additionally, dirt and debris on the auto’s floor can cause scratches in the course of the showering process.",
        image: "/images/Untitled-design-44-300x169.jpg",
      },
    ],
  },
  ,
  {
    heading: "Simple Methods to Remove Swirl",
    sections: [
      {
        subheading: "Swirl Mark Removal",
        paragraph:
          "Use a swirl mark remover designed to put off light scratches and repair your car’s shine. Apply the product with a clean microfiber fabric or a dual-action polisher for the best consequences. Gently paint the product into the paint using circular motions, then buff the vicinity until the marks disappear.",
      },
      {
        subheading: "Polishing",
        paragraph:
          "Polishing your vehicle helps dispose of swirl marks on the new car and revives its luster. Select a sharpening compound appropriate for your vehicle’s paint kind. Apply it in small sections with the use of a tender applicator pad, operating the polish into the paint. After applying the polish, buff the vicinity with an easy microfiber cloth to obtain a clean, sleek end.",
      },
      {
        subheading: "Clay Bar Treatment",
        paragraph:
          "A clay bar can put off contaminants that reset the swirl car. Use a clay lubricant and gently flow the clay bar over the car’s surface in an again-and-forth motion. This remedy additionally eliminates floor impurities, getting ready the paint for polishing and in addition protection.",
      },
      {
        subheading: "Microfiber Towels",
        paragraph:
          "Use exceptional microfiber towels for drying to lessen the threat of car swirl marks. Ensure the towel is easy and free from debris before using it on your car. Microfiber towels are designed to lift and entice dust, stopping it from scratching the floor for the duration of drying.",
      },
      {
        subheading: "Professional Detailing",
        paragraph:
          "If the scrapes are excessive otherwise you select now not to deal with the mission yourself, professional detailing services can correctly dispose of car swirl marks and repair your car’s finish. Detailers use specialized equipment and merchandise to acquire faultless outcomes, regularly saving you time and effort",
      },
    ],
  },
  {
    heading: "Are You Struggling with Shining Problems on Your Car?",
    sections: [
      {
        paragraph:
          "Are spots making your car appearance less than ideal? Discover how our professional polishing service can remodel your car, putting off those pesky marks and restoring its authentic shine. We focus on superior techniques and premium products to make certain your car seems modern. Do not permit blemishes to dull your car’s appearance to any extent further.",
        listItems: [],
        image: "/images/Untitled-design-45-300x169.jpg",
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
            {title || "Easy Ways to Remove Swirl Marks from Your Car"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "August 12, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "10:43 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-5.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Swirl marks on your car can be an actual problem, diminishing its
            usual appearance. These light scratches and abrasions often become
            visible in direct sunlight. Whether you have just observed those
            blemishes or they have been a continual problem, addressing them is
            important for keeping your vehicle’s glossy appearance. Thankfully,
            removing these marks is not a very difficult problem. With the right
            strategies and products, you can restore your vehicle’s smooth
            finish and defend its price. This article talks about some effective
            strategies to tackle these marks and keep your car searching
            first-rate.
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
            Maintaining your vehicle’s look involves ordinary care and
            attention. By using the strategies outlined, you could correctly
            remove swirl marks and preserve your vehicle searching pristine.
            Stains can detract from the overall aesthetics of your car, but with
            these strategies, you could repair its shine and protect its fee.
            Regular protection, proper washing strategies, and the use of the
            proper merchandise will make sure your car remains in top condition
            and keeps appearance its pleasant for future years.
          </p>
        </div>
        {/* FAQs Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-600">
                {faq.question}
              </h3>
              <p className="text-md text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
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
