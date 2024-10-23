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
    heading: "Why Should You Wax Your Car?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              First things first, why bother with waxing at all? Isn’t washing
              your car enough?
            </p>
            <p className="mt-2">
              Not quite. Waxing does more than make your car look pretty. It is
              a barrier between the paint of your car and the harsh world
              outside. Now, the wax can protect your car from all that and make
              sure the paint of your ride is fine. It also makes future washes
              easier because dirt does not stick as easily to a waxed surface.
            </p>
            <p className="mt-2">
              And then, there’s the shine. A freshly waxed car looks like a
              diamond. Wax brings out richness in your paint, making even an
              older car look awesome.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Types of Car Wax",
    sections: [
      {
        paragraph:
          "Each type of car wax offers distinct advantages, and you should select one that aligns with your specific requirements.",
        listItems: [
          "The oldest and most traditional form, paste wax provides excellent protection and shine but needs more elbow grease. Although it takes a lot of time to apply, it provides a great lasting shine.",
          "Easier to apply than paste wax, liquid wax offers decent protection and shine. It is fairly easy to apply and lasts for quite some time. Many car owners prefer liquid wax for its balance between effort and results.",
          "It might not be as strong as a paste or liquid wax, but it can save you a lot of time.",
          ,
        ],
        image: "/images/Untitled-design-70.jpg",
      },
    ],
  },
  {
    heading: "The Best Wax for Your Car",
    sections: [
      {
        paragraph: (
          <div>
            <p>
              Different colors of cars need different waxes. The best car wax
              for black cars is different and for light colors it is different.
              Dark-colored cars, especially black ones show imperfections like
              swirl marks or scratches more easily. A wax specifically designed
              for black cars can minimize those imperfections, providing a deep,
              reflective shine.
            </p>
            <p className="mt-2">
              If color isn’t your main concern, think about the weather
              conditions where you live. Cars exposed to constant sunlight may
              benefit from waxes with UV protection. Your car might have to
              withstand extreme temperatures or dirt. So pick one according to
              your location.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How to Apply Car Wax Properly",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Once you have selected the proper wax, the application technique
              is also essential to get first-rate results.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
    listItems: [
      "Wash Your Car Thoroughly",
      "Apply Wax in Small Sections",
      "Let the Wax Dry to a Haze",
      "Buff It Off",
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
            {title || "The Complete Guide to Car Wax: How to Choose and Use?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 15, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "9:17 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-2.png"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            The paint of your car needs more than just a simple water and soap
            cleaning. It deserves safety, shine, and care. It deserves safety,
            shine, and care. That’s where waxes come into play. The right wax
            can make your vehicle shine whilst shielding it from many dangerous
            elements
          </p>
          <p className="mt-6">
            But the question is with all these options how do you choose the
            best wax for your car? Now we will break it down.
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
            You should understand your needs and preferences to pick the best
            car waxes. Whether you want to keep your paint shining for months or
            the best spray wax for cars for a quick shine. Always remember that
            waxing is an essential part of car care. Take your time, follow
            proper application techniques, and transform it into a work of art.
          </p>
        </div>
        {/* FAQs Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs About Car Wax</h2>
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
