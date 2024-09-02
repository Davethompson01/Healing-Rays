import React from "react";

const UserAccount = () => {
  const maps = [
    "1.    You are using your real name and identity.",
    "2.   Healing Rays will verify your information and confirm your application before it is approved.",
    "3.   Your medical license and personal information provided is true, accurate, and up-to-date.",
    "4.   You will keep your password confidential and notify us immediately you suspect it has been stolen or your account hacked or compromised.",
    "5.   You will be required to provide an updated copy of your medical license as soon as it is renewed each . year to remain activated.",
    "6.   You are responsible for any action performed through your user account regardless of whether or not it is you performing it.",
    "7.    You will keep all information exchanged confidential.",
    "8.    Healing Rays reserves the right to close down your account if it becomes necessary.",
    "9.   All interactions between you and any assigned patient will be carried out solely via the Healing Rays platform.You will receive and respond to notifications promptly.",
    "11.   You will receive only your allocated percentage for every consultation you undertake.",
    "12.  You will use all the patient information you have access to for no purpose other than to administer professional medical care.",
    "13.  You will be available for medical consultations and that you will transfer any case in your care to another professional when you are unavailable.You may deactivate your account at any time after notifying us via email. Healing Rays reserves the right to remove all your information from the platform following your deactivation.Healing Rays healthcare services does not handle medical emergencies; therefore, you will refer patients with any suspected emergencies to a hospital for immediate care and inform Healing Rays by email where such decision is taken, providing details about the particular case immediately after finishing the consultation.",
  ];
  return (
    <>
      <div>
        <h1>
          i.{" "}
          <span>
            User accounts By registering as a doctor on the Healing Rays health
            platform, you agree that:
          </span>
        </h1>
        <div>
          {maps.map((element, index) => (
            <p key={index}>{element.p}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
