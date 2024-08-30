import React from "react";

const FindDoctor = () => {
  const onlines = [
    "✓ Choose between a physical or virtual consultation",
    "✓ Get access to top-rated specialists and schedule a consultation within 2 minutes or at your preferred time!",
    "✓ Arrange a quick and easy referral to any Swiss or European hospital for further care",
    "✓ Grab your handy digital prescription and get your drugs delivered to you anywhere!",
    "✓ Email follow-up after 3 days, all for free!",
    "✓ 100% trustworthy, private, and confidential",
  ];
  return (
    <div className="grid place-content-center ">
      <div className="py-10 px-8 grid gap-7 md:flex max-w-[1200px] place-content-center">
        <div className="flex flex-col gap-3  " style={{ flexBasis: "50%" }}>
          <h1 className="text-[2rem] font-semibold ">
            Find an online doctor in Nigeria
          </h1>
          <p className="text-[2rem] font-semibold text-red-700">
            Health is just a click away
          </p>
          <p>
            Connect with an online doctor in Nigeria or foreign healthcare
            professional anytime, anywhere!
          </p>
          <div className="grid gap-3">
            {onlines.map((online, index) => (
              <h1 key={index}>{online}</h1>
            ))}
          </div>
        </div>
        <div className="relative pl-4" style={{ flexBasis: "40%" }}>
          <img src="finddoctor.png" alt="" className="md:h-[300px]" />
          <img src="/finddoctor1.png" alt="" className="md:h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
