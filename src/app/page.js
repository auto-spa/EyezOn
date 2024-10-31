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
{/* <Navbar/> */}
<Hero/>
<About/>
<FlipCardComponent/>
<Quote/>
<Package/>
<ChooseUs/>
<Testimonial/>
<Gallery/>

{/* <Footer/> */}
   </>
  );
}
