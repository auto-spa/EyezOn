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
    heading: "Understanding Car Wash Detail",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Car wash detail involves more than just running water over your
              car’s exterior. It encompasses a thorough cleaning, both inside
              and out, including polishing and waxing to protect the paint and
              make the car look new with a full detail car wash. This detailed
              process not only enhances the appearance of your car but also
              extends the longevity of its surfaces..
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Preparing for a Detailed Car Wash",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Choosing the Right Products: Selecting the right cleaning products
              is crucial before you begin. Sele­ct a balanced-pH auto wash
              liquid to keep your ve­hicle’s wax intact. Opting for a
              high-caliber microfiber washing glove­ and drying cloth aids in
              reducing scratch marks.
            </p>
            <p className="mt-2">
              Setting Up Your Space: Ensure you have a shaded area to work in,
              as washing and detailing your car in direct sunlight can lead to
              soap suds drying prematurely, leaving water spots.
            </p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Step-by-Step Process to Achieve Showroom Shine",

    sections: [
      {
        subheading: "",
        listItems:[
          "Washing: Start with rinsing your car to remove loose dirt and debris. Start by grabbing two buckets. Fill one­ with bubbly, clean water, and the other for rinsing your mitt. Kick it off from the top and work your way down. This method prevents dirt from contaminating your clean suds.",
          "Cleaning the Wheels: Wheels often harbor the most dirt and grime, so using a separate brush and cleaner for your wheels is advisable. This avoids transferring brake dust and dirt onto your car’s paint",
          "Drying: After rinsing, dry your car with a microfiber towel to prevent water spots. Blot drying is more gentle on the paint compared to dragging the towel across the surface.",
          "Claying: This often-overlooked step is crucial for a showroom to shine. A clay bar can pick up contaminants left on the paint after washing, leaving it perfectly smooth.",
          "Polishing: If your car has minor scratches or swirl marks, using a dual-action polisher can be a game-changer. Polishing buffs out these imperfections, leaving a glossy finish.",
          "Waxing: Finally, apply a carnauba-based wax, which not only gives a rich, warm shine but also protects the paint. Waxing should be done in a circular motion and allowed to haze before buffing it out with a clean microfiber cloth."
        ],
      },
    ],
  },
  {
    heading: "Interior Detailing",
    sections: [
      {
       listItems:[
        "Cleaning the Interior: First, get rid of any litte­r and give the seats, carpe­ts, and mats a good vacuum. Next, with cleaners suite­d for your upholstery, scrub down the seats, the­ dashboard, and other areas. Additionally, car detail se­rvices are also a great choice for de­ep-cleaning your car’s inside.",
        "Conditioning Leather: If you have leather interiors, apply a leather conditioner to keep it supple and prevent cracking.",
        "Cleaning Windows and Mirrors: Car wash detail uses a streak-free glass cleaner to ensure clear visibility and a sparkling finish.",

       ],

        image: "",
      },
    ],
  },
  {
    heading: "Maintaining Your Car’s Shine",

    sections: [
      {
        subheading: "",
       listItems:[
        "Regular Washing: Regularly washing your car prevents the buildup of damaging chemicals and dirt that can affect your car’s paint and finish. You can also choose a car wash and detail near me in Charlotte to maintain the shine of your car.",
        "Applying Wax Regularly: Reapply wax every three to four months to maintain the protective layer over the paint.",
        "Storing Your Car Properly: When not in use, store your car in a garage or under a car cover to protect it from the elements and UV rays."
       ]
      },
    ],
  },
  {
    heading: "Are You Ready to Turn Heads with Your Car’s Radiant Shine?",
    sections: [
      {
        paragraph: "Experience the difference a professional touch can make with our Auto Detailing Services. Why be okay with just okay? You can re­ach great heights! We, the­ skilled crew, use only top-notch stuff and me­thods for your vehicle. It’s about making your car shine like­ it’s brand new and guarding it against the weather. Ready to stun at a car show? Or want to up the selling price­? Or just love how clean your car is? We’re­ on it.",

        listItems: [
          "Additionally we are provided these services",
          "Car Polishing Charlotte",
          "Ceramic Coating Charlotte.",
          " Exterior Detailing Charlotte",
          "Interior Car Detailing Charlotte",
          "Upholstery Cleaning Charlotte",
          " Engine Bay Detailing Charlotte",
          "RV detailing services Charlotte",
          "Luxury Detailing Service Charlotte"


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
            {title || "Can You Achieve a Showroom Shine with a Car Wash Detail at Home?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem icon={<FaCalendarAlt />} text={date || "May 13, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "9:09 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-10.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            “Yes,” You can achieve the showroom shine of your car with car wash
            details at home. Achieving a showroom shine on your car at home can
            feel like a daunting task, but with the right techniques and tools,
            you can attain results that rival professional car wash details.
            This article will walk you through the necessary steps to ensure
            your car not only shines but also receives the care it deserves,
            preserving its look and value.
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
            Achieving a showroom shine with a car wash detail at home is
            possible with patience, the right products, and attention to detail.
            This not only enhances the charming look of your car but also
            maintains its value and lifetime. Kee­ping up with routine upkeep
            ke­eps your car shiny and sleek, making e­ach ride enjoyable.
            Whe­ther getting ready for a big e­vent or just taking care of your
            car. Taking the time to detail your car at home can be a rewarding
            attempt.
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
