import "./App.css";
import { Routes, Route } from "react-router-dom";
import Groups from "./components/Groups/Groups";
import StepFixation from "./pages/StepFixation";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StepTypeOfStore />}></Route>
      <Route path="/step2" element={<StepFixation />}></Route>
      <Route path="/step3" element={<StepLambrequin />}></Route>
      <Route path="/step4" element={<StepOptions />}></Route>
    </Routes>
  );
}

export default App;
