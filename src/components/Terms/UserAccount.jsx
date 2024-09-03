import React from "react";

const UserAccount = () => {
  const maps = [
    {
      h1: "1",
      p: " You are using your real name and identity.",
    },
    {
      h1: "2",
      p: "Healing Rays will verify your information and confirm your application before it is approved.",
    },
    {
      h1: "3",
      p: "Your medical license and personal information provided is true, accurate, and up-to-date.",
    },
    {
      h1: "4",
      p: "You will keep your password confidential and notify us immediately you suspect it has been stolen or your account hacked or compromised.",
    },
    {
      h1: "5",
      p: "You will be required to provide an updated copy of your medical license as soon as it is renewed each . year to remain activated.",
    },
    {
      h1: "6",
      p: "You are responsible for any action performed through your user account regardless of whether or not it is you performing it.",
    },
    {
      h1: "7",
      p: " You will keep all information exchanged confidential.",
    },
    {
      h1: "8",
      p: "Healing Rays reserves the right to close down your account if it becomes necessary.",
    },
    {
      h1: "9",
      p: " All interactions between you and any assigned patient will be carried out solely via the Healing Rays platform.You will receive and respond to notifications promptly.",
    },
  ];
  return (
    <>
      <div className=" grid ">
        <div className="px-3 sm:px-10 max-w-screen-lg">
          <h1 className="flex gap-x-3 sm:gap-x-12 text-[#0A4F1b] text-[18px] font-bold  ">
            <p>i.</p>
            <span>
              User accounts By registering as a doctor on the Healing Rays
              health platform, you agree that:
            </span>
          </h1>
          <div className="grid gap-y-1  mt-">
            {maps.map((element, index) => (
              <div key={index} className="flex gap-7 font-semibold">
                <h1>{element.h1}</h1>
                <p>{element.p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:px-10 mt-16 max-w-screen-lg px-2">
          <div className="w-full h-[2px] bg-gray-400"></div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
