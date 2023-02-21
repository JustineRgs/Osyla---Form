import GroupTypeStore from "../components/Group/GroupTypeStore";
import GroupDimensionStore from "../components/Group/GroupDimensionStore";
import Radios from "../components/Radios/Radios";
import Input from "../components/imputs/Imputs";

function StepTypeOfStore({ handleRadioClick, selectOption, openGroup, steps }) {
  return steps.groups.map((group, i) => {
    // console.log("group :", group);
    return (
      <div className="group">
        <h1>{group.label}</h1>
        {group.description && group.description != "..." && (
          <div className="briefing">
            <p>{group.description}</p>
          </div>
        )}
        <div className="pouet">
          {group.fields.map((field, i) => {
            console.log(field);

            if (field.type === "select_images") {
              return field.options.map((option, i) => {
                return (
                  <Radios
                    label={option.label}
                    value={option.value}
                    id={option.name}
                    imageUrl={option.imageUrl}
                    handleRadioClick={handleRadioClick}
                    key={i}
                  />
                );
              });
            }
            if (field.type === "number") {
              return (
                <div className="container-input-dimension">
                  <Input
                    label={field.label}
                    option={field.option}
                    id={field.name}
                    handleRadioClick={handleRadioClick}
                    key={i}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  });
}
{
  /* <div className="group">
    <h1>{step.label}</h1>
    {step.description && (
      <div className="briefing">
        <p>{step.description}</p>
      </div>
    )} */
}
{
  /* {step.groups.map((element, i) => {
        return (
          console.log("elmt :", element),
          (<Radios element={element} handleRadioClick={handleRadioClick} />)
        );
      })} */
}

export default StepTypeOfStore;
