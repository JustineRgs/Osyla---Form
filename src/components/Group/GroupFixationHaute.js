import Radios from "../Radios/Radios";

export default function GroupFixationHaute({ handleRadioClick }) {
  const group = [
    {
      name: "Fixation haute",
      description: null,
      radios: [
        {
          input: {
            type: "radio",
            name: "radio",
            id: "couture_simple",
          },
          label: {
            htmlFor: "couture_simple",
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
            id: "jonc",
          },
          label: {
            htmlFor: "jonc",
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
            id: "fourreau",
          },
          label: {
            htmlFor: "fourreau",
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
