import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepFixation from "./pages/StepFixation";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const [hasBlackBackground, setHasBlackBackground] = useState(false);
  // Ouverture group 2 au click sur un élement du group 1
  const [openGroup, setOpenGroup] = useState(false);
  // Récupération de l'id de l'option selectionner pour ouvrir group 2 correspondant
  const [selectOption, setSelectOption] = useState(null);
  // Numéro de la page ouverte à l'instant T
  const [pageNumber, setPageNumber] = useState(0);
  // Stockage de l'url pour modification (ajout du numero de page)
  const navigate = useNavigate();
  // Etat de la modale : Ouverte ou fermée
  const [showModal, setShowModal] = useState(false);
  // Etat de la modale : Réduite ou ouverte
  const [reduceModal, setReduceModal] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsReduced(false);
    setHasBlackBackground(false);
  };

  const toggleReduce = () => {
    setIsReduced(!isReduced);
    setHasBlackBackground(false);
  };

  const toggleBlackBackground = () => {
    setHasBlackBackground(!hasBlackBackground);
    if (hasBlackBackground) {
      toggleReduce();
    }
  };
  //Au click sur une option : recuperation de l'id pour vérif : quel groupe 2 ouvrir ?
  const handleRadioClick = (selectedOption) => {
    setOpenGroup(true);
    setSelectOption(selectedOption);
  };

  // Action : Page suivante
  const nextPage = () => {
    setOpenGroup(false);
    navigate(`/step${pageNumber + 1}`);
    setPageNumber(pageNumber + 1);
  };

  // Action : Page précédente
  const previousPage = () => {
    setOpenGroup(false);
    navigate(`/step${pageNumber - 1}`);
    setPageNumber(pageNumber - 1);
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
  return (
    <>
      <Link to={"/step1"}>
        <button type="" onClick={toggleModal}>
          Pouet
        </button>
      </Link>
      <input />

      {isOpen && (
        <>
          <div className={`modal ${isReduced ? "reduce" : ""}`}>
            <Header toggleReduce={toggleReduce} />

            <div className="stage">
              <Routes>{routeElements}</Routes>

              <div className="paginator">
                {pageNumber > 1 && (
                  <div className="btn_previous" onClick={previousPage}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                  </div>
                )}
                {pageNumber < steps.length && (
                  <div className="btn_next" onClick={nextPage}>
                    <span>Etape suivante</span>
                    <div className="arrow_next">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                  </div>
                )}
              </div>
              <span className="modal_close" onClick={toggleModal}>
                Abandonner la configuration
              </span>
            </div>
          </div>
        </>
      )}
      {isOpen && !isReduced && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
          }}
          onClick={toggleBlackBackground}
        ></div>
      )}
    </>
  );
}
export default App;

import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const [hasBlackBackground, setHasBlackBackground] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsReduced(false);
    setHasBlackBackground(false);
  };

  const toggleReduce = () => {
    setIsReduced(!isReduced);
    setHasBlackBackground(false);
  };

  const toggleBlackBackground = () => {
    setHasBlackBackground(!hasBlackBackground);
    if (hasBlackBackground) {
      toggleReduce();
    }
  };

  return (
    <>
      <button onClick={toggleModal}>Ouvrir la modale</button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: isReduced ? "-100%" : 0,
            left: 0,
            right: 0,
            background: hasBlackBackground ? "rgba(0, 0, 0, 0.5)" : "white",
            zIndex: 9999,
            padding: "20px",
            transition:
              "transform 0.3s ease-in-out, bottom 0.3s ease-in-out, background 0.3s ease-in-out",
            transform: isReduced ? "translateY(100%)" : "translateY(0%)",
          }}
        >
          <h2>Contenu de la modale</h2>
          <button onClick={toggleModal}>Fermer la modale</button>
          <button onClick={toggleReduce}>Réduire la modale</button>
        </div>
      )}
      {isOpen && !isReduced && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
          }}
          onClick={toggleBlackBackground}
        ></div>
      )}
    </>
  );
}
