import React, { useState, useEffect } from "react";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";

const Healing = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 3000);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 3000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const maps = [
    {
      img: team1,
      h1: "Voluntary adviser in charge of IT",
      h3: "Mr Oladimeji Daniel TADE",
      h4: "Faith: Christianity",
      p: "I am Nigerian by birth and also a British National. I am an indigene of Ijebu Igbo, Ogun State, Nigeria.",
      p1: "I am a trained Electrical and Electronics Engineer, having obtained BEng Honours in Electrical and Electronics Engineering from UEL (University of East London), England over 17 years ago. Then, awarded an MSc in Computational & Software Techniques in Engineering including Mini Executive MBA program from Cranfield University, Bedfordshire, England over 16 years ago, completion Date September 2004. I have a number of IT Certifications including ISEB and Prince2 and some Organization specific training Certificates.",
    },
    {
      img: team2,
      h1: "Director",
      h3: "Yinka Tunji-ojo: God's Faithfulness...",
      p: "The book of Daniel 11:32 is a verse of the Holy Bible that succinctly captures everything about the life of Mrs Yinka Tunji-Ojo...",
      p1: "The Oyin Akoko born Yinka Tunji-Ojo is without doubt an exceptionally brilliant person who is also very gifted in having an eye for details and problem solving. She is well known for her multitasking ability. She is equally respected for being proactive in decision taking. Tunji-Ojo is also quite popular for her uncommon skills in business and leadership. Above all, everyone that has had any dealing with Yinka would readily vouch for her integrity, honesty and firmness which speak volume about her Christian faith.",
    },
    {
      img: team3,
      h1: "Voluntary adviser in charge of IT",
      h3: "Name : Mrs Odebode Abimbola Solape",
      p: "Faith: Christianity , I am Nigerian by birth and also a British National. I am an indigene of Ijebu Igbo, Ogun State, Nigeria.",
      p1: "I am a trained Electrical and Electronics Engineer, having obtained BEng Honours in Electrical and Electronics Engineering from UEL (University of East London), England over 17 years ago. Then, awarded an MSc in Computational & Software Techniques in Engineering including Mini Executive MBA program from Cranfield University, Bedfordshire, England over 16 years ago, completion Date September 2004. I have a number of IT Certifications including ISEB and Prince2 and some Organization specific training Certificates.",
    },
    {
      img: team4,
      h1: "The international network (Swiss):",
      h3: "Dr. Christoph A. Reinhardt",
      p: "HealingRays supporter and financial initiator of the website.",
      p1: "As a trained biologist he is experienced in Electron Microscopy, Tropical Medicine, Developmental Genetics, Toxicology and cell culture techniques in Switzerland (Swiss Tropical Institute, Univ. Basel; University of California, Irvine; Swiss Federal Institute of Technology, Zurich, among others). As a teacher and father of 6 children and grandfather of 11 grandchildren he is also experienced in practical life - as well as in music (classical and Spanish guitar, Gospel and Blues). And more recently he has built up a political network with the senior Green Liberal Party of the canton of Zurich, engaged in social reforms locally as well as internationally.",
    },
  ];

  return (
    <div className="bg-[#F0F0F0] pb-8">
      <h1 className="text-black px-5 text-center text-[1.3rem] font-semibold py-8">
        Healing Rays Team and Member
      </h1>

      <div className="grid place-items-center gap-7 px-5 sm:grid-cols-2 lg:grid-cols-1">
        {maps.map((element, index) => (
          <div
            key={index}
            className="bg-white w-full h-[450px] overflow-hidden gap-5 rounded-xl px-3 grid place-items-center py-5 lg:flex items-start lg:h-auto"
          >
            <div className="px-3 basis-[20%]">
              <img src={element.img} alt="" className="w-[180px] h-[180px]" />
            </div>
            <div className="grid gap-2 basis-[70%]">
              <h1 className="text-[#0A4F1b] text-[16px] font-bold">
                {element.h1}
              </h1>
              <h3 className="text-[#0A4F1b] text-[16px] font-bold">
                {element.h3}
              </h3>
              <h4 className="font-bold text-[20px]">{element.h4}</h4>
              <div className="max-h-[100px] overflow-auto lg:max-h-none">
                {expandedIndex === index ? (
                  <>
                    <p className="font-semibold mb-2 text-[14px]">
                      {element.p}
                    </p>
                    {element.p1 && (
                      <p className="font-semibold mb-2 text-[14px]">
                        {element.p1}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="font-semibold mb-2 text-[14px]">
                    {element.p.slice(0, 100) + "..."}
                  </p>
                )}
                {isMobile && (
                  <button
                    onClick={() => handleToggle(index)}
                    className="text-blue-500"
                  >
                    {expandedIndex === index ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Healing;
