import GroupChoixLambrequin from "../components/Group/GroupChoixLambrequin";
import GroupPersoLambrequin from "../components/Group/GroupPersoLambrequin";

function StepLambrequin({ handleRadioClick, openGroup }) {
  return (
    <>
      <GroupChoixLambrequin handleRadioClick={handleRadioClick} />

      {openGroup && <GroupPersoLambrequin />}
    </>
  );
}

export default StepLambrequin;
