import "./group.scss";
import Radios from "../Radios/Radios";

export default function GroupFixationBasse() {
  const group = [
    {
      name: "Fixation basse",
      description: null,
      radios: [
        {
          input: {
            type: "radio",
            name: "radio",
            id: "fixation_basse_couture_simple",
          },
          label: {
            htmlFor: "fixation_basse_couture_simple",
            text: "Couture simple",
          },
          img: {
            alt: "Illustration d'une fixation couture simple",
            src: "./img/couture-simple.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "fixation_basse_jonc",
          },
          label: {
            htmlFor: "fixation_basse_jonc",
            text: "Jonc",
          },
          img: {
            alt: "Illustration d'une fixation avec jonc",
            src: "./img/jonc.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "fixation_basse_fourreau",
          },
          label: {
            htmlFor: "fixation_basse_fourreau",
            text: "Fourreau",
          },
          img: {
            alt: "Illustration d'un fourreau",
            src: "./img/fourreau.jpeg",
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
            <Radios radios={element.radios} />
          </>
        );
      })}
    </div>
  );
}
