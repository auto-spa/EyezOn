// src/context/MetadataContext.js
"use client";
import { createContext, useContext } from "react";

const MetadataContext = createContext();

export const MetadataProvider = ({ children }) => {
  const metadata = {
    "/": {
      title: "Detailing Services for a Pristine Vehicle in Charlotte",
      description:
        "Experience top detailing services in Charlotte at Eyez on the Prize auto spa. Our experts deliver a showroom shine for your vehicle. Book today for a stunning finish!",
    },
    "/services": {
      title:
        "Comprehensive Detailing Services for All Vehicles in Charlotte",
      description: "Eyez on the Prize auto spa offers a full range of auto detailing services in Charlotte. Choose from interior, exterior, polishing, and more. Contact us for top-notch results!",
    },
    "/services/auto-detailing": {
      title: "Auto Detailing Services for a Showroom Shine in Charlotte",
      description: "Experience Charlotte’s finest auto detailing at Eyez on the Prize auto spa. Our skilled team makes every vehicle look brand new. Schedule your detailing service today!",
    },
    "/services/boating-detailing": {
      title: "Boat Detailing Services for a Spotless Finish in Charlotte",
      description: "Preserve your boat’s beauty with detailing services from Eyez on the Prize auto spa. Charlotte’s experts in marine detailing, we make your boat shine. Book with us today!",
    },
    "/services/engine-bay-detailing": {
      title: "Engine Bay Detailing for a Cleaner Vehicle in Charlotte",
      description: "Keep your engine bay spotless with Eyez on the Prize auto spa. Our Charlotte-based service helps maintain your car’s performance and aesthetics. Book engine detailing now!",
    },
    "/services/exterior-detailing": {
      title: "Exterior Detailing Services for a Stunning Look in Charlotte",
      description:"Transform your vehicle’s exterior with expert detailing from Eyez on the Prize auto spa. Located in Charlotte, we bring out your car’s full potential. Schedule today!"
    },
    "/services/interior-detailing": {
      title: "Interior Detailing Services for a Fresh Interior in Charlotte",
      description:
        "Refresh your car’s interior with Eyez on the Prize auto spa. Our Charlotte specialists offer deep cleaning, leaving interiors pristine. Schedule your detailing appointment today!.",
    },
    "/services/luxury-detailing": {
      title: "Luxury Detailing Services for High-End Cars in Charlotte",
      description: "Treat your luxury vehicle to premier detailing in Charlotte. Eyez on the Prize auto spa brings exclusive care for the finest results. Reserve your luxury detailing now!",
    },
    "/services/rv-detailing-2": {
      title: "RV Detailing Services for a Like-New Look in Charlotte",
      description: "Make your RV road-ready with Eyez on the Prize auto spa detailing service in Charlotte. From exterior polishing to interior cleaning, enjoy a like-new finish. Call us today!",
    },
    "/services/polishing": {
      title: "Car Polishing Services for a Gleaming Finish in Charlotte",
      description:
        "Restore shine to your car with our professional polishing services. Eyez on the Prize auto spa in Charlotte offers unbeatable quality. Book your polishing appointment today!",
    },
    "/services/upholstery-cleaning": {
      title:
        "Upholstery Cleaning Services for Stain-Free Interiors in Charlotte",
      description:
        "Give your car’s upholstery a fresh look with our cleaning service. Eyez on the Prize auto spa in Charlotte ensures stain-free, clean seats. Contact us for an appointment!",
    },
    "/services/ceramic-coating": {
      title: "Ceramic Coating Services for Ultimate Protection in Charlotte",
      description:
        "Protect your car’s finish with Eyez on the Prize auto spa ceramic coating in Charlotte. Durable, high-quality protection that lasts. Contact us for lasting car care!",
    },
    "/service-areas/charlotte-nc": {
      title:
        "Professional Detailing Services for Vehicles in Charlotte",
      description:
        "Eyez on the Prize auto spa is Charlotte’s go-to for professional auto detailing. Serving Charlotte and nearby areas, we offer a variety of detailing services. Call today!",
    },
    "/service-areas/huntersville-nc": {
      title:
        "Huntersville Auto Detailing Services for a Flawless Look",
      description:
        "Eyez on the Prize auto spa offers premium auto detailing in Huntersville, NC. From interiors to exteriors, trust us to make your car shine. Schedule with us today!",
    },
    "/service-areas/mooresville-nc": {
      title: "Auto Detailing for Pristine Cars in Mooresville",
      description:
        "Eyez on the Prize auto spa provides Mooresville with top-notch detailing services. Interior, exterior, and more our team makes every car look exceptional. Contact us today!",
    },
    "/service-areas/cornelius-nc": {
      title: "Detailing Services for Every Vehicle in Cornelius",
      description:
        "Get your car detailed in Cornelius, NC, with Eyez on the Prize auto spa. Specializing in all detailing services, we make every car look flawless. Book an appointment today!",
    },
    "/service-areas/concord-nc": {
      title: "Concord Detailing Services for a Clean Finish",
      description:
        "Eyez on the Prize auto spa brings professional auto detailing to Concord, NC. With a full range of services, we make cars shine inside and out. Schedule today!",
    },

    "/blogs": {
      title: "Detailing Tips and Insights for a Perfect Vehicle in Charlotte",
      description:
        "Discover tips, trends, and expert advice on auto detailing from Eyez on the Prize in Charlotte. Keep your vehicle looking its best with our insights. Read more now!",
    },
    "/the-best-pressure-washers-for-car-detailing-and-cleaning": {
      title: "The Best Pressure Washers for Car Detailing and Cleaning",
      description:
        "This article on pressure washers for auto detailing covers how they work, what to look for when choosing one, and tips for usage and maintenance.",
    },
    "/the-complete-guide-to-car-wax-how-to-choose-and-use": {
      title: "The Complete Guide to Car Wax: How to Choose and Use?",
      description:
        "The right wax can make your vehicle shine whilst shielding it from many dangerous elements.",
    },
    "/how-long-does-car-detailing-take-a-comprehensive-guide": {
      title: "How Long Does Car Detailing Take? A Comprehensive Guide",
      description:
        "This article covers car detailing specifics, including what’s included, the time required, and how it enhances your vehicle's condition and appearance.",
    },
    "/unveiling-the-difference-between-buffing-and-polishing-which-technique-is-right-for-your-car": {
      title: "What’s the difference between Polishing and buffing process",
      description:
        "Buffing removes scratches and imperfections, while polishing adds shine to your car’s paint. Use buffing for deep scratches and polishing for minor flaws.",
    },
    "/easy-ways-to-remove-swirl-marks-from-your-car": {
      title: "Easy Ways to Remove Swirl Marks from Your Car",
      description:
        "This article talks about some effective strategies to tackle these marks and keep your car searching first-rate.",
    },
    "/is-a-touchless-car-wash-safe-for-all-vehicle-types": {
      title: "Is a Touchless Car Wash Safe for All Vehicle Types?",
      description:
        "Explore touchless car washes, their unique features, and whether they’re a lasting option for vehicle care in this informative article.",
    },
    "/car-detailing-smoke-odor-removal": {
      title: "Best Methods for Car Detailing Smoke Odor Removal",
      description:
        "This article will teach you about the top methods for car detailing smoke odor removal. By the end, you'll understand how to make your car smell fresh again.",
    },
    "/quick-and-easy-steps-for-successful-rv-oxidation-removal": {
      title:
        "Quick and Easy Steps for Successful RV Oxidation Removal ",
      description:
        "Discover easy steps for RV oxidation removal. Our guide offers practical tips to restore shine and protect your RV's exterior from further damage.",
    },
    "/how-much-to-tip-for-car-detailing": {
      title: "How Do You Decide How Much to Tip for Car Detailing?",
      description:
        "This article aims to provide you with a comprehensive understanding of how to decide on the perfect tip for car detailing services.",
    },
    "/can-you-achieve-a-showroom-shine-with-a-car-wash-detail-at-home": {
      title:
        "Can You Achieve a Showroom Shine with a Car Wash Detail at Home?",
      description:
        "This article will walk you through the necessary steps to ensure your car not only shines but also receives the care it deserves, preserving its look and value.",
    },
    "/is-there-a-safe-way-to-use-car-polish-without-damaging-your-car": {
      title: "Is There a Safe Way to Use Car Polish Without Damaging Your Car?",
      description:
        "My aim for this article is to explore the safe and effective way to use car polish to achieve a beautiful shine without harming your vehicle.",
    },
    "/how-often-should-i-detail-my-boat-to-keep-it-looking-great": {
      title: "How Often Should I Detail My Boat to Keep It Looking Great?",
      description:
        "Discover the ideal frequency for boat detailing to maintain its pristine appearance and protect its value. Learn more for a flawless vessel!",
    },
    "/why-is-boat-detailing-important-for-achieving-a-showroom-shine": {
      title: "Why is boat detailing Important for Achieving a Showroom Shine?",
      description:
        "This article explores why boat detailing is crucial for achieving that sought-after showroom shine.",
    },
    "/how-do-i-prevent-mobile-rv-detailing-problems-in-the-future": {
      title: "How Do I Prevent Mobile RV Detailing Problems in the Future?",
      description:
        "Preventing issues with mobile RV detailing primarily involves taking proactive steps and making well-informed decisions.",
    },
    "/how-often-should-you-use-a-car-cleaning-kit-to-maintain-your-vehicle": {
      title:
        "How Often Should You Use a Car Cleaning Kit to Maintain Your Vehicle? ",
      description:
        "This article will explore the details of maintaining your vehicle with regular cleaning.",
    },
    "/how-to-apply-car-ceramic-coating-for-ultimate-protection": {
      title:
        "How to Apply Car Ceramic Coating for Ultimate Protection?",
      description:
        "We will provide a detailed exploration of the sequential technique for applying car ceramic coating services, enabling car enthusiasts to get high-quality results",
    },
    "/ceramic-coating-cost-in-charlotte": {
      title: "How Much Does a Ceramic Coating Cost in Charlotte?",
      description:
        "the universe of ceramic coating price, looking at their benefits, components that influence their expenses, and the general worth",
    },
    "/is-3d-ceramic-coating-suitable-for-all-types-of-surfaces": {
      title: "Is 3D Ceramic Coating Suitable for All Types of Surfaces?",
      description:
        "The wide extent of uses for 3D car care ceramic coating, including its capacity to work well on many surfaces and its amazing transforming",
    },
    "/how-much-does-paint-correction-cost-in-charlotte-nc": {
      title: "How Much Does Paint Correction Cost in Charlotte, NC?",
      description:
        "The various aspects that affect the costs of paint correction in Charlotte, NC. It is important to provide you with important data",
    },
    "/how-to-fix-dents-and-micro-scratches-on-car": {
      title: "How To Fix Dents and Micro Scratches On Car?",
      description:
        "Efficient techniques for repairing dents and addressing minor scratches, providing you with the tools and knowledge you need to restore",
    },
    "/what-is-paint-correction-on-a-car": {
      title: "What is Paint Correction on a Car?",
      description:
        "Enter the transformative processes of paint correction and ceramic coating, two techniques that go beyond conventional detailing to elevate",
    },
    "/a-touch-of-sparkle-mobile-spa-in-charlotte": {
      title: "A Touch of Sparkle Mobile Spa in Charlotte",
      description:
        "Enter A Touch of Sparkle Mobile Spa, a unique and convenient way to bring the luxury spa experience directly to you. Join us on a journey",
    },
    "/how-to-fix-scratches-on-interior-car-plastic-in-nc": {
      title: "How to Fix Scratches on Interior Car Plastic in NC",
      description:
        "Car scratches can be a source of frustration for car owners, no matter how minor. The interior plastic of your vehicle is not exempt",
    },
    "/unveiling-the-artistry-behind-our-unmatched-hand-wash-technique-for-your-car": {
      title: "Unveiling the Artistry behind Our Unmatched Hand Wash Technique for Your Car",
      description:
        "We take pride in unveiling the artistry behind our unparalleled hand wash technique. Prepare to embark on a journey that transcends the ordinary,",
    },
    "/the-unmatched-charm-of-living-in-charlotte-a-dive-into-metro-marvels": {
      title: "The Unmatched Charm of Living in Charlotte: A Dive into Metro Marvels",
      description:
        "Welcome to the enchanting realm of the Charlotte Metro Area, where urban sophistication seamlessly intertwines with suburban tranquility.",
    },
    "/comprehensive-guide-to-engine-cleaning-for-peak-performance": {
      title: "Comprehensive Guide to Engine Cleaning for Peak Performance",
      description:
        "We grasp the vital importance of engine cleanliness. In this detailed guide, we unveil the fundamental steps to meticulously cleanse your car's engine,",
    },
    "/how-much-is-paint-correction-and-ceramic-coating": {
      title: "How Much Is Paint Correction and Ceramic Coating",
      description:
        "So, you're thinking about giving your beloved car a little extra TLC with paint correction and ceramic coating?",
    },
    "/exterior-detailing-can-it-remove-scratches-and-dents-on-cars": {
      title: "Exterior Detailing - Can it Remove Scratches and Dents on Cars?",
      description:
        "Explore top-notch exterior detailing services that can effectively remove scratches and dents, restoring your car's pristine finish",
    },
    "/the-magic-of-ceramic-coating-unveiling-the-longevity": {
      title:
        "The Magic of Ceramic Coating: Unveiling the Longevity",
      description:
        "Ceramic Coating has taken the automotive world by storm in recent years, promising unrivaled protection and shine for vehicles",
    },
    "/how-car-detailing-service-can-preserve-your-cars-value": {
      title: "How Car Detailing Service Can Preserve Your Car's Value",
      description:
        "If you want your car to look its best and retain its value, consider entrusting it to Eyez on the Prize Auto-Spa for an exceptional car detailing experience.",
    },
    "/contact-us": {
      title: "Contact Us for Exceptional Auto Detailing in Charlotte",
      description:
        "Get in touch with Eyez on the Prize for premier auto detailing in Charlotte. Our team is ready to assist with any questions or bookings. Contact us today!",
    },
    "/gallery": {
      title: "Gallery of Detailing Services for Stunning Results in Charlotte",
      description:
        "View our gallery showcasing Eyez on the Prize detailing transformations. See the exceptional results from our Charlotte team. Get inspired for your own vehicle!",
    },
    "/plans": {
      title:
        "Custom Detailing Plans for Every Vehicle in Charlotte",
      description:
        "Choose from our detailing plans to suit every vehicle’s needs in Charlotte. Eyez on the Prize auto spa provides quality, affordability, and lasting results. See our options today!",
    },
    "/service-areas": {
      title: "Detailing Services for Various Locations Near Charlotte",
      description:
        "Explore Eyez on the Prize auto spa detailing service areas near Charlotte, NC. From auto to boat detailing, we provide expert service nearby. Reach out for local detailing!",
    },
    "/services": {
      title: "Comprehensive Detailing Services for All Vehicles in Charlotte",
      description:
        "Eyez on the Prize auto spa offers a full range of auto detailing services in Charlotte. Choose from interior, exterior, polishing, and more. Contact us for top-notch results!",
    },
    
    

    // Add more pages as needed...
  };

  return (
    <MetadataContext.Provider value={metadata}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => useContext(MetadataContext);
