import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Card from "./card";
import Career from "./career";
import Cs from "./cs";
import Ds from "./ds";
import Fsd from "./fsd";
import Navbar from "./navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/fsd" element={<Fsd />} />
        <Route path="/ds" element={<Ds />} />
        <Route path="/cs" element={<Cs />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
