import Radios from "../Radios/Radios";

export default function GroupChoixLambrequin() {
  const group = [
    {
      name: "Choix du lambrequin",
      description: null,
      radios: [
        {
          input: {
            type: "radio",
            name: "radio",
            id: "sans_lambrequin",
          },
          label: {
            htmlFor: "sans_lambrequin",
            text: "Sans lambrequin",
          },
          img: {
            alt: "Sans lambrequin",
            src: "./img/sans.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "c_droite",
          },
          label: {
            htmlFor: "c_droite",
            text: "Coupe droite",
          },
          img: {
            alt: "Illustration d'un lambrequin coupe droite",
            src: "./img/droit.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "c_ondulee",
          },
          label: {
            htmlFor: "c_ondulee",
            text: "Coupe ondulée",
          },
          img: {
            alt: "Illustration d'un lambrequin coupe ondulée",
            src: "./img/ondulee.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "c_vagues",
          },
          label: {
            htmlFor: "c_vagues",
            text: "Coupe à vagues",
          },
          img: {
            alt: "Illustration d'un lambrequin coupe à vagues",
            src: "./img/vagues.jpeg",
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
