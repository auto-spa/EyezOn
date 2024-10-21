"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setDropdownOpen] = useState(false);
  const [areaDropdownOpen, setareaDropdownOpen] = useState(false);

  // Function to close the submenu on item click
  const handleSubmenuItemClick = () => {
    setDropdownOpen(false);
  };
  const handleareaSubmenuItemClick = () => {
    setareaDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-purple-800 to-black bg-opacity-50 text-white">

      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo and Brand */}
        <a
    href="https://flowbite.com"
    className="flex items-center h-full"
    style={{ minWidth: '4rem' , marginTop: '1rem'}} // Reserve space for the larger logo
  >
    <img
      src="/images/logo.png"
      alt="Flowbite Logo"
      className="h-[6rem] object-contain mt-4" // Ensure the logo stays within its height boundary
    />
  </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Centered Menu Items */}
        <div
  className={`${
    isOpen ? "block" : "hidden"
  } items-center justify-center font-medium w-full md:flex md:w-auto md:order-1`}
>
  <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-white hover:text-purple-300"
        onClick={handleSubmenuItemClick}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-white hover:text-purple-300"
        onClick={handleSubmenuItemClick}
      >
        About Us
      </a>
    </li>
    <li>
      <button
        onClick={() => setDropdownOpen(!servicesDropdownOpen)}
        className="flex items-center justify-between w-full py-2 px-3 text-white hover:text-purple-300 md:w-auto"
      >
        Services
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
    </li>
    <li>
      <button
        onClick={() => setareaDropdownOpen(!areaDropdownOpen)}
        className="flex items-center justify-between w-full py-2 px-3 text-white hover:text-purple-300 md:w-auto"
      >
        Service Areas
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
    </li>
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-white hover:text-purple-300"
        onClick={handleSubmenuItemClick}
      >
        Plans
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-white hover:text-purple-300"
        onClick={handleSubmenuItemClick}
      >
        Gallery
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-white hover:text-purple-300"
        onClick={handleSubmenuItemClick}
      >
        Blogs
      </a>
    </li>
  </ul>
</div>


        {/* "Book Now" and "Call Now" Buttons - Hidden on Mobile */}
        <div className="hidden md:flex space-x-4 rtl:space-x-reverse md:order-2">
          <a
            href="#"
            className="outline-btn flex justify-center items-center gap-4 group"
          >
            Book Now
          </a>
          <a
            href="tel:+123456789"
            className="outline-btn flex justify-center items-center gap-4 group"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Mega Menu */}
      {servicesDropdownOpen && (
  <div
    id="mega-menu-full-dropdown"
    className="mt-1 bg-gradient-to-r from-black via-purple-800 to-black bg-opacity-40 text-white"
  >
    <div className="grid max-w-screen-xl px-4 py-5 mx-auto  text-white">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "Auto Detailing", desc: "Drive with Confidence, Detailing Excellence Defined" },
          { title: "Boating Detailing", desc: "Sail In Style, Navigating Waters of Cleanliness" },
          { title: "Engine Bay Detailing", desc: "Detailing Excellence and Charm, Under the Hood" },
          { title: "Exterior Detailing", desc: "Exterior Brilliance, Journey with Pride" },
          { title: "Interior Detailing", desc: "Comfort Redefined, Car Interior Detailing Excellence" },
          { title: "Luxury Detailing", desc: "Luxury Redefined, Detailing at Its Finest" },
          { title: "RV Detailing", desc: "Roam with Radiance, RV Detailing Perfection" },
          { title: "Polishing", desc: "Polish to Perfection, Shine Never Seen Before" },
          { title: "Upholstery Cleaning", desc: "Comfort Restored With Upholstery Cleaning Mastery" },
          { title: "Ceramic Coating", desc: "Protect with Precision, Ceramic Coating Perfection" },
        ].map((service, index) => (
          <li key={index}>
            <a
              href="#"
              className="block p-3 rounded-lg   hover:bg-purple-500/10"
              onClick={handleSubmenuItemClick}
            >
              <div className="font-semibold">{service.title}</div>
              <span className="text-sm text-gray-300 dark:text-gray-400">
                {service.desc}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}



       {/* Service Areas Mega Menu */}
       {areaDropdownOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 bg-gradient-to-r from-black via-purple-800 to-black bg-opacity-40 text-white"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg  hover:bg-purple-500/10"
                  onClick={handleareaSubmenuItemClick }
                >
                  <div className="font-semibold">Charlotte, NC</div>
                  <span className="text-sm text-gray-400">
                  Deep Cleanliness at Charlotte's Car Spa
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg  hover:bg-purple-500/10"
                  onClick={handleareaSubmenuItemClick }
                >
                  <div className="font-semibold">Huntersville, NC</div>
                  <span className="text-sm text-gray-400">
                  Sail with Sparkle, Huntersville's Boat Detailing
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg  hover:bg-purple-500/10"
                  onClick={handleareaSubmenuItemClick }
                >
                  <div className="font-semibold">Mooresville, NC</div>
                  <span className="text-sm text-gray-400">
                  Precision Performance: Mooresville's Engine Beautification Experts
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg  hover:bg-purple-500/10"
                >
                  <div className="font-semibold">Cornelius, NC</div>
                  <span className="text-sm text-gray-400">
                  Detailing Delight, Exterior Cleaning in Cornelius
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg  hover:bg-purple-500/10"
                  onClick={handleareaSubmenuItemClick }
                >
                  <div className="font-semibold">Concord, NC</div>
                  <span className="text-sm text-gray-400 ">
                  Concord Comfort: Car Interior Cleaning Specialists
                  </span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      )}

    </nav>
  );
}
