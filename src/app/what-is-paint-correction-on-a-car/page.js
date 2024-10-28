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
    heading: "A Rejuvenating Touch for Your Car’s Paintwork",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Paint correction is a meticulous process aimed at restoring and enhancing the finish of a vehicle’s paintwork. Over time, a car’s exterior can accumulate imperfections such as swirl marks, scratches, oxidation, and water spots. It involves the systematic removal of these imperfections to reveal a flawless and glossy surface.
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
    heading: "The Paint Correction Process Unveiled",
    sections: [
      {
        listItems: [
          
        ],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Assessment and Inspection",
        paragraph: (
          <div>
            <p>
            A skilled detailer begins by closely inspecting the paintwork to identify imperfections and assess the overall condition. This step is crucial in determining the appropriate level of correction required.
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
    heading: "",

    sections: [
      {
        subheading:"Washing and Decontamination",
        paragraph: (
          <div>
            <p>
            Before any corrective measures are taken, the vehicle undergoes a thorough wash to remove dirt and contaminants. Decontamination follows, ensuring a clean canvas for the correction process.
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
    heading: "",

    sections: [
      {
        subheading:"Clay Bar Treatment",
        paragraph: (
          <div>
            <p>
            A clay bar is used to further eliminate embedded contaminants from the paint surface. This step creates a smooth foundation for the correction process.
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
    heading: "",

    sections: [
      {
        subheading:"Machine Polishing",
        paragraph: (
          <div>
            <p>
            The heart of paint correction lies in machine polishing, where abrasive compounds are carefully applied using specialized tools. This process gradually removes layers of clear coat, leveling imperfections and restoring clarity.
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
    heading: "",
    sections: [
      {
        subheading:"Fine Polishing and Finishing",
        paragraph: (
          <div>
            <p>
            To refine the finish and achieve a high level of gloss, finer polishing compounds are employed. This step adds depth to the paintwork and enhances its overall aesthetic appeal.
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
    heading: "The Benefits of Paint Correction For True Potential of Your Car’s Exterior",

    sections: [
      {
        subheading: "",
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
    heading: "",

    sections: [
      {
        subheading:"Restores Paint Clarity",
        paragraph: (
          <div>
            <p>
            It is a powerful remedy for swirl marks, scratches, and hazing, restoring the clarity of the paint and unveiling its true vibrancy.
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
    heading: "",

    sections: [
      {
        subheading:"Enhances Gloss and Shine",
        paragraph: (
          <div>
            <p>
            It enhances the gloss and shine of the vehicle’s exterior, achieving a finish reminiscent of a brand-new car by removing imperfections.
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
    heading: "",
    sections: [
      {
        subheading:"Improves Resale Value",
        paragraph: (
          <div>
            <p>
            A car with well-maintained and corrected paintwork commands a higher resale value. The investment in it pays off in the long run.
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
    heading: "",

    sections: [
      {
        subheading:"Preserves Clear Coat",
        paragraph: (
          <div>
            <p>
            The process is designed to remove only a minimal amount of clear coat, preserving the integrity of the paint and ensuring long-term protection.
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
    heading: "",

    sections: [
      {
        subheading:"Prepares Surface for Ceramic Coating",
        paragraph: (
          <div>
            <p>
            It serves as a preparatory step for ceramic coating, creating an ideal surface for the application of this advanced protective solution.
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
    heading: "The Partnership with Ceramic Coating For Protection and Shine",

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
    heading: "",

    sections: [
      {
        subheading:"Unlocking the Potential of Ceramic Coating",
        paragraph: (
          <div>
            <p>
            Ceramic coating, often referred to as nano-ceramic coating, is a liquid polymer applied to the exterior surfaces of a vehicle. This advanced protective solution chemically bonds with the factory paint, creating a durable and hydrophobic layer. The synergistic relationship between paint correction and ceramic coating results in a finish that transcends traditional waxing and sealants.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Enhanced Protection",
        paragraph: (
          <div>
            <p>
            Ceramic coating forms a protective shield against environmental contaminants, UV rays, bird droppings, and oxidation, preserving the integrity of the paint.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Hydrophobic Properties",
        paragraph: (
          <div>
            <p>
            The hydrophobic nature of ceramic coating repels water, preventing water spots and making maintenance a breeze. Water beads off the surface, leaving a clean and glossy finish
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Long-Lasting Durability",
        paragraph: (
          <div>
            <p>
            Unlike traditional waxes, ceramic coating offers long-lasting protection, with some products providing durability for several years.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Resistance to Chemicals",
        paragraph: (
          <div>
            <p>
            The chemical resistance of ceramic coating shields the paint from harsh chemicals, road salts, and contaminants, ensuring the longevity of the finish.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "How Paint Correction and Ceramic Coating Work in Harmony",

    sections: [
      {
        subheading:"",
        paragraph: (
          <div>
            <p>
            Before applying ceramic coating, paint correction is essential. The corrected surface ensures optimal bonding, maximizing the effectiveness of the ceramic coating.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Surface Preparation",
        paragraph: (
          <div>
            <p>
            The surface is thoroughly cleaned and prepared for the application of ceramic coating. Any remaining residue from the correction process is removed.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Application of Ceramic Coating",
        paragraph: (
          <div>
            <p>
            Ceramic coating is carefully applied to the paint surface. The liquid polymer bonds with the microscopic pores of the clear coat, creating a strong and durable protective layer.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Curing Process",
        paragraph: (
          <div>
            <p>
            The applied ceramic coating undergoes a curing process, during which it chemically bonds with the paint. This step is critical for the longevity and effectiveness of the coating.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading:"Final Inspection",
        paragraph: (
          <div>
            <p>
            Once the curing process is complete, a final inspection ensures that the paint correction and ceramic coating have seamlessly transformed the vehicle’s exterior.
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Raise Up Your Car’s Beauty and Attraction",

    sections: [
      {
        subheading:"",
        paragraph: (
          <div>
            <p>
            Ready to give your car a makeover that’s both stunning and protective? Don’t miss out on the opportunity to enhance your car’s looks and shield it like never before. ​Click the link above to discover how paint correction and ceramic coating can transform how your vehicle looks. Uncover the real potential of your car. A true masterpiece that turns heads on the road. Your path to a flawless finish starts right here.
            </p>
            <p className="mt-2">
              
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
              "What is Paint Correction on a Car?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 11, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "11:03 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-22.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
          Enter the transformative processes of paint correction and ceramic coating, two techniques that go beyond conventional detailing to elevate the appearance and protection of your vehicle. Now we learn the intricacies of it, exploring what it entails, its benefits, and the synergistic relationship it shares with ceramic coating.
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
          The tandem of paint correction and ceramic coating emerges as a transformative force, breathing new life into the exterior of your vehicle. The careful artistry of this service revitalizes the paintwork, while ceramic coating provides a shield of protection that surpasses traditional methods.
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
