import GroupFixationHaute from "../components/Group/GroupFixationHaute";
import GroupFixationBasse from "../components/Group/GroupFixationBasse";
import Radios from "../components/Radios/Radios";

function StepFixation({
  openGroup,
  handleRadioClick,
  handleClickPaginator,
  steps,
}) {
  return steps.groups.map((group) => {
    return (
      <div className="group">
        <h1>{group.label}</h1>
        {group.description && group.description != "..." && (
          <div className="briefing">
            <p>{group.description}</p>
          </div>
        )}
        {group.fields.map((field, i) => {
          if (field.options.values) {
            return field.options.values.map((option, i) => {
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
        })}
      </div>
    );
  });
}

export default StepFixation;
