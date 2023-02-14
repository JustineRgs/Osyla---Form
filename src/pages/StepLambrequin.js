import Header from "../components/Header/Header";
import GroupChoixLambrequin from "../components/Group/GroupChoixLambrequin";
import GroupPersoLambrequin from "../components/Group/GroupPersoLambrequin";

function StepLambrequin() {
  return (
    <div className="stage">
      <Header />
      <GroupChoixLambrequin />
      <GroupPersoLambrequin />
    </div>
  );
}

export default StepLambrequin;
