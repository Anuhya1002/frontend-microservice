"use client";
import React from "react";
import HeroBanner from "./Components/HeroBanner";
import SwitchBanner from "./Components/SwitchBanner";
import SliderRoutine from "./Components/SliderRoutine";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/app/globals.css";


const App = () => {
  return (
    <>
      <HeroBanner />
      <SwitchBanner />
      <SliderRoutine />
    </>
  );
};

export default App;
