// components/Package.jsx
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const Package = () => {
  const packages = [
    {
      title: "Standard Detail",
      price: "$150",
      features: [
        "Foam Bath/Pre Wash",
        "Wheels/wells Cleaned",
        "Contact Wash",
        "Doors & Trunk Jamb",
        "Gas Cap Cleaned",
        "Air Blower & Dry",
        "Tire Dressing",
        "Spot Free Windows",
        "Interior Blow Out",
        "Vacuum/Dust",
        "Panels, Dash, Console, etc wipe down",
        "Air Freshener",
        "Protective Paint Sealant",
      ],
    },
    {
      title: "Clay and Protect",
      price: "$200",
      features: [
        "Foam Bath/Pre Wash",
        "Wheels/wells Cleaned",
        "Contact Wash",
        "Iron Removal",
        "Clay Bar Treatment",
        "Exterior Cracks & Seams",
        "Doors & Trunk Jamb",
        "Gas Cap Cleaned",
        "Air Blower & Dry",
        "Tire Dressing",
        "Exterior Trim Protection",
        "Spot Free Windows (exterior only)",
        "Protective Paint Sealant",
      ],
    },
    {
      title: "Full Interior Reset",
      price: "$250",
      features: [
        "Interior Blow-Out",
        "Vacuum/Dust",
        "Panels, Cup Holders, etc Deep Cleaned",
        "Steam Cleaning Treatment",
        "Shampoo & Heated Extraction on All Fabric Seats & Floor/Mats",
        "Air Vents Cleaned",
        "Leather Cleaned and Conditioned",
        "Spot Free Windows (Interior Only)",
        "Ozone Odor Treatment",
        "Air Freshener",
        "Price varies based on size of vehicle and pre existing conditions",
      ],
    },
    {
      title: "Full Vehicle Reset",
      price: "$350",
      features: [
        "Add on Engine Bay for Just $40",
        "Interior Blow Out",
        "Vacuum Dust",
        "Panels, Cup Holders, etc Clean",
        "Steam Cleaning Treatment",
        "Shampoo and Heated Extraction on All Fabric/Upholstery",
        "Air Vents Cleaned",
        "Leather Cleaned and Conditioned",
        "Spot Free Windows(Inside and Outside)",
        "Ozone Odor Treatment",
        "Foam Bath/Pre Wash",
        "Wheels/wells Cleaned",
        "Contact Wash",
        "Iron Removal",
        "Clay Bar Treatment",
        "Doors & Trunk Jamb",
        "Gas Cap Cleaned",
        "Air Blower and Dryer",
        "Tire Dressing",
        "Exterior Trim Protection",
        "Protective Paint Sealant",
      ],
    },
    {
      title: "Paint Enhancement & Protection",
      price: "$340",
      features: [
        "Foam Bath/Pre Wash",
        "Contact Wash",
        "Iron Removal",
        "Claybar Treatment",
        "Wheels/Wells Cleaned",
        "Doors & Trunk Jambs",
        "Gas Cap Cleaned",
        "Air Blower & Dry",
        "Machine Polish (adds high gloss finish)",
        "6 Month Ceramic Paint Protection",
        "Tire Dressing",
        "Exterior Trim Protection",
      ],
    },
    {
      title: "Ceramic Coating",
      price: "$600",
      features: [
        "Foam Bath/Pre Wash",
        "Wheels/Wells Cleaned",
        "Contact Wash",
        "Iron Removal",
        "Claybar Treatment",
        "Exterior Cracks & Seams",
        "Doors & Trunk Jambs",
        "Gas Cap Cleaned",
        "Air Blower & Dry",
        "Tire Dressing",
        "Spot Free Windows (exterior only)",
        "Machine Polish (adds high gloss finish)",
        "Choice of any 1-9 Year Ceramic Coating Protection",
        "(Price varies based on size of vehicle and pre-existing conditions.)",
      ],
    },
    {
      title: "Add On Services",
      price: "",
      features: [
        "Pet Hair Removal ~$60",
        "Scratch Removal ~$50",
        "Headlight Restoration ~$60",
        "Engine Bay Cleaning ~$40",
        "Windshield Ceramic Coating ~$60",
        "Wheel Faces Ceramic Coating ~$200",
        "Interior Ceramic Coating ~$250",
        "Smoke Odor Removal ~$400",
        "(Price varies based on size of vehicle and pre-existing conditions.)",
      ],
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold uppercase mb-4">Our Packages</h2>
        <p className="text-xl mb-8">
          Experience the best with our tailored packages!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-purple-700 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold uppercase mb-2">{pkg.title}</h3>
              <p className="text-4xl font-extrabold mb-4">
                {pkg.price}{" "}
                <span className="text-lg font-normal">/Starting at</span>
              </p>
              <hr className="border-t border-white/30 my-4" />

              <div className="grid grid-cols-2 gap-4">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6">
                      <FaCheckCircle className="text-white w-full h-full" />
                    </div>
                    <span className="leading-tight">{feature}</span>
                    
                  </div>
                  
                ))}
                
              </div>
              <Link href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services">
            <button className="inline-block border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition mt-5">
              Book Now
            </button>
          </Link>
        

            </div>
            
          ))}
        </div>
        
      </div>
     
    </section>
  );
};

export default Package;
