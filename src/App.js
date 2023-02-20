import "./App.scss";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepFixation from "./pages/StepFixation";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";
import Paginator from "./components/Paginator/Paginator";

function App() {
  // Ouverture group 2 au click sur un élement du group 1
  const [openGroup, setOpenGroup] = useState(false);

  // Récupération de l'id de l'option selectionner pour ouvrir group 2 correspondant
  const [selectOption, setSelectOption] = useState(null);

  // Etat de la modale : Ouverte ou fermée
  const [showModal, setShowModal] = useState(false);

  // Etat de la modale : Réduite ou ouverte
  const [reduceModal, setReduceModal] = useState(false);

  // Etat de l'overlay : Ouvert ou fermée
  const [showOverlay, setShowOverlay] = useState(false);

  //Au click sur une option : recuperation de l'id pour vérif : quel groupe 2 ouvrir ?
  const handleRadioClick = (selectedOption) => {
    setOpenGroup(true);
    setSelectOption(selectedOption);
  };

  // Tableau d'étape
  const steps = [
    {
      path: "/step1",
      element: (
        <StepTypeOfStore
          handleRadioClick={handleRadioClick}
          selectOption={selectOption}
          openGroup={openGroup}
        />
      ),
    },
    {
      path: "/step2",
      element: (
        <StepFixation
          handleRadioClick={handleRadioClick}
          openGroup={openGroup}
        />
      ),
    },
    {
      path: "/step3",
      element: (
        <StepLambrequin
          handleRadioClick={handleRadioClick}
          openGroup={openGroup}
        />
      ),
    },
    { path: "/step4", element: <StepOptions /> },
  ];

  // Création de la route correspondante à steps[i]
  const routeElements = steps.map((step, index) => (
    <Route key={index} path={step.path} element={step.element} />
  ));

  // Action : Réduire modale + Réduire overlay
  const handleReduceModal = () => {
    setReduceModal(!reduceModal);
    setShowOverlay(!showOverlay);
  };

  // Action : Fermer modale
  const handleCloseModal = () => {
    setShowModal(false);
    setReduceModal(false);
    setShowOverlay(false);
  };

  // Action : Ouvrir la modale + overlay. Si déjà ouvert mais réduit -> enleve le 'reduce'
  const handleButtonClick = () => {
    if (reduceModal === false) {
      setShowModal(true);
      setShowOverlay(true);
    }
    if (reduceModal === true) {
      handleReduceModal();
    }
  };

  return (
    <>
      <Link to={"/step1"}>
        <button type="" onClick={handleButtonClick}>
          Pouet
        </button>
      </Link>
      <input type="text" name="" />

      <div className={`${showOverlay ? "overlay" : ""}`}></div>

      {showModal && (
        <>
          <div className={`modal ${reduceModal ? "reduce" : ""}`}>
            <Header handleReduceModal={handleReduceModal} />

            <div className="stage">
              <Routes>{routeElements}</Routes>

              <Paginator setOpenGroup={setOpenGroup} steps={steps} />

              <span className="modal_close" onClick={handleCloseModal}>
                Abandonner la configuration
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default App;
