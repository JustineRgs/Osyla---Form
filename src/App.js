import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Groups from "./components/Groups/Groups";
import StepFixation from "./pages/StepFixation";

function App() {
  const [dimension, setDimension] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const handleRadioClick = (selectedOption) => {
    setDimension(selectedOption === "store_banne");
    setSelectOption(selectedOption);
  };
  const groups = [
    {
      name: "Type de store",
      description: null,
      radios: [
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_banne",
          },
          label: {
            htmlFor: "store_banne",
            text: "Toile de store banne",
          },
          img: {
            alt: "Illustration d'une toile de store banne",
            src: "./img/banne.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_bras_droits",
          },
          label: {
            htmlFor: "store_bras_droits",
            text: "Toile de store bras droits",
          },
          img: {
            alt: "Illustration d'une toile de store bras droits",
            src: "./img/bras-droits.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_double_pente",
          },
          label: {
            htmlFor: "store_double_pente",
            text: "Toile de store double pente",
          },
          img: {
            alt: "Illustration d'une toile de store double pente",
            src: "./img/doubl-pente.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_desc_verticale",
          },
          label: {
            htmlFor: "store_desc_verticale",
            text: "Toile de store descente verticale",
          },
          img: {
            alt: "Illustration d'une toile de store à descente verticale",
            src: "./img/desc-verticale.jpeg",
          },
        },
      ],
    },
    {
      name: "Dimensions",
      description:
        "Indiquez ci-dessous les dimensions de votre toile de store hors tout.D'une extrémité à l'autre, coutures comprises. Pour savoir comment prendre ces mesures cliquez-ici.",
      inputs: [
        {
          groupe_dimension_toile: [
            {
              input: {
                type: "text",
                name: "width",
              },
              label: {
                htmlFor: "width",
                text: "Largeur",
              },
            },
            {
              input: {
                type: "text",
                name: "projection",
              },
              label: {
                htmlFor: "projection",
                text: "Projection",
              },
            },
          ],
          groupe_dimension_double_pente: [
            {
              input: {
                type: "text",
                name: "width",
              },
              label: {
                htmlFor: "width",
                text: "Largeur",
              },
            },
            {
              input: {
                type: "text",
                name: "projection",
              },
              label: {
                htmlFor: "projection",
                text: "Projection",
              },
            },
            {
              input: {
                type: "text",
                name: "projection-opp",
              },
              label: {
                htmlFor: "projection-opp",
                text: "Projection opposée",
              },
            },
          ],
          groupe_dimension_descente_verticale: [
            {
              input: {
                type: "text",
                name: "width",
              },
              label: {
                htmlFor: "width",
                text: "Largeur",
              },
            },
            {
              input: {
                type: "text",
                name: "height",
              },
              label: {
                htmlFor: "height",
                text: "Hauteur",
              },
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="stage">
      <div className="block">
        <span>
          <ion-icon name="aperture-outline"></ion-icon>Votre configuration
        </span>
        <div className="block_fixe">
          <p className="text_block">Prix total : 0000,00€</p>
          <p className="text_secondary_block">ou 3 mensualités de 00,00€</p>
        </div>
      </div>
      {groups.map((group, i) => (
        <Groups
          name={group.name}
          description={group.description}
          radios={group.radios}
          inputs={group.inputs}
          key={i}
        />
      ))}
      <Routes>
        <Route path="/" element={<StepFixation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
