import React, { useEffect, useRef } from "react";
import MainPage from "../components/Home/MainPage";
import ImproveHealth from "../components/Home/ImproveHealth";
import AboutUs from "../components/Home/AboutUs";
import FindDoctor from "../components/Home/FindDoctor";
import FromBlog from "../components/Home/FromBlog";
import Testimonials from "../components/Home/Testimonials";
// import MainPage from "../components/Home/MainPage";
// import ImproveHealth from "../components/Home/ImproveHealth";
// import FindDoctor from "../components/Home/FindDoctor";
// import AboutUs from "../components/Home/AboutUs";
// // import JoinUs from "../components/Home/joinUs";
// import FromBlog from "../components/Home/FromBlog";
// import Testimonials from "../components/Home/Testimonials";

const Home = ({ scrollToAbout, setScrollToAbout }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (scrollToAbout) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToAbout(false);
    }
  }, [scrollToAbout, setScrollToAbout]);

  return (
    <div>
      <MainPage/>
      <ImproveHealth/>
      <FindDoctor/>
      <div ref={aboutRef}>
        <AboutUs/>
      </div>
      {/* <MainPage /> */}
      {/* <ImproveHealth /> */}
      {/* <FindDoctor /> */}
      {/* <div ref={aboutRef}>
        <AboutUs />
      </div> */}
      {/* <JoinUs /> */}
      <FromBlog />
      <Testimonials />
    </div>
  );
};

export default Home;
