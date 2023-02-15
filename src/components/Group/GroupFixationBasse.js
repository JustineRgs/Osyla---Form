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
            htmlFor: "store_double_pente",
            text: "Toile de store double pente",
          },
          img: {
            alt: "Illustration d'une fixation avec fourreau",
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