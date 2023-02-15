import GroupTypeStore from "../components/Group/GroupTypeStore";
import GroupDimensionStore from "../components/Group/GroupDimensionStore";

function StepTypeOfStore({ handleRadioClick, selectOption, openGroup }) {
  return (
    <>
      <GroupTypeStore handleRadioClick={handleRadioClick} />
      {openGroup && <GroupDimensionStore selectOption={selectOption} />}
    </>
  );
}

export default StepTypeOfStore;
