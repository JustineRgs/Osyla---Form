import "./group.scss";
import Radios from "../Radios/Radios";

export default function GroupTypeStore({ handleRadioClick }) {
  const group = [
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
  ];

  return (
    <div className="group">
      {group.map((element, i) => {
        return (
          <>
            <h1>{element.name}</h1>
            {element.description && (
              <div className="briefing">
                <p>{element.description}</p>
              </div>
            )}
            <Radios
              radios={element.radios}
              handleRadioClick={handleRadioClick}
              key={i}
            />
          </>
        );
      })}
    </div>
  );
}
