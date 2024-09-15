import React from "react";
import med1 from "../../assets/med1.png";

const Contactpage = () => {
  return (
    <>
      <div className="px-4 py-6">
        <div className="grid gap-y-10 mb-8">
          <h1 className="text-green-800 font-bold text-[2.5rem] text-center">
            Contact Us
          </h1>
          <p className="font-bold text-[16px] text-center">
            Get In Touch With Us
          </p>
        </div>

        <div className="sm:flex justify-between">
          <form action="" className="w-full grid gap-9 basis-[50%]  sm:gap-3">
            <div className="sm:flex  grid gap-7">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="w-full bg-gray-200 h-[40px] text-black p-3 rounded-xl"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="email"
                className="w-full bg-gray-200 h-[40px] text-black p-3 rounded-xl"
              />
            </div>
            <div className="sm:flex basis-[50%] grid gap-7">
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone Number"
                className="w-full bg-gray-200 h-[40px] text-black p-3 rounded-xl"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="w-full bg-gray-200 h-[40px] text-black p-3 rounded-xl"
              />
            </div>
            <textarea
              name=""
              className="h-[400px] bg-gray-200 w-full rounded-xl sm:h-[200px]"
              placeholder="message"
              id=""
            ></textarea>
            <div>
              <h1 className="bg-green-900 mt-4 text-white place-items-center grid rounded-xl h-[50px]">
                Send message
              </h1>
            </div>
          </form>

          <div className="grid place-items-center my-8 basis-[50%]">
            <img src={med1} alt="" className="sm:h-[500px] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
