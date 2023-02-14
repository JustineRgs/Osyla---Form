import Header from "../components/Header/Header";
import GroupFixationHaute from "../components/Group/GroupFixationHaute";
import GroupFixationBasse from "../components/Group/GroupFixationBasse";
import { Link } from "react-router-dom";

function StepFixation() {
  return (
    <div className="stage">
      <Header />
      <GroupFixationHaute />
      <GroupFixationBasse />

      <div className="paginator">
        <Link to="/">
          <div className="btn_previous">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </Link>
        <Link to="/step3">
          <div className="btn_next">
            <span>Valider les fixations</span>
            <div className="arrow_next">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default StepFixation;
