import GroupFixationHaute from "../components/Group/GroupFixationHaute";
import GroupFixationBasse from "../components/Group/GroupFixationBasse";

function StepFixation({ openGroup, handleRadioClick, handleClickPaginator }) {
  return (
    <>
      <GroupFixationHaute handleRadioClick={handleRadioClick} />

      {openGroup && <GroupFixationBasse />}
    </>
  );
}
export default StepFixation;
