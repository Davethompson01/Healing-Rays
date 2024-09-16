import React from "react";

const Testimonials = () => {
  const maps = [
    {
      h1: "I used to think that consultations can only be physical until I met Healing Rays. They are prompt, thorough, detailed, and their services are reliable. The best part for me is their team of experts who always ensure that your consultation runs smoothly -from the laboratories to pharmaceuticals.They connect you with online doctors in Nigeria that ensure that the necessary tests are run, speak to you directly via phone, listen attentively, follow up… I mean!!! Healthcare is obviously a passion for them. I have proudly & confidently referred them to 6 people. Kudos!",
      p: "-       Mrs. Irene Johnson-Omowaiye",
    },
    {
      h1: "Healing Rays is founded and headed by an amazing Swiss-trained online doctor in Nigeria with years of knowledge and experience in providing telemedicine in Nigeria. I can't say enough about my experience with him over the last 6 years. He is extremely knowledgeable about medicine (both old and new methods), meticulous, and thorough with his patients. He manages my expectations in terms of results and focuses on only what is best. The patient experience he provides for me and family is second to none.He remains our preferred primary care provider till date.",
      p: "-       Mrs T. D",
    },
    {
      h1: "Your online medical consulting services are excellent! One unique attribute about Healing Rays is that they are extremely involved in their patients’ recovery. They give proper medical treatment and follow up on your health from beginning till the end. I can boldly say that Healing Rays is the best platform to find an online doctor in Nigeria quickly.",
      p: "-       Mr Adekoka",
    },
  ];
  return (
    <>
      <div className="bg-green-800 grid px-4 md:px-8 gap-8 text-white  place-content-center pt-8">
        <h1 className="text-white text-[2.3rem]">Testimonials</h1>
        <div className="grid gap-y-8 ">
          {maps.map((element, index) => (
            <div key={index} className="grid gap-4">
              <p>{element.h1}</p>
              <p className="text-right">{element.p}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
