import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
// import About from "./pages/About";

const App = () => {
  

  return (
    <>
      <Nav  />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<} />} /> */}
        <Route path="/TermsHeader" element={<Terms />} />
      </Routes>
    </>
  );
};

export default App;
