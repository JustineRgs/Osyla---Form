import Radios from "../Radios/Radios";

export default function GroupOptions() {
  const group = [
    {
      name: "Choix des options",
      description: null,
      radios: [
        {
          input: {
            type: "radio",
            name: "radio",
            id: "sans_o",
          },
          label: {
            htmlFor: "sans_o",
            text: "Sans option",
          },
          img: {
            alt: "Sans option",
            src: "./img/sans.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "renfort",
          },
          label: {
            htmlFor: "renfort",
            text: "Renfort de lyre",
          },
          img: {
            alt: "Illustration d'un renfort de lyre",
            src: "./img/renfort.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "agrafes",
          },
          label: {
            htmlFor: "agrafes",
            text: "Agrafes",
          },
          img: {
            alt: "Illustration d'agrafes",
            src: "./img/agrafes.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "clips",
          },
          label: {
            htmlFor: "clips",
            text: "Clips - 40mm",
          },
          img: {
            alt: "Illustration de clips",
            src: "./img/clips.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "oeillets",
          },
          label: {
            htmlFor: "oeillets",
            text: "Oeillets",
          },
          img: {
            alt: "Illustration d'oeillets",
            src: "./img/oeillets.jpeg",
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
