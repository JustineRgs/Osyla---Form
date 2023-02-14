import { useState } from "react";
import Header from "../components/Header/Header";
import GroupTypeStore from "../components/Group/GroupTypeStore";
import GroupDimensionStore from "../components/Group/GroupDimensionStore";
import { Link } from "react-router-dom";

function StepTypeOfStore() {
  const [dimension, setDimension] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const handleRadioClick = () => {
    setDimension(true);
  };

  return (
    <div className="stage">
      <Header />
      <GroupTypeStore />
      <GroupDimensionStore />

      {/* Pagination */}
      <div className="paginator">
        <Link to="/step2">
          <div className="btn_next">
            <span>Valider le type de store</span>
            <div className="arrow_next">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default StepTypeOfStore;
