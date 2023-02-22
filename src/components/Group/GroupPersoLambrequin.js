import Select from "../Select/Select";
import Radios from "../Radios/Radios";

export default function GroupPersoLambrequin() {
  const group = [
    {
      name: "Personnalisation",
      description: null,
      select_sizeLambrequin: [
        {
          label: {
            htmlFor: "size-lambrequin",
            text: "Hauteur du lambrequin",
          },
          option: [
            {
              label: "15cm",
              value: "15cm",
            },
            {
              label: "20cm",
              value: "20cm",
            },
            {
              label: "25cm",
              value: "25cm",
            },
            {
              label: "30cm",
              value: "30cm",
            },
            {
              label: "40cm",
              value: "40cm",
            },
            {
              label: "45cm",
              value: "45cm",
            },
          ],
        },
      ],
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
            id: "cousue_toile_b",
          },
          label: {
            htmlFor: "cousue_toile_b",
            text: "Cousue à la toile basse",
          },
          img: {
            alt: "Illustration d'une fixation cousue à la toile basse",
            src: "./img/cousue-toile-b.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "pince_int",
          },
          label: {
            htmlFor: "pince_int",
            text: "Pincé intérieur",
          },
          img: {
            alt: "Illustration d'une fixation pincé intérieur",
            src: "./img/pince-int.jpeg",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "pince_ext",
          },
          label: {
            htmlFor: "pince_ext",
            text: "Pincé extérieur",
          },
          img: {
            alt: "Illustration d'une fixation pincé extérieur",
            src: "./img/pince-ext.jpeg",
          },
        },
      ],
      select_color: [
        {
          label: {
            htmlFor: "color-biais",
            text: "Couleur du biais",
          },
          option: [
            {
              label: "Assorti à la toile (couleur la mieux adaptée)",
              value: "Assorti à la toile (couleur la mieux adaptée)",
            },
            {
              label: "Jaune",
              value: "Jaune",
            },
            {
              label: "Orange",
              value: "Orange",
            },
            {
              label: "Bleu",
              value: "Bleu",
            },
            {
              label: "Noir",
              value: "Noir",
            },
            {
              label: "Blanc",
              value: "Blanc",
            },
            {
              label: "Ourlet de lestage (Fourreau sans biais)",
              value: "Ourlet de lestage (Fourreau sans biais)",
            },
          ],
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
            <Select select={element.select_sizeLambrequin} />
            <Radios radios={element.radios} />
            <Select select={element.select_color} />
          </>
        );
      })}
    </div>
  );
}
