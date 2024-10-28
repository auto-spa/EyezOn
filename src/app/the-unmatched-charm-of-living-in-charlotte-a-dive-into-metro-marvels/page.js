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
    heading: "A Flourishing Economy",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Nestled in the heart of the Southeast, Charlotte boasts a vibrant and diverse economy that stands as a beacon of opportunity. Home to major financial institutions and a burgeoning tech sector, this city offers a dynamic job market, propelling individuals toward unparalleled career growth and prosperity.
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
    heading: "Urban Marvels: Charlotte’s Skyline",
    sections: [

      {
        subheading:"",
        paragraph:"Behold the architectural prowess and modernity of Charlotte’s skyline, a testament to the city’s economic might. Iconic structures such as the Bank of America Corporate Center define the urban panorama, creating a skyline that not only reflects economic strength but also exudes a touch of grandeur.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Architectural Marvel: Bank of America Corporate Center",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Witness the awe-inspiring Bank of America Corporate Center, an architectural marvel that graces the city’s skyline. Its sleek design and towering presence symbolize Charlotte’s commitment to excellence and innovation.
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
    heading: "Education Hub: Nurturing Minds",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            In the Charlotte Metro Area, academic excellence takes center stage. Esteemed educational institutions, from top-tier universities to exemplary K-12 schools, create an environment conducive to fostering the intellectual growth of the next generation.
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
    heading: "Welcoming Communities",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Dive into the rich tapestry of Charlotte’s neighborhoods, where diversity and inclusivity harmoniously coexist. Whether embracing the historic charm of Dilworth or immersing in the modern allure of South End, each community radiates a unique charm, cultivating a profound sense of belonging for residents
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
    heading: "Recreation Retreats: Green Spaces and Beyond",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Escape the urban hustle and bask in Charlotte’s abundance of green spaces. From the expansive Freedom Park to the serene McDowell Nature Preserve, residents can seamlessly immerse themselves in nature without compromising the conveniences of city living.
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
    heading: "Commute Convenience",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Navigating the city is a breeze thanks to efficient transportation networks. The Lynx Light Rail and a well-connected highway system ensure residents spend less time commuting, allowing them to fully enjoy the myriad amenities the region offers.
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
      "Culinary Delights",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>Embark on a gastronomic journey through Charlotte’s diverse culinary landscape. From trendy eateries in Uptown to the authentic southern flavors of Plaza Midwood, the city’s food scene caters to every palate, making dining an exquisite experience.</p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "Charlotte Metro Area – A Lifestyle Par Excellence",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            The Charlotte Metro Area transcends being merely a living destination; it is a lifestyle choice. Its thriving economy, cultural richness, and community warmth make it a beacon of unparalleled living. Experience the charm, embrace the diversity, and savor the essence of a life well-lived in the Queen City.
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
    heading: "Health and Wellness Oasis",

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
        subheading: "Prioritizing Resident Well-being",
        paragraph: (
          <div>
            <p>
            Amidst the hustle and bustle, Charlotte prioritizes the well-being of its residents. The city boasts state-of-the-art healthcare facilities and a myriad of fitness centers, promoting a holistic approach to health and wellness
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
        subheading: "Real Estate Marvels",
        paragraph: (
          <div>
            <p>
            Explore the diverse real estate landscape of the Charlotte Metro Area, offering options from historic homes with timeless charm to sleek, and modern condominiums. The housing market reflects stability and provides a range of choices for those seeking to call Charlotte home.
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
        subheading: "Timeless Charm: Historic Homes",
        paragraph: (
          <div>
            <p>
            Step into the allure of historic homes, characterized by timeless charm and tree-lined streets that narrate the city’s rich history.
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
        subheading: "Contemporary Living: Modern Condos",
        paragraph: (
          <div>
            <p>
            Experience contemporary living with modern condos offering uptown skyline views, a testament to Charlotte’s commitment to providing residents with diverse and luxurious living options.
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
        subheading: "Arts and Culture Extravaganza",
        paragraph: (
          <div>
            <p>
            Immerse yourself in a cultural renaissance in Charlotte, a city pulsating with artistic energy. From theaters to galleries, the cultural scene thrives, making it a haven for residents. Explore renowned institutions like the Mint Museum and the vibrant NoDa Arts District, where creativity knows no bounds.
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
        subheading: "Climate Comforts",
        paragraph: (
          <div>
            <p>
            Escape extreme weather fluctuations as Charlotte offers a moderate climate, creating an ideal haven for those seeking a balanced living experience. Mild winters and warm summers provide a pleasant backdrop for year-round outdoor activities, enhancing the overall quality of life.
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
    heading: "Education Hub Continuation: Lifelong Learning",

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
        subheading: "Fostering Continuous Growth",
        paragraph: (
          <div>
            <p>
            Beyond formal education, Charlotte fosters a culture of continuous learning. The city hosts workshops, seminars, and community events, ensuring residents have ample opportunities for personal and professional development. Lifelong learners find Charlotte to be an environment that nurtures intellectual curiosity
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
        subheading: "Future Outlook",
        paragraph: (
          <div>
            <p>
            As we gaze into the future of the Charlotte Metro Area, the trajectory is undeniably upward. Ongoing urban development projects, infrastructure enhancements, and a commitment to sustainability position Charlotte as an ideal investment for both residents and businesses.
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
              "The Unmatched Charm of Living in Charlotte: A Dive into Metro Marvels"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 17, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:22 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-26.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
          Welcome to the enchanting realm of the Charlotte Metro Area, where urban sophistication seamlessly intertwines with suburban tranquility. As connoisseurs of exceptional living, we invite you to delve into an exploration of the unmatched allure that distinguishes this region from the rest.
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
          In the ever-evolving landscape of desirable places to live, the Charlotte Metro Area stands as a shining example of a city that seamlessly blends economic vibrancy, cultural richness, and a high quality of life. Embrace the undeniable allure of this thriving metropolis, where lifestyle and opportunity converge in perfect harmony. Welcome to Charlotte, where every facet of living is meticulously curated for a truly exceptional experience.
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
