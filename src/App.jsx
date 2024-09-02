import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </>

    //
  );
};

export default App;
