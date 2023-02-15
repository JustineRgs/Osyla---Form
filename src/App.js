import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import StepFixation from "./pages/StepFixation";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";

function App() {
  const [selectOption, setSelectOption] = useState(null);
  const [openGroup, setOpenGroup] = useState(false);

  const handleRadioClick = (selectedOption) => {
    setOpenGroup(true);
    setSelectOption(selectedOption);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <StepTypeOfStore
            handleRadioClick={handleRadioClick}
            selectOption={selectOption}
            openGroup={openGroup}
          />
        }
      ></Route>
      <Route path="/step2" element={<StepFixation />}></Route>
      <Route path="/step3" element={<StepLambrequin />}></Route>
      <Route path="/step4" element={<StepOptions />}></Route>
    </Routes>
  );
}

export default App;
