import React, { useState } from "react";

const Nav = ({ aboutUsRef }) => {
  const handleScrollToAboutUs = () => {
    // Scroll smoothly to the AboutUs section when the button is clicked
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const liTags = [
    { label: "Home", action: () => console.log("Home clicked") },
    { label: "About", action: handleScrollToAboutUs },
    {
      label: "Photo Gallery",
      action: () => console.log("Photo Gallery clicked"),
    },
    { label: "Contact us", action: () => console.log("Contact us clicked") },
    {
      label: "Terms and conditions",
      action: () => console.log("Terms and conditions clicked"),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="bg-gray-300">
      <div className="relative flex justify-between max-w-screen-lg items-center  px-6 py-2 md:px-10">
        <div>
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className=" hidden sm:flex">
          <ul className="p-4 flex gap-5">
            {liTags.map((element, index) => (
              <li key={index} className="py-2">
                {element}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex flex-col justify-around gap-2 cursor-pointer z-50 sm:hidden"
          onClick={toggleMenu}
        >
          <div
            className={`w-8 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-8 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`absolute top-0 left-0 w-48 bg-white border border-gray-300 shadow-lg transition-transform duration-300 transform ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <ul className="p-4">
              {liTags.map((element, index) => (
                <li
                  key={index}
                  className="py-2 cursor-pointer"
                  onClick={element.action}
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;