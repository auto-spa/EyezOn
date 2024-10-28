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
    heading: "A Pioneering Approach to Car Care",
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
        subheading:"1. In-depth Analysis: The Cornerstone of Perfection",
        paragraph:"Embark on a journey with us as we unravel the secrets behind our unparalleled hand wash technique. At Eyez on the Prize Auto-Spa, we take the art of car care to a whole new level, starting with an Initial Inspection that sets the stage for perfection. Our seasoned technicians conduct a meticulous analysis, leaving no stone unturned in identifying those nuanced imperfections that escape the untrained eye.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "2. Premium Pre-Wash Treatments: Crafting Excellence",
        paragraph: (
          <div>
            <p>
            Picture this: Specially formulated cleaning agents, masterfully applied in a strategic dance across your vehicle’s exterior. Our Pre-Wash Treatment isn’t just a step; it’s a craftsmanship. These premium solutions break down and lift contaminants with surgical precision, ensuring that your vehicle emerges not just clean but revitalized, ready to steal the spotlight.
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
        subheading: "3. The Gentle Embrace: Hand Wash Mastery",
        paragraph: (
          <div>
            <p>
            In the heart of our service lies the soulful Gentle Hand Wash. It’s not just a routine; it’s an intimate connection between our skilled technicians and your vehicle. Armed with soft microfiber mitts, our experts delicately cleanse every inch, reaching where automated systems can’t. This hands-on mastery guarantees a level of cleanliness that transcends the ordinary, a touch that your car truly deserves.
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
        subheading: "4. Drying Redefined: A Shimmering Finish",
        paragraph: (
          <div>
            <p>
            Post-hand wash, we elevate drying to an art form. Our Specialized Drying Techniques don’t just remove excess water; they ensure a gleaming, streak-free finish. Say goodbye to water spots as your vehicle emerges not just immaculate but with a showroom-worthy shine. It’s not just attention to detail; it’s an obsession with brilliance.
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
        subheading: "5. Exceeding Expectations: The Final Inspection",
        paragraph: (
          <div>
            <p>
            No journey with us concludes without a meticulous Final Inspection. Every curve, every crevice undergoes scrutiny to ensure that our hand wash process has not just met but exceeded expectations. It’s not just a service; it’s a commitment to delivering excellence at every stage.
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
    heading: "Unparalleled Craftsmanship: Our Commitment to Uncompromising Quality",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            At Eyez on the Prize Auto-Spa, mediocrity has no place. We don’t merely meet industry standards; we redefine them. Our hand wash services are a symphony of precision, ensuring your vehicle doesn’t receive anything less than the best. It’s not just a wash; it’s a celebration of automotive excellence.
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
    heading:
      "Tailored Luxury: Customized Solutions for Every Vehicle",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>Understanding that each car is as unique as its owner, our hand wash services are far from generic. Whether you boast a sleek sports car or command a robust SUV, our technicians tailor their approach to suit your vehicle’s specific needs. Expect nothing less than optimal results, because your car deserves bespoke care.</p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Eco-conscious Brilliance: A Pledge to Environmental Responsibility",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            In an era where sustainability is paramount, we take pride in our Commitment to Environmental Responsibility. Our cleaning agents are not only effective but also environmentally conscious, ensuring that your car receives top-notch care without compromising the planet’s well-being. It’s more than a service; it’s a responsible choice.
            </p>
            <p className="mt-2"></p>
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
              "Unveiling the Artistry behind Our Unmatched Hand Wash Technique for Your Car?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 19, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:35 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/25.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            In the realm of automotive care, where every detail matters and
            excellence is non-negotiable, we take pride in unveiling the
            artistry behind our unparalleled hand wash technique. Prepare to
            embark on a journey that transcends the ordinary, as we delve into
            the intricacies of a process that goes beyond mere cleanliness. Our
            commitment to perfection is not just a service; it’s a testament to
            the meticulous craftsmanship that defines us. From the initial
            inspection that leaves no imperfection unnoticed to the gentle hand
            wash, a symphony of precision and dedication unfolds. Join us as we
            lift the curtain on a method that transforms your car care routine
            into an extraordinary experience. It’s not just about washing cars;
            it’s about crafting automotive brilliance, one meticulous step at a
            time.
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
            In the intricate world of car care, where precision and dedication
            reign supreme, Eyez on the Prize Auto-Spa stands as a beacon of
            excellence. We don’t just offer a service; we pledge a commitment to
            elevate your driving experience.Witness the unparalleled difference
            with our hand wash services, where every detail is meticulously
            crafted to make your vehicle shine like never before. It’s not
            merely a wash; it’s a transformative experience.Ready to redefine
            your standards in car care? Book your appointment now and embark on
            a journey towards automotive perfection. Visit our website or get in
            touch at (980) 307-0431 or via email at
            eyezontheprizeautospa@gmail.com.
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
