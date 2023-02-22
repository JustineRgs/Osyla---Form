import GroupFixationHaute from "../components/Group/GroupFixationHaute";
import GroupFixationBasse from "../components/Group/GroupFixationBasse";
import Radios from "../components/Radios/Radios";
import Select from "../components/Select/Select";

function StepFixation({ steps, handleRadioClick, selectOption, openGroup }) {
  return steps.groups.map((group) => {
    return (
      <div className="group">
        <h1>{group.label}</h1>
        {group.description && group.description != "..." && (
          <div className="briefing">
            <p>{group.description}</p>
          </div>
        )}
        {/* className={group.fields.length > 1 ? "fields" : ""} */}
        <div>
          {group.fields.map((field) => {
            if (field.type === "select_images") {
              return (
                <Radios
                  handleRadioClick={handleRadioClick}
                  options={field.options}
                />
              );
            }
          })}
        </div>
      </div>
    );
  });
}

export default StepFixation;
