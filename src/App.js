import "./App.scss";
import data from "./data.json";
import { useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import StepTypeOfStore from "./pages/StepTypeofStore";
import StepFixation from "./pages/StepFixation";
import StepLambrequin from "./pages/StepLambrequin";
import StepOptions from "./pages/StepOptions";
import Paginator from "./components/Paginator/Paginator";

function App() {
  const [form, setForm] = useState(data);

  const [visibleGroup, setVisibleGroup] = useState(null);
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

  const [defaultGroups, setDefaultGroups] = useState(
    "field_group_type_de_toile"
  );

  const groupRef = useRef(null);

  //Au click sur une option : recuperation de l'objet pour vérif : quel groupe 2 ouvrir ?
  const handleRadioClick = (option) => {
    setSelectOption(option);

    // Je fais correspondre le nom des options au nom des groupes
    const groupMapping = {
      field_type_toile_a_remplacer_option_toile_de_store_banne:
        "field_group_dimension_toile_de_store_banne",
      field_type_toile_a_remplacer_option_toile_de_store_bras_droits:
        "field_group_dimension_toile_de_store_bras_droits",
      field_type_toile_a_remplacer_option_toile_de_store_double_pente:
        "field_group_dimension_double_pente",
      field_type_toile_a_remplacer_option_toile_de_store_a_descente_verticale:
        "field_group_dimension_descente_verticale",
    };

    // Utilisation de groupMapping pour obtenir le nom du groupe correspondant à l'option sélectionnée. Si l'option ne correspond à aucun groupe -> null.
    const visibleGroup = groupMapping[option.name] || null;
    setVisibleGroup(visibleGroup);

    setTimeout(() => {
      if (visibleGroup) {
        groupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 0);
  };

  // Tableau d'étape
  const stepsURL = [
    {
      path: "/step1",
      element: (
        <StepTypeOfStore
          handleRadioClick={handleRadioClick}
          selectOption={selectOption}
          openGroup={openGroup}
          visibleGroup={visibleGroup}
          defaultGroups={defaultGroups}
          groupRef={groupRef}
          steps={form.steps[0]}
        />
      ),
    },
    {
      path: "/step2",
      element: (
        <StepFixation
          handleRadioClick={handleRadioClick}
          openGroup={openGroup}
          steps={form.steps[2]}
        />
      ),
    },
    {
      path: "/step3",
      element: (
        <StepLambrequin
          handleRadioClick={handleRadioClick}
          openGroup={openGroup}
          steps={form.steps[3]}
        />
      ),
    },
    { path: "/step4", element: <StepOptions /> },
  ];

  // Création de la route correspondante à stepsURL[i]
  const routeElements = stepsURL.map((step, index) => (
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

            <div className="step">
              <Routes>{routeElements}</Routes>

              <Paginator setOpenGroup={setOpenGroup} stepsURL={stepsURL} />

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
