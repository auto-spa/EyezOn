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
    heading: "Everything You Should Know About Car Detailing",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Car detailing is a thorough and meticulous cleaning process that goes beyond regular car washes. It involves cleaning, restoring, and protecting a vehicle’s interior and exterior surfaces. The primary goal of car detailing service is to achieve a showroom-worthy appearance, ensuring that every nook and cranny of the vehicle is flawlessly clean and polished. In this blog article, we’ll explain, why it is important for car maintenance, and how it can benefit you and your vehicle.
            </p>
            <p className="mt-2">
              
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Importance of Car Detailing Service",
    sections: [
      {
        paragraph:
          "Car detailing service is more than just a luxury for car enthusiasts; it is a vital part of car maintenance. By getting your car detailed regularly, you can protect your car’s surfaces from environmental damage, such as UV rays, dirt, dust, and stains. You can also enhance your car’s appearance and make driving more comfortable and pleasant. Additionally, you can maintain your car’s value and make it more attractive to potential buyers if you ever decide to sell it.",
        image: "/images/blog-31-image1.jpg",
      },
    ],
  },
  ,
  {
    heading: "Services Offered in Car Detailing",
    sections: [
      {
        subheading: "",
        paragraph:
          "Car detailing purpose is to restore and protect your car’s surfaces from dirt, dust, stains, scratches, and other contaminants. This blog discusses the different types of car detailing services available and their significance to your vehicle. You will learn about interior detailing, exterior detailing, and auto detailing and what each service entails",
      },
      
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Interior Detailing",
        paragraph:
          "Interior detailing is all about ensuring the cabin is as clean and comfortable as possible. It includes deep cleaning of carpets, upholstery, dashboard, and other interior surfaces. Special attention is paid to vents, crevices, and hard-to-reach areas, leaving no dirt or dust behind. Additionally, interior detailing may involve conditioning and protecting materials like leather and vinyl.",
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
          "The significance of interior car cleaning cannot be overstated. A clean interior provides a healthier and more pleasant driving experience. It eliminates allergens and pollutants that may affect passengers’ health and prevents odors from lingering inside the car.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Exterior Detailing",
    sections: [
      {
        paragraph:
          "Exterior detailing focuses on revitalizing the car’s exterior appearance. The process typically starts with a thorough hand wash to remove dirt, grime, and contaminants. After that, a clay bar may be used to remove embedded impurities. Polishing and waxing follow to restore the paint’s shine and protect it from environmental damage.",
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
          "The significance of exterior detailing lies in preserving the car’s paint and clear coat. It shields the vehicle from UV rays, bird droppings, tree sap, and other harmful elements that can cause paint damage over time.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Auto Detailing",
    sections: [
      {
        paragraph:
          "Auto detailing encompasses both interior and exterior detailing, providing a complete rejuvenation for your vehicle. It combines the benefits of deep interior cleaning with the restoration of the exterior surfaces, leaving your car looking brand new.",
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
          "The auto detailing process involves a systematic approach to ensure every aspect of the car is treated with utmost care. From the interior surfaces to the paintwork and wheels, nothing is overlooked.",
        listItems: [],
        image: "/images/blog-31-image2.jpg",
      },
    ],
  },
  //
  
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
              "How Car Detailing Service Can Preserve Your Car’s Value"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "August 8, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "10:38 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-31.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
            
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
          Car detailing service is not just a cosmetic treatment but a way to preserve and enhance your vehicle’s value and beauty. By getting your car detailed regularly, you can ensure it looks and performs its best for a long time. If you are looking for a trusted and professional car detailing service, look no further than Eyez on the Prize Auto-Spa. Our top-notch services will leave your car sparkling and shining like never before. If you want your car to look its best and retain its value, consider entrusting it to Eyez on the Prize Auto-Spa for an exceptional car detailing experience.
          </p>
          <p className="text-md text-white mt-2">
           
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
