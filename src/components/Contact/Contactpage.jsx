import React from "react";
import med1 from "../../assets/med1.png";

const Contactpage = () => {
  return (
    <>
      <div className="px-6 py-6 md:px-10 bg-[#FaF9F6]">
        <div className="grid gap-y-10 mb-8">
          <h1 className="text-green-800 font-bold text-[2.5rem] text-center">
            Contact Us
          </h1>
          <p className="font-bold text-[16px] text-center">
            Get In Touch With Us
          </p>
        </div>

        <div className="sm:flex justify-evenly items-center relative">
          <form action="" className="md:w-[580px]  grid  gap-9   sm:gap-3">
            <div className="sm:flex  grid gap-7">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="w-full bg-gray-200 h-[40px] text-black p-3 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-lg border-[1px] border-orange-300"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="w-full bg-gray-200  focus:outline-none focus:ring-2 focus:ring-orange-300 h-[40px] border-[1px] border-orange-300 text-black p-3 rounded-lg"
              />
            </div>
            <div className="sm:flex basis-[50%] grid gap-7">
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone Number"
                className="w-full focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-200 h-[40px] border-[1px] border-orange-300 text-black p-3 rounded-lg"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="w-full focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-200 border-[1px] border-orange-300 h-[40px] text-black p-3 rounded-lg"
              />
            </div>
            <textarea
              name=""
              className="h-[400px] focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-200 w-full rounded-xl sm:h-[200px] p-5 border-[2px] border-orange-300"
              placeholder="message"
              id=""
            ></textarea>
            <div>
              <h1 className="bg-green-900 mt-4 text-white place-items-center grid rounded-xl h-[50px]">
                Send message
              </h1>
            </div>
          </form>

          <div className="place-items-center my-8  relative hidden lg:grid">
            <img src={med1} alt="" className="sm:h-[450px] " />
          </div>
        </div>
        <div className="bg-[#fffaca] grid place-content-center  mt-12 h-[200px]">
          <h1 className="text-xl sm:text-2xl font-bold   text-center">
            Get Your Free Medical Checkup.
          </h1>
          <h1 className="text-xl sm:text-2xl font-bold   text-center">
            Let's Connect With Us!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
