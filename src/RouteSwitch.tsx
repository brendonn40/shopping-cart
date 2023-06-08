import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;