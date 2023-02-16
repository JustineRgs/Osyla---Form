import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepFixation from "./pages/StepFixation";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";

function App() {
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

  // Action : Ouvrir modale
  const openModal = () => {
    setShowModal(true);
  };

  // Action : Réduire modale
  const handleReduceModal = () => {
    setReduceModal(!reduceModal);
  };

  // Action : Fermer modale
  const handleCloseModal = () => {
    setReduceModal(false);
    setShowModal(false);
  };

  return (
    <>
      <Link to={"/step1"}>
        <button type="" onClick={openModal}>
          Pouet
        </button>
      </Link>

      {showModal && (
        <div
          className={`overlay ${showModal ? "open" : ""}`}
          onClick={handleReduceModal}
        >
          <div className={`modal ${reduceModal ? "reduce" : ""}`}>
            <Header handleReduceModal={handleReduceModal} />

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
              <span className="modal_close" onClick={handleCloseModal}>
                Abandonner la configuration
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
