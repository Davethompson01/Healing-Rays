import React from "react";

const ImproveHealth = () => {
  const healthcare = [
    {
      h1: "Electronic Medical Records (EMR): ",
      p: "Get premium access to healthcare in Nigeria withour easy and affordable online clinic that enablesyou consult with foreign healthcare personnel such as top-rated physiotherapists, speech therapists, nutritionists, and occupational health practitioners, alongside Nigerian doctors, and nurses for home care services anytime, anywhere.",
    },
    {
      h1: "Non-governmental Organization (NGO): ",
      p: "Every quarter, we deploy resources and collaborate with international nutrition professionals, Nigerian doctors and a few health blogs in Nigeria to improve the situation of healthcare in Nigeria",
    },
    {
      h1: "Online Market Place (OMP):",
      p: " We stock a wide range of wellness products and medical supplies, thereby improving your access to healthcare in Nigeria",
    },
  ];
  return (
    <div>
      <div className="py-9 bg-gray-300 grid-items-center text-center px-16">
        <h1 className="text-[25px] font-semibold pb-5">
          How we improve healthcare in Nigeria
        </h1>
        <div className="grid gap-8 px-3 sm:grid-cols-2">
          {healthcare.map((element, index) => (
            <div key={index} className="bg-white p-4 rounded-3xl ">
              <h1 className="font-bold text-[18px]">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.6665 0.666656L28.5665 5.24999L23.9998 7.33332L28.5665 9.43332L30.6665 14L32.7498 9.43332L37.3332 7.33332L32.7498 5.24999M13.9998 5.66666L9.83317 14.8333L0.666504 19L9.83317 23.1667L13.9998 32.3333L18.1665 23.1667L27.3332 19L18.1665 14.8333M30.6665 24L28.5665 28.5667L23.9998 30.6667L28.5665 32.75L30.6665 37.3333L32.7498 32.75L37.3332 30.6667L32.7498 28.5667"
                    fill="#E0E0C3"
                  />
                </svg>
                {element.h1}
              </h1>
              <p>{element.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImproveHealth;
