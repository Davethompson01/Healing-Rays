import React from "react";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
const Healing = () => {
  const maps = [
    {
      img: team1,
      h1: "Voluntary adviser  in charge of IT",
      h3: "Mr Oladimeji Daniel TADE",
      h4: "Faith: Christianity",
      p: "I am Nigerian by birth and also a British National. I am an indigene of Ijebu Igbo, Ogun State, Nigeria.I am a trained Electrical and Electronics Engineer, having obtained BEng Honours in Electrical and Electronics Engineering from UEL (University of East London), England over 17 years ago. Then, awarded an MSc in Computational & Software Techniques in Engineering including Mini Executive MBA program from Cranfield University, Bedfordshire, England over 16 years ago, completion Date September 2004. I have a number of IT Certifications including ISEB and Prince2 and some Organization specific training Certificates.Over 15 Years post Academic experience in IT having worked in Airline and Financial industry, and the last 10 Years plus in Swiss Banking. I am passionate about quality and Real Estates.In my spare time, I'd like to listen to quality music, do some research and enjoy participating in competitive sports particularly football as I am a very active individual.",
    },
    {
      img: team2,
      h1: "Director",
      h3: "Yinka Tunji-ojo: God's Faithfulness In The Life of A Virtuous Woman : Happy Birthday Tribute To Yinka Tunji-Ojo",
      p: "The book of Daniel 11:32 is a verse of the Holy Bible that succinctly captures everything about the life of Mrs Yinka Tunji-Ojo. The verse says,  Those that know their God shall be strong and do exploits Virtually everything in the Tunji-Ojo's family clearly points at exploits and divine strength.   The life of Yinka Tunji-Ojo represents an evidential  encapsulation of the physical  demonstration of God's faithfulness in diverse ways. It could be said that God has been too partially on her side. And for this reason, she appears to always attain success at ease simply because God has been on her side.   The Oyin Akoko born Yinka Tunji-Ojo is without doubt an exceptionally brilliant person who is also very gifted in having an eye for details and problem solving. She is well known for her multitasking ability. She is equally respected for being proactive in decision taking. Tunji-Ojo is also quite popular for her uncommon skills in business and leadership. Above all, everyone that has had any dealing with Yinka would readily vouch for her integrity, honesty and firmness which speak volume about her Christian faith.",
      p1: "A Yoruba adage which says that a brave tiger cannot procreate a timid cub has also found multiple fulfilments in the life of Yinka Tunji-Ojo. The Bayero University trained accountant may not have gotten many biological children, but her only son has turned to be one child that is truly worth more than a million. It is gratifying that Yinka can readily be described as very successful woman by any measure of standard. ",
    },
    {
      img: team1,
      h1: "Director",
      h3: "Mrs Odebode Abimbola Solape",
      p: "Bsc Sociology OAU  Ile-ife",
      p: "Osun state",
      p: "NIgeria",
    },
  ];
  return (
    <>
      <div className="bg-[#F0F0F0]">
        <h1 className="text-black px-5 text-[1.3rem] font-semibold py-8">
          Healing Rays Team and Member
        </h1>

        <div className="grid place-items-center gap-7 px-5 sm:grid-cols-2 ">
          {maps.map((element, index) => (
            <div
              key={index}
              className=" bg-white gap-5 rounded-xl px-3 grid place-items-center  py-5 h-"
            >
              <div className="px-3">
                <img src={element.img} alt="" className="w-[180px] h-[180px]" />
              </div>
              <div className="grid gap-2">
                <h1 className="text-[#0A4F1b] text-[16px] font-bold">
                  {element.h1}
                </h1>
                <h3 className="text-[#0A4F1b]  text-[16px] font-bold">
                  {element.h3}
                </h3>
                <h4 className="font-bold text-[20px]">{element.h4}</h4>
                <p className="font-semibold text-[14px]">{element.p}</p>
                {/* <h1>{element.h1}</h1> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Healing;
