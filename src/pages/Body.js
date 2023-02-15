import { useState } from "react";
import Header from "../components/Header/Header";
import StepTypeOfStore from "./StepTypeofStore";
import StepFixation from "./StepFixation";
import StepLambrequin from "./StepLambrequin";
import StepOptions from "./StepOptions";

function Body() {
  const [showModal, setShowModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectOption, setSelectOption] = useState(null);
  const [openGroup, setOpenGroup] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRadioClick = (selectedOption) => {
    setOpenGroup(true);
    setSelectOption(selectedOption);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    setOpenGroup(false);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
    setOpenGroup(false);
  };

  return (
    <>
      <button type="" onClick={openModal}>
        Pouet
      </button>
      {showModal && (
        <div className="modal-background">
          <div className="stage">
            <Header />
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            {pageNumber === 0 && (
              <StepTypeOfStore
                handleRadioClick={handleRadioClick}
                selectOption={selectOption}
                openGroup={openGroup}
              />
            )}

            {pageNumber === 1 && (
              <StepFixation
                handleRadioClick={handleRadioClick}
                openGroup={openGroup}
              />
            )}

            {pageNumber === 2 && (
              <StepLambrequin
                handleRadioClick={handleRadioClick}
                openGroup={openGroup}
              />
            )}

            {pageNumber === 3 && <StepOptions />}

            <div className="paginator">
              {pageNumber > 0 && (
                <div className="btn_previous" onClick={previousPage}>
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
              )}
              {pageNumber < 3 && (
                <div className="btn_next" onClick={nextPage}>
                  <span>Etape suivante</span>
                  <div className="arrow_next">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Body;
