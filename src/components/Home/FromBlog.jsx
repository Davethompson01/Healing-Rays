import React from "react";
import blog from "./../../assets/FormBlog.png";
import blog1 from "./../../assets/FormBlog1.png";
import blog2 from "./../../assets/Blog2.png";

const FromBlog = () => {
  const maps = [
    {
      img: blog,
      h1: "Title",
      p1: "23rd August, 2023.   10:02 A.M",
      p2: "At Healing Rays, we believe that everyone deserves access to quality medical care, regardlessof their circumstances. We’re ona mission to bring vital health services to underserved communities and make a lasting impact on countless lives",
    },
    {
      img: blog1,
      h1: "Title",
      p1: "23rd August, 2023.   10:02 A.M",
      p2: "At Healing Rays, we believe that everyone deserves access to quality medical care, regardlessof their circumstances. We’re ona mission to bring vital health services to underserved communities and make a lasting impact on countless lives.",
    },
    {
      img: blog2,
      h1: "Title",
      p1: "23rd August, 2023.   10:02 A.M",
      p2: "At Healing Rays, we believe that everyone deserves access to quality medical care, regardlessof their circumstances. We’re ona mission to bring vital health services to underserved communities and make a lasting impact on countless lives",
    },
  ];
  return (
    <div className="px-3 bg-[#F0F0F0]">
      <div>
        <h1>
          From the Blog <span>Latest health news in Nigeria </span> 
        </h1>
        <div
          className={`grid place-content-center gap-5 bg-[f0f0f0] md:px-16 sm:grid-cols-2 md:grid-cols-3 `}
        >
          {maps.map((map, index) => (
            <div
              key={index}
              className={`grid gap-3 bg-white p-3 rounded-xl h-[600px]  border-gray-400 hover:bg-yellow-400 `}
            >
              <div className="grid place-items-center ">
                <img src={map.img} alt="" className="rounded-xl" />
              </div>
              <h1 className="text-3xl">{map.h1}</h1>
              <p>{map.p1}</p>
              <p>{map.p2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FromBlog;
