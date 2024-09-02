import React from "react";
import MainPage from "../components/Home/MainPage";
import ImproveHealth from "../components/Home/ImproveHealth";
import FindDoctor from "../components/Home/FindDoctor";
import AboutUs from "../components/Home/AboutUs";
// import JoinUs from "../components/Home/joinUs";
import FromBlog from "../components/Home/FromBlog";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <MainPage />
      <ImproveHealth />
      <FindDoctor />
      <AboutUs />
      {/* <JoinUs /> */}
      <FromBlog />
      <Testimonials />
    </div>
  );
};

export default Home;
