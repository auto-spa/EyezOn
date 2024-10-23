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
    heading: "What is Buffing?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Buffing is a mechanical procedure that includes using a buffer
              machine with a rotating pad to remove defects from the car’s
              surface. These defects may also consist of scratches, oxidation,
              swirl marks, or something else that can decrease the charm of the
              auto.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        image: "/images/buffing.jpg",
      },
    ],
  },
  {
    heading: "Does Buffing a Car Remove Scratches?",
    sections: [
      {
        paragraph:
          "One question arises many times in mind before taking any new service. It will be useful for me or not? So, if you are worried about scratch removal, now do not panic. The buffing process helps remove the scratches. Buffing out scratches or reduce scratches by leveling the paint surface and smoothing out imperfections. If you think resolving deep scratches, it may require more extensive repair methods.",
        listItems: [,],
        image: "",
      },
    ],
  },
  {
    heading: "Buffing Techniques",
    sections: [
      {
        subheading: "There are two primary buffing techniques:",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Cutting: Cutting is used to remove deep scratches and other major imperfections in paint.",
          "Finishing: Finishing is a method to increase the shine and clarity of paint after cutting. This helps remove any burrs or micro-scratches left from the cutting process.",
        ],
      },
    ],
  },
  {
    heading: "Types of Buffing Pads",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Automotive buffing pads are available in different sorts, each
              designed for particular tasks inside the paint repairing method.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Cutting Pads: To cast off heavy imperfections consisting of deep scratches, oxidation, and swirl marks.",
          "Polishing Pads: To enhance the paint floor and get rid of mild imperfections after cutting.",
          "Finishing Pads: To further polish and finish the paint surface after polishing.",
          "Wool Pads: To provide aggressive cutting and remove defects quickly.",
          "Microfiber Pads: Often used for both heavy refining and finishing, offering both cutting and polishing capabilities.",
          "These are the only few examples of pads many other pads are used to make the process smooth, easy, and more useful.",
        ],
        image: "/images/What-is-Car-Detailing-300x200.png",
      },
    ],
  },
  {
    heading: "How Long Does Buffing a Car Take?",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              The time of car buffing depends on several factors, let’s read
              about them to find the right time requirements.
            </p>
            <p className="mt-2">
              Size is the factor that always matters in each field.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Small cars take 2 hours but a medium car can take more than 3 hours. Similarly, the buffing process of a full-size vehicle such as a truck can take more than 4 hours.",
          "The condition of the paint is also a factor that matters in calculating time.",
          "Buffing a car with light imperfections typically takes 1 to 2 hours. Similarly moderate issues can require 2 to 4 hours. However, the severe damage may extend the process to 4 to 6 hours or more.",
          "Wool Pads: To provide aggressive cutting and remove defects quickly.",
          "The vehicle buffing technique is another factor to consider while estimating the process time.",
          "Cutting and polishing can take an extra 1 to 2 hours, while single-step buffing can save time but may be less effective on severe defects.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: "What is Polishing?",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Car Polishing, on the other hand, is a much less competitive
              procedure that refines and increases the outside of the vehicle by
              disposing of scratches, swirl marks, and oxidation. It makes use
              of a sparkling compound and a pad to obtain a smooth, brilliant
              look, enhancing the overall look of the car.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [],
        image: "/images/Untitled-design-66-300x169.jpg",
      },
    ],
  },
  {
    heading: "Polishing Compounds and Abrasives",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            Car polishing is particularly effective in revitalizing dull or faded paint, making it look new and vibrant once again. The process is meticulous and requires skill to achieve the desired results. Like buffing, polishing also employs specialized machines and pads to ensure even application and superior outcomes.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Types of Polishing Pads",
          "Foam Pads",
          "Microfiber Pads",
          "Wool Pads",
          "Hybrid Pads",
          ""
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Key Difference between Buffing and Polishing",

    sections: [
      {
        subheading:"Purpose",
        paragraph: (
          <div>
            <p>
            The number one purpose of buffing is to do away with defects and imperfections from the automobile’s floor, whilst vehicle polishing pursues decorating the shine and glossiness of the paint.
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
    heading: "Level of Abrasion",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            Buffing includes more competitive compounds and abrasive pads, whilst automobile sprucing uses milder products with finer abrasives.
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
    heading: "Application",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            Buffing is generally endorsed for automobiles with extensive imperfections, even as polishing is ideal for maintaining the paint’s shine and preventing new imperfections.
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
    heading: "End Result",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            After buffing, the floor can also require similar refinement via polishing to reap an easy and sleek end.
            </p>
            <p className="mt-2">The key distinction between buffing and sharpening lies in their targets. Buffing is all approximately correcting imperfections, even as car sprucing is centered on enhancing the paint’s shine and look. Both processes complement each other in the car detailing journey. After buffing eliminates scratches and swirls, polishing takes center stage to bring out the paint’s brilliance.</p>
            <p className="mt-2"></p>
          </div>
        ),
       
        image: "",
      },
    ],
  },
  {
    heading: "How to Choose Better for Your Car",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            To choose between buffing and polishing for your car, consider the following:
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems:[
          "Buffing: Choose buffing if your car has deep scratches, heavy oxidation, or significant paint imperfections that need aggressive correction",
          "Polishing: Select polishing if your car’s paint is in good condition but has minor swirl marks, light scratches, or needs a shining finish enhancement."
        ],
       
        image: "",
      },
    ],
  },
  {
    heading: "The Benefits of Utilizing Professional Services",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            Some car lovers may even try buffing and polishing by themselves. However, there are clear benefits to hiring experts to manage those tasks. Professionals have expertise and acknowledgment of the details. They make sure every step is done accurately for the quality effects. Auto spas like Eyez on the Prize Auto-Spa use advanced tools and products. These are crucial for reaching outstanding results. Professional technicians are passionate about cars. They are committed to presenting the very best level of service. This ensures your car looks nice.
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
    heading: "Is Your Car Lacking the Shine It Deserves?",

    sections: [
      {
        paragraph: (
          <div>
            <p>
            Don’t permit dull paint and minor imperfections to dispose of the exterior look of your automobile. Our expert buffing and polishing services are right here to restore that showroom shine and shield your automobile exterior. With expert care, your vehicle will look brand new, with an ideal finish that lasts.
            </p>
            <p className="mt-2">Ready to provide your car with the treatment it deserves?</p>
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
              "What’s the difference between Polishing and buffing process; Which Technique is Right for Your Car?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 8, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "11:04 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-4.png"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            If you ever search for the improvement of paint for your vehicle,
            you must hear about the terms vehicle polishing and vehicle buffing.
            But do you know these both are different and applied on different
            cars? This article will tell you the difference between buffing and
            polishing. Additionally, the way to choose the best according to
            your requirements.
          </p>
          <p className="mt-6">
            The exterior of a vehicle matters more greatly than the interior. A
            well-maintained vehicle not only looks stunning but also displays
            the owner’s nature and approach to car maintenance. To reap that
            excessive-class shine, car polishing services play an important
            role. Let’s dive into details about buffing, polishing, and their
            difference.
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
          Taking care of an automobile’s exterior is more than just keeping its charm. It’s an investment in its longevity and value. Buffing and polishing are important components of the car detailing technique. However, understanding the key differences between these two terms is important. Buffing corrects imperfections, at the same time as polishing enhances shine and restores shine. When it involves expert automobile detailing services, Eyez on the Prize Auto-Spa is a company you could accept as true. Their determination to excellence, know-how, and interest in elements units them apart as a pacesetter in the enterprise. Regular automobile waxing not best continues your vehicle’s searching new but also protects its exterior from put on and tear..
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
