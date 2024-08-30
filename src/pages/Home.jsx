import React from "react";
import MainPage from "../components/Home/MainPage";
import ImproveHealth from "../components/Home/ImproveHealth";
import FindDoctor from "../components/Home/FindDoctor";
import AboutUs from "../components/Home/AboutUs";
import JoinUs from "../components/Home/joinUs";
import FromBlog from "../components/Home/FromBlog";

const Home = () => {
  return (
    <div>
      <MainPage />
      <ImproveHealth />
      <FindDoctor />
      <AboutUs />
      <JoinUs />
      <FromBlog />
    </div>
  );
};

export default Home;
