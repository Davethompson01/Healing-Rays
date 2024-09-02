import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ handleScrollToAbout }) => {
  const navigate = useNavigate();
  
  const liTags = [
    { p: "Home", path: "/" },
    { p: "About", path: "/#About" },
    { p: "Photo Gallery", path: "/Hotgallery" },
    { p: "Our Team", path: "./OurTeam" },
    { p: "Terms and conditions", path: "./TermsHeader" },
  ];

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
              <li key={index} className="py-2">
                <p onClick={() => handleLinkClick(element.path)}>{element.p}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu */}
        <div className="flex flex-col justify-around gap-2 cursor-pointer z-50 sm:hidden">
          {/* Mobile menu items */}
          <div className="absolute top-0 left-0 w-48 bg-white border border-gray-300 shadow-lg transition-transform duration-300 transform">
            <ul className="p-4">
              {liTags.map((element, index) => (
                <div key={index}>
                  <p onClick={() => handleLinkClick(element.path)}>{element.p}</p>
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
