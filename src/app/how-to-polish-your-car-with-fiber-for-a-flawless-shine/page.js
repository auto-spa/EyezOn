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
    heading: "Understanding Car Fiber Polish",
    sections: [
      {
        paragraph: "Before delving into the polishing procedure, let us first understand the nature of vehicle fiber polish and its mechanism. Car fiber polish is a specialist solution formulated to eliminate flaws and rejuvenate the shine of your car’s paint. Fiber polish, unlike conventional polishes, uses microfiber technology to effectively remove dirt and grime from surfaces without causing any scratches, swirl marks, or holograms. This leads to a sleek and lustrous surface that enhances the overall aesthetic of your car.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Choosing the Right Products",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Choosing the appropriate materials is essential for obtaining the best outcomes when cleaning your automobile with car fiber polish. Commence the process by selecting a premium-grade fiber polish that is explicitly designed for automotive applications. Seek out solutions that are devoid of harsh chemicals and abrasives, as these substances have the potential to deteriorate the paint on your vehicle gradually. In addition, it is advisable to procure a microfiber applicator pad and buffing rags to guarantee uniform application and exceptional outcomes.
            </p>
          </div>
        ),
        listItems: [],

        image: "",
      },
    ],
  },
  {
    heading: "Preparing Your Car",

    sections: [
      {
        subheading: "",
        paragraph:
          "Before commencing the polishing procedure, it is crucial to properly clean the surface of your vehicle. Commence the task by carefully cleansing your vehicle to eliminate any dirt, debris, and impurities. That may impede the polishing procedure. After cleaning your automobile, carefully examine the paint for any flaws such as swirl marks, scratches, or oxidation. These locations may want further focus throughout the polishing procedure.",
        listItems: [],
      },
    ],
  },
  {
    heading: "The Polishing Process",
    sections: [
      {
        paragraph: "With your automobile fully prepared and in optimal condition, it is now time to begin the polishing process. Start by administering a small quantity of car fiber polish onto the microfiber applicator pad. Apply the polish to the paint in a systematic manner, making gentle circular motions to massage it into each region. Ensure to exert uniform pressure and thoroughly rub the polish onto the surface until it starts to form a hazy appearance. After the polish has formed a hazy layer. Employ a fresh microfiber buffing cloth to eliminate the remaining substance, uncovering a brilliant shine below.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Finishing Touches",
    sections: [
      {
        subheading: "",
        paragraph:
          "Once you have finished using car fiber polish, pause and appreciate the outcome. Your automobile should now have a perfect luster that is comparable to the most esteemed exhibition vehicles. To preserve this clean appearance, it is advisable to apply a coat of wax or sealer to safeguard the paint and augment its longevity. Furthermore, adhering to a consistent schedule of cleaning and maintenance will aid in maintaining the luster and ensuring. That your automobile maintains its optimal appearance for an extended period.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Discover the Secret to a Flawless Shine With Our Expert Car Polishing Services",
    sections: [
      {
        subheading: "",
        paragraph:
          "Do you feel unsatisfied with the dull paint on your car? Interested about how to attain a flawless luster that captivates attention while driving? Our expert car polishing services are available to completely enhance the appearance of your vehicle, turning it into a radiant work of art. Our experienced polishing procedures will reveal the methods for getting a faultless sheen. We are providing different colors of polish like diamond clear car polish, crystal car polish, and gold standard car polish. Schedule an appointment for our professional automobile detailing services today and witness the noticeable improvement! Allow us to enhance the inherent elegance of your car and leave you amazed by the remarkable outcomes. Reach out to us immediately to arrange your appointment and discover the key to achieving a faultless shine!",
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
            {title || "How to Polish Your Car with Fiber for a Flawless Shine?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "February 12, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "11:16 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-17.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Do you feel fatigued by the uninteresting and uninspiring appearance
            of your car’s paint? Do you aspire to get a pristine appearance
            reminiscent of a showroom right in the convenience of your driveway?
            Car fiber polish is the ultimate solution you need. This article
            will provide you with a detailed explanation of the steps required
            to get a flawless finish on your automobile utilizing fiber
            technology. Discover the strategies for selecting optimal products
            and acquiring the necessary skills to attain a faultless shine that
            will captivate attention wherever you may be..
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
          By utilizing appropriate chemicals and employing effective approaches, attaining a perfect luster on your vehicle has been more effortless than before. By utilizing the potential of car fiber polish, you may swiftly convert your vehicle from dull to radiant. Therefore, why delay? Implement these strategies and methods today to enjoy the satisfaction of driving a car that shines as brilliantly as you
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
