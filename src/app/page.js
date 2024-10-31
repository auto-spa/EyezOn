// Import necessary components
import Head from 'next/head';
import About from "./components/About/about";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Gallery from "./components/GalleryHome/gallery";
import Hero from "./components/Hero/Hero";
import Package from "./components/Package/package";
import Quote from "./components/Quote/qoute";
import FlipCardComponent from "./components/ServicesCard/servicecard";
import Testimonial from "./components/Testimonial/testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Eyez on the Prize Auto Spa",
              "logo": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/03/image_2023_05_31T20_38_30_018Z-copy.png",
              "telephone": "+1-980-307-0431",
              "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/03/image_2023_05_31T20_38_30_018Z-copy.png",
              "description": "Eyez on the Prize Auto Spa offers top-class mobile auto detailing services in Charlotte, NC, specializing in vehicle and boat detailing with unmatched attention to detail. We bring your vehicle back to showroom condition with expert exterior, interior, and upholstery detailing.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Fairview Rd",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "postalCode": "28210",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.2438938,
                "longitude": -80.8838055
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-980-307-0431",
                "contactType": "Customer Service",
                "areaServed": ["US"],
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/eyezontheprizeautospa",
                "https://www.instagram.com/eyezontheprizeautospa",
                "https://www.tiktok.com/@eyezontheprizeautospa",
                "https://www.youtube.com/channel/eyezontheprizeautospa",
                "https://www.pinterest.com/eyezontheprizeautospa"
              ],
              "url": "https://www.eyezontheprizeautospa.com",
              "serviceArea": {
                "@type": "Place",
                "name": ["Charlotte, NC", "Huntersville, NC", "Mooresville, NC", "Cornelius, NC", "Concord, NC"]
              },
              "priceRange": "$$",
              "department": [
                {
                  "@type": "AutoRepair",
                  "name": "Polishing",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Fairview Rd",
                    "addressLocality": "Charlotte",
                    "addressRegion": "NC",
                    "postalCode": "28210",
                    "addressCountry": "US"
                  },
                  "telephone": "+1-980-307-0431",
                  "priceRange": "$$",
                  "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/s3-1536x1025.webp"
                },
                // Add other department objects as needed
              ]
            })
          }}
        />
      </Head>

      {/* Page content */}
      <Hero />
      <About />
      <FlipCardComponent />
      <Quote />
      <Package />
      <ChooseUs />
      <Testimonial />
      <Gallery />
    </>
  );
}
