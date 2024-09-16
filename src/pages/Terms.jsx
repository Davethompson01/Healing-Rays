import React from "react";
import TermsHeader from "../components/Terms/TermsHeader";
import UserAccount from "../components/Terms/UserAccount";
import Payment from "../components/Terms/Payment";
import Verificant from "../components/Terms/Verificant";
import Confidentiality from "../components/Terms/Confidentiality";
import Bookings from "../components/Terms/Bookings";
import Policy from "../components/Terms/Policy";

const Terms = () => {
  return (
    <>
      <div className="bg-white">
        <TermsHeader />
        <UserAccount />
        <Payment />
        <Verificant />
        <Confidentiality />
        <Bookings />
        <Policy />
      </div>
    </>
  );
};

export default Terms;
