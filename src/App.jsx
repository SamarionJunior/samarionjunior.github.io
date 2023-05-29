import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"

import "./style.css"

const App = _ => {
  return (
    <Routes>
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="*" element={<Home />} />
    </Routes>
  );
}

export default App;