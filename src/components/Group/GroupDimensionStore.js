import Input from "../imputs/Imputs";

export default function GroupDimensionStore(selectOption, setSelectOption) {
  const group = [
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
            <Input
              inputs={element.inputs}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
            />
          </>
        );
      })}
    </div>
  );
}
