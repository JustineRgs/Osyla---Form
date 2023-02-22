import GroupChoixLambrequin from "../components/Group/GroupChoixLambrequin";
import GroupPersoLambrequin from "../components/Group/GroupPersoLambrequin";
import Radios from "../components/Radios/Radios";
import Select from "../components/Select/Select";

function StepLambrequin({ handleRadioClick, steps }) {
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
            if (field.type === "select") {
              return (
                <Select
                  label={field.label}
                  options={field.options}
                  id={field.name}
                />
              );
            }
          })}
        </div>
      </div>
    );
  });
}

export default StepLambrequin;
