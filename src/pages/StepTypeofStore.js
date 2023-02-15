import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import GroupTypeStore from "../components/Group/GroupTypeStore";
import GroupDimensionStore from "../components/Group/GroupDimensionStore";

function StepTypeOfStore({ handleRadioClick, selectOption, openGroup }) {
  return (
    <div className="stage">
      <Header />

      <GroupTypeStore handleRadioClick={handleRadioClick} />

      {openGroup && <GroupDimensionStore selectOption={selectOption} />}

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
