import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import StepFixation from "./pages/StepFixation";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";
import Body from "./pages/Body";

function App() {
  const [selectOption, setSelectOption] = useState(null);
  const [openGroup, setOpenGroup] = useState(false);

  const handleRadioClick = (selectedOption) => {
    setOpenGroup(true);
    setSelectOption(selectedOption);
  };

  const handleClickPaginator = () => {
    setOpenGroup(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Body />}></Route>
      <Route
        path="/step1"
        element={
          <StepTypeOfStore
            handleRadioClick={handleRadioClick}
            handleClickPaginator={handleClickPaginator}
            selectOption={selectOption}
            openGroup={openGroup}
          />
        }
      ></Route>
      <Route
        path="/step2"
        element={
          <StepFixation
            handleRadioClick={handleRadioClick}
            handleClickPaginator={handleClickPaginator}
            openGroup={openGroup}
          />
        }
      ></Route>
      <Route
        path="/step3"
        element={
          <StepLambrequin
            handleRadioClick={handleRadioClick}
            handleClickPaginator={handleClickPaginator}
            openGroup={openGroup}
          />
        }
      ></Route>
      <Route path="/step4" element={<StepOptions />}></Route>
    </Routes>
  );
}

export default App;
