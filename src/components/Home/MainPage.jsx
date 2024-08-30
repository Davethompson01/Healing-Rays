import React from "react";

const MainPage = () => {
  // const backgroundStyle = {
  //     backgroundImage: "url('/background.png')",
  //     backgroundSize: 'contain',
  //     height:"100vh",
  //     width:"100%",
  //     backgroundRepeat: 'no-repeat',
  //   };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background.png')",
        width: "100%",
        height: "500px",
      }}
    >
      <div className="relative inset-0 flex items-center justify-start">
        <div className=" md:bg-yellow-500 md:bg-opacity-30 p-8 md:w-[60%] md:grid gap-4">
          <h1 className="text-4xl  md:text-[3rem] font-bold text-white">
            The No.1 Platform for Telemedicine in Nigeria
          </h1>
          <p className="text-[20px] font-bold  text-yellow-300 md:text-3xl">
            Premium access to healthcare in Nigeria
          </p>
          <p className="text-white">
            Say goodbye to exorbitant consultation fees, long wait lines, and
            the lack of access to healthcare in Nigeria. As a leading provider
            of telemedicine in Nigeria, Healing Rays brings the doctor to your
            doorstep.
          </p>
          <div>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full">
            Make an Appointment
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
