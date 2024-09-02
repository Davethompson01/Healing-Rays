import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Team from "./pages/Team";
// import About from "./pages/About";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<} />} /> */}
        <Route path="/TermsHeader" element={<Terms />} />
        <Route path="/OurTeam" element={<Team />} />
      </Routes>
    </>
  );
};

export default App;
