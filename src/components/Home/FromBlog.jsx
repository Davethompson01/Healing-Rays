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
    <div>
      <div>
        <h1>
          From the Blog <span>Latest health news in Nigeria </span> 
        </h1>
        <div className="grid place-content-center gap-5 bg-[f0f0f0]">
          {maps.map((map, index) => (
            <div key={index} className="grid place-content-center bg-red-400">
              <img src={map.img} alt="" />
              <h1>{map.h1}</h1>
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
