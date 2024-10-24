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
    heading: "Understanding Smoke Odor in Cars",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The smearing of smoke sinks deep into a car’s interior areas. It
              sticks to the seats, carpe­ts, ceiling lining, and even ge­ts into
              the A/C system. Cigarette smoke particles are small and sticky, so
              they hold on firmly and keep giving off a smell. Car detailing
              smoke odor removal is tougher than handling other smells.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How Do You Detail a Car That Has Been Smoked In?",

    sections: [
      {
        paragraph: (
          <div>
            <p>
              Tackling a smoke-smeared car clean-up needs serious steps. Start
              with a top-to-bottom scrubbing inside. Get rid of everything loose
              and any junk. Vacuum thoroughly and give extra care to seats,
              rugs, and the dash to capture loose particles. Use a brush tool to
              reach tight places where ash or smoke bits might hide.
            </p>
            <p className="mt-2">
              Afterward, tidy all solid areas with a designated cleaner. Give
              the dash, console, door skins, and all plastic or vinyl areas a
              good rubdown. For fabric sofas and rugs, a steam cleaner or
              upholstery product can take care of smoke residues. Leather seats
              need a leather fixer and softener to prevent harm and keep the
              texture flexible
            </p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "How Long Does It Take to Get Cigarette Smell Out of Car?",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Got a smoky smell? Lots of stuff can help. Activated charcoal is a
              winner, it’s full of tiny holes that capture smoke bits, helping
              cut down the odor. Baking soda is another helper in your pantry.
              Just sprinkle it on your car seats or carpets and let it chill for
              a couple of hours. When you vacuum it up later, it takes the smoke
              smell with it.
            </p>
            <p className="mt-2">
              Do you know what else works? White­ vinegar. Just leave a few
              bowls of it in your car overnight, and it sucks up the smoke. And
              don’t forget about coffee grounds and citrus peels, they’re
              natural weapons against bad smells. They’re especially handy when
              you first start trying car detailing to get smoke odor removal.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Cigarette Smell in Car Permanent?",
    sections: [
      {
        paragraph:
          "The cigarette odor in a car isn’t forever, yet it can be quite persistent. The longer a car is exposed to cigarette smoke, the tougher the stink gets to remove. With consistent tries and proper methods, the odor can be largely decreased and frequently vanish. However, in harsh situations where the smoke has deeply seeped into the car’s materials, a slight, lingering smell might remain.",

        image: "",
      },
    ],
  },
  {
    heading: "What Do Car Detailers Use to Remove Odors?",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Experts in car detailing use smart tricks and top-notch goods to
              get rid of smells. One powerful tool they use is ozone treatment.
              Here’s how it works: An ozone machine makes ozone gas. This gas
              tackles smoke particles, changing them and wiping them out
              completely. Even though it might take quite a few hours, it’s
              proven to be really good at getting rid of strong smoke smells
            </p>
            <p className="mt-2">
              Detailing professionals also turn to enzyme cleaners. What makes
              them special? They dismantle the organics that create stinky
              odors, wiping away the root of the problem rather than just
              covering it up. What’s more, they often have odor-killing sprays
              in their toolkit. These can be sprayed on lots of different
              surfaces in the car.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Step-by-Step Guide to Smoke Odor Removal",
    sections: [
      {
        paragraph: "",

        listItems: [
          "Step 1: Initial Cleaning: First, clear out any personal belongings from your vehicle. Be sure to get rid of all litter and give the inside of the car a good vacuum. Focus more on places that may hide ash or cigarette ends for car detailing smoke odor removal.",
          "Step 2: Surface Cleaning: Start with all the firm areas and get them squeaky clean. Grab a microfiber cloth and rub down the dash, central console, door panes, and any other firm sections. Upholstery? Carpe­ts? Tackle them with a steam cleaner or fabric cleaner to pull out any hidden smoke particles.",
          "Step 3: Odor Absorption: Pop in some stink-soaking ingredients like activated charcoal, baking soda, or coffee grounds into the car. Let them sit for a day or more to soak up as much smoke smell as they can.",
          "Step 4: Deep Cleaning: Try a thorough cleaning approach, such as steam cleaning or using an enzyme cleaner. These methods can reach the deeper parts of fabric and carpet. This is a key step to break down and get rid of smoke particles that have nestled deep inside the fibers.",
          "Step 5: Ozone Treatment: Should you have one, an ozone generator is ideal for dealing with the car’s inside. This top-quality treatment is powerful in removing smoke smells and can really boost the results.",
          "Step 6: Air Freshening: Once you wrap up the cleaning, go for a car-specific air freshener. Pick a smell you like, but shy away from intense scents. They might clash with the lingering smoke smell.",
        ],
      },
    ],
  },
  {
    heading: "Preventive Measures for Smoke Odor",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Let’s keep the smoke smell from coming back. Ask people to smoke
              outside the car. Often, clean the car inside. Periodically use
              materials that soak up sme­lls to keep the air sme­lling good. Car
              air purifiers also help to keep the car’s interior smelling fresh
              for car detailing smoke odor removal.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Struggling with Persistent Smoke Odors in Your Car?",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Picture yourself in a car that’s as fresh-smelling as when it was
              brand new. We’re experts in auto detailing. Our skills include
              removing stubborn smoke smells so your car feels welcoming again.
              We use top-notch techniques and high-quality products. No stink is
              too tough for us. We do an in-depth clean, absorb the odors, and
              even use ozone treatments. These steps assure a complete and
              enduring fix.
            </p>
            <p className="mt-2">
              Are you ready to experience the difference between a
              professionally detailed car?
            </p>
          </div>
        ),
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
            {title || "Best Methods for Car Detailing Smoke Odor Removal"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem icon={<FaCalendarAlt />} text={date || "July 15, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "9:09 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-7.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            Keeping your car neat and smelling good can be tricky, especially
            when dealing with smoke. This stubborn smell is known to stick and
            is tough to get rid of, particularly when the car is often used by
            smokers. This article will teach you about the top methods for car
            detailing smoke odor removal. By the end, you’ll understand how to
            make your car smell fresh again.
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
            Getting rid of smoke and smells from your car through detailing
            takes careful effort. With this guide’s steps and proper items, the
            car detailing smoke odor removal can be lessened. Sometimes, it’s
            completely gone. Professionals in car detailing use specific
            methods, such as ozone therapy and enzyme soaps. This work works on
            tough smells. Don’t forget, cleanliness and preventative action will
            keep your car smelling nice.
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
