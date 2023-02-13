import Groups from "../components/Groups/Groups";

function StepTipeOfStore() {
  const groups = [
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
          key={i}
        />
      ))}
    </div>
  );
}

export default StepTipeOfStore;
