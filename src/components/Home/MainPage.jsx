import React from "react";
import { useNavigate } from "react-router-dom";
// import { useRef } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ContactUs");
  };
  const contactClick = () => {
    navigate("/TermsHeader");
  };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat before:bg-black z-50  "
      style={{
        backgroundImage: "url('/background.png')",
        width: "100%",
        height: "600px",
      }}
    >
      <div className="relative  flex items-center justify-start  ">
        <div className="  md:bg-opacity-30 p-8 md:w-[60%] md:grid gap-8">
          <h1 className="text-4xl  md:text-[3rem] font-bold text-white">
            The No.1 Platform for Telemedicine in Nigeria
          </h1>
          <p className="text-[20px] font-bold bg-[#0a4f1b] sm:bg-transparent p-2 inline-block text-yellow-300 md:text-3xl">
            Premium access to healthcare in Nigeria
          </p>
          <p className="text-white ">
            Say goodbye to exorbitant consultation fees, long wait lines, and
            the lack of access to healthcare in Nigeria. As a leading provider
            of telemedicine in Nigeria, Healing Rays brings the doctor to your
            doorstep.
          </p>
          <div className="sm:flex gap-4">
            <button
              onClick={handleClick}
              className="mt-6 bg-[#FFF27e] text-black px-6 py-2 rounded-full"
            >
              Make an Appointment
            </button>
            <button 
            onClick={contactClick}
            className="mt-6 bg-transparent border-[1px] text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
