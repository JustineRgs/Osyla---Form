import GroupTypeStore from "../components/Group/GroupTypeStore";
import GroupDimensionStore from "../components/Group/GroupDimensionStore";
import Radios from "../components/Radios/Radios";

function StepTypeOfStore({ handleRadioClick, selectOption, openGroup, steps }) {
  {
    return steps.groups.map((group) => {
      return (
        <div className="group">
          <h1>{group.label}</h1>
          {group.description && (
            <div className="briefing">
              <p>{group.description}</p>
            </div>
          )}
          {group.fields.map((field) => {
            if (field.options.values) {
              const options = field.options.values.map((option) => {
                return {
                  label: option.label,
                  value: option.value,
                  imageUrl: option.imageUrl,
                };
              });
              console.log(options);
            }
          })}
        </div>
      );
    });
  }
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
