import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import StepFixation from "./pages/StepFixation";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";
import Body from "./pages/Body";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}></Route>
      <Route path="/step1" element={<StepTypeOfStore />}></Route>
      <Route path="/step2" element={<StepFixation />}></Route>
      <Route path="/step3" element={<StepLambrequin />}></Route>
      <Route path="/step4" element={<StepOptions />}></Route>
    </Routes>
  );
}

export default App;
