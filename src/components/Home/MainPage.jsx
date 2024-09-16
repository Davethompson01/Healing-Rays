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
      className="bg-cover relative bg-center flex bg-no-repeat before:bg-black  "
      style={{
        backgroundImage: "url('/background.png')",
        width: "100%",
        height: "600px",
      }}
    >
      <div class=" absolute bg-gradient-to-l from-transparent to-black via-orange-300 opacity-55  w-full h-[600px] "></div>
      <div className="relative  flex items-center justify-start  ">
        <div className="grid gap-3 md:bg-opacity-30 p-8 md:w-[60%] md:grid md:gap-5 z-40">
          <h1 className="text-4xl  md:text-[3rem] font-bold text-white">
            The No.1 Platform for Telemedicine in Nigeria
          </h1>
          <p className=" max-w-[459px]  text-[20px] font-bold bg-[#0a4f1b] p-2 rounded-[10px] text-yellow-300 md:text-3xl">
            Premium access to healthcare in Nigeria
          </p>
          <p className="text-white ">
            Say goodbye to exorbitant consultation fees, long wait lines, and
            the lack of access to healthcare in Nigeria. As a leading provider
            of telemedicine in Nigeria, Healing Rays brings the doctor to your
            doorstep.
          </p>
          <div className=" flex gap-5 flex-wrap md:flex md:gap-4">
            <button
              onClick={handleClick}
              className="mt-6 bg-[#FFF27e] text-black  opacity-[87px] font-semibold  px-6 py-2 rounded-full"
            >
              Make an Appointment
            </button>
            <button
              onClick={contactClick}
              className="mt-6 bg-transparent border-[1px] text-white px-6 py-2 rounded-full"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
