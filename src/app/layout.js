import Head from 'next/head';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import { MetadataProvider } from "./components/MetaDataContext";
import Metadata from "./components/Metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
    {
      "@type": "AutoRepair",
      "name": "Ceramic Coating",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/s580-wrapped-grey-ppf-1.png"
    },
    {
      "@type": "AutoRepair",
      "name": "Exterior Detailing",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/x1.jpg"
    },
    {
      "@type": "AutoRepair",
      "name": "Interior Detailing",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/interior3.jpg"
    },
    {
      "@type": "AutoRepair",
      "name": "Upholstery Cleaning",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/van-foaming.jpg"
    },
    {
      "@type": "AutoRepair",
      "name": "Engine Bay Detailing",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/dsfg-1536x1041.webp"
    },
    {
      "@type": "AutoRepair",
      "name": "RV Detailing",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/camperfan-trailer-scaled-1-1536x864.jpg"
    },
    {
      "@type": "AutoRepair",
      "name": "Auto Detailing",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/man-cleaning-black-car-with-microfiber-cloth-car-detailing-generative-ai-scaled-1-1536x861.jpg"
    },
    {
      "@type": "AutoRepair",
      "name": "Luxury Detailing",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/man-stands-car-with-word-s-it-1536x1536.jpg"
    },
    {
      "@type": "AutoRepair",
      "name": "Boating Detailing",
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
      "image": "https://eyezontheprizeautospa.com/wp-content/uploads/2024/04/winch-sailors-hands-sailboat-scaled-1-1536x1025.jpg"
    }
  ]
            })
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MetadataProvider>
          <Navbar />
          <Metadata />
          {children}
          <Footer />
        </MetadataProvider>
      </body>
    </html>
  );
}
