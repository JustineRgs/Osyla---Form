import "./_app.scss";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import data from "./data.json";
import Header from "./components/Header/Header";
import Step from "./pages/Step";
import Paginator from "./components/Paginator/Paginator";

function App() {
  const [form, setForm] = useState(data);

  // Etat de la modale : Ouverte ou fermée
  const [showModal, setShowModal] = useState(false);

  // Etat de la modale : Réduite ou ouverte
  const [reduceModal, setReduceModal] = useState(false);

  // Etat de l'overlay : Ouvert ou fermée
  const [showOverlay, setShowOverlay] = useState(false);

  // Numéro de la page ouverte à l'instant T
  const [pageNumber, setPageNumber] = useState(0);

  // Stockage de l'url pour modification (ajout du numero de page)
  const navigate = useNavigate();

  // Tableau d'étape
  const stepsURL = [
    {
      path: "/step1",
      element: <Step steps={form.steps[0]} />,
    },
    {
      path: "/step2",
      element: <Step steps={form.steps[2]} />,
    },
    {
      path: "/step3",
      element: <Step steps={form.steps[3]} />,
    },
    {
      path: "/step4",
      element: <Step steps={form.steps[4]} />,
    },
  ];

  // Création de la route correspondante à stepsURL[i]
  const routeElements = stepsURL.map((step, index) => (
    <Route key={index} path={step.path} element={step.element} />
  ));

  // Action : Ouvrir la modale + overlay. Si déjà ouvert mais réduit -> enleve le 'reduce'
  const handleButtonClick = () => {
    if (reduceModal === false) {
      setShowModal(true);
      setShowOverlay(true);
      setPageNumber(pageNumber + 1);
      navigate("/step1");
    }
    if (reduceModal === true) {
      handleReduceModal();
    }
  };

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

  return (
    <>
      <button type="" onClick={handleButtonClick}>
        Open modal
      </button>
      <input type="text" name="" />

      <div className={`${showOverlay ? "overlay" : ""}`}></div>

      {showModal && (
        <>
          <div className={`modal ${reduceModal ? "reduce" : ""}`}>
            <Header handleReduceModal={handleReduceModal} />

            <div className="step">
              <Routes>{routeElements}</Routes>

              <Paginator
                stepsURL={stepsURL}
                navigate={navigate}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
              />

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
