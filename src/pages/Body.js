import { useState } from "react";
import Header from "../components/Header/Header";
import StepTypeOfStore from "./StepTypeofStore";

function Body() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button type="" onClick={openModal}>
        Pouet
      </button>
      {showModal && (
        <div className="modal">
          <div className="stage">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Header />
            <StepTypeOfStore />
          </div>
        </div>
      )}
    </>
  );
}
export default Body;
