import Header from "../components/Header/Header";
import GroupFixationHaute from "../components/Group/GroupFixationHaute";
import GroupFixationBasse from "../components/Group/GroupFixationBasse";

function StepFixation() {
  return (
    <div className="stage">
      <Header />
      <GroupFixationHaute />
      <GroupFixationBasse />
    </div>
  );
}
export default StepFixation;
