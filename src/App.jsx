import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
// import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/contact";

const App = () => {
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const location = useLocation();
  const handleScrollToAbout = () => {
    if (location.pathname !== "/") {
      console.log("scrolled");
      setScrollToAbout(true);
    } else {
      window.scrollTo(0, 0);
      console.log("home");
      setScrollToAbout(true);
      console.log("about");
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && scrollToAbout) {
      setScrollToAbout(false);
    }
  }, [location, scrollToAbout]);

  return (
    <>
      <Nav handleScrollToAbout={handleScrollToAbout} />
      <Routes>
        {/* <Route
          path="/"
          element={<Home scrollToAbout={scrollToAbout} setScrollToAbout={setScrollToAbout} />}
        /> */}
        <Route
          path="/"
          element={
            <Home
              scrollToAbout={scrollToAbout}
              setScrollToAbout={setScrollToAbout}
            />
          }
        />
        <Route path="/TermsHeader" element={<Terms />} />
        <Route path="ContactUs/" element={<Contact/>} />
        <Route path="/TermsHeader" element={<Terms />} />
        <Route path="/OurTeam" element={<Team />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
