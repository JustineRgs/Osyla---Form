import Header from "../components/Header/Header";
import GroupOptions from "../components/Group/GroupOptions";
import { Link } from "react-router-dom";

function StepOptions() {
  return (
    <div className="stage">
      <Header />
      <GroupOptions />
      <div className="paginator">
        <Link to="/step3">
          <div className="btn_previous">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default StepOptions;
