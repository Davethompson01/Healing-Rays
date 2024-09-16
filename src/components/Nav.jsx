import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = ({ handleScrollToAbout }) => {
  const navigate = useNavigate();
  const liTags = [
    { p: "Home", path: "/" },
    { p: "About", path: "/#About" },
    { p: "Contact Us", path: "/ContactUs" },
    { p: "Our Team", path: "./OurTeam" },
    { p: "Terms and conditions", path: "./TermsHeader" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  const handleLinkClick = (path) => {
    if (path === "/#About") {
      if (window.location.pathname === "/") {
        handleScrollToAbout();
      } else {
        navigate("/");
        setTimeout(handleScrollToAbout, 0);
      }
    } else {
      navigate(path);
    }
  };
  return (
    <div className="bg-gray-300">
      <div className="relative flex justify-between max-w-screen-lg items-center px-6 py-2 md:px-10">
        <div>
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="hidden sm:flex">
          <ul className="p-4 flex gap-5">
            {liTags.map((element, index) => (
              <li
                key={index}
                className="py-2 font-bold text-[17px]"
                onClick={() => handleLinkClick(element.path)}
              >
                <Link to={element.path}>{element.p}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex flex-col justify-around gap-2 cursor-pointer z-50 sm:hidden"
          onClick={toggleMenu}
        >
          <div
            className={`w-8 h-1 z-20 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2 bg-white" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 z-20 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-8 h-1 z-20 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
            }`}
          ></div>
          <div
            className={`absolute top-0 left-0 w-48 bg-white border border-gray-300 shadow-lg transition-transform duration-300 transform ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <ul
              className={`p-4 bg-black opacity-90 flex flex-col gap-6 items-center   text-white w-[100vw] h-[100vh] transition-transform duration-300 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div>
                <img src="logo.png" alt="" />
              </div>
              {liTags.map((element, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold">
                    <Link
                      to={element.path}
                      onClick={() => handleLinkClick(element.path)}
                    >
                      {element.p}
                    </Link>
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
