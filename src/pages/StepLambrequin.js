import Groups from "../components/Groups/Groups";

function StepLambrequin() {
  const groups = [
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
    {
      name: "Personnalisation",
      description: null,
      select: [
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
      select: [
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
          select={group.select}
          key={i}
        />
      ))}
    </div>
  );
}

export default StepLambrequin;
