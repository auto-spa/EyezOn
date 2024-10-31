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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MetadataProvider>
        <Navbar/>
        <Metadata/>
        {children}
        <Footer/>
        </MetadataProvider>
      </body>
    </html>
  );
}
