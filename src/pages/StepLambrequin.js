import Header from "../components/Header/Header";
import GroupChoixLambrequin from "../components/Group/GroupChoixLambrequin";
import GroupPersoLambrequin from "../components/Group/GroupPersoLambrequin";
import { Link } from "react-router-dom";

function StepLambrequin() {
  return (
    <div className="stage">
      <Header />
      <GroupChoixLambrequin />
      <GroupPersoLambrequin />
      <div className="paginator">
        <Link to="/step2">
          <div className="btn_previous">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </Link>
        <Link to="/step4">
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

export default StepLambrequin;
