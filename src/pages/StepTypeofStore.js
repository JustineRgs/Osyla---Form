import { useState } from "react";
import Header from "../components/Header/Header";
import GroupTypeStore from "../components/Group/GroupTypeStore";
import GroupDimensionStore from "../components/Group/GroupDimensionStore";

function StepTypeOfStore() {
  const [dimension, setDimension] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const handleRadioClick = (selectedOption) => {
    setDimension(selectedOption === "store_banne");
    setSelectOption(selectedOption);
  };

  return (
    <div className="stage">
      <Header />
      <GroupTypeStore />
      <GroupDimensionStore />
    </div>
  );
}

export default StepTypeOfStore;
