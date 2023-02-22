import Radios from "../components/Radios/Radios";
import Input from "../components/imputs/Imputs";
import { useState } from "react";

function StepTypeOfStore({
  steps,
  handleRadioClick,
  visibleGroup,
  defaultGroups,
}) {
  return steps.groups.map((group) => {
    if (group.name === defaultGroups || group.name === visibleGroup) {
      return (
        <div className="group">
          <h1>{group.label}</h1>
          {group.description && group.description != "..." && (
            <div className="briefing">
              <p>{group.description}</p>
            </div>
          )}

          <div className={group.fields.length > 1 ? "fields" : ""}>
            {group.fields.map((field, i) => {
              if (field.type === "select_images") {
                return (
                  <Radios
                    handleRadioClick={handleRadioClick}
                    options={field.options}
                  />
                );
              }

              if (field.type === "number") {
                return (
                  <Input
                    label={field.label}
                    option={field.option}
                    id={field.name}
                    handleRadioClick={handleRadioClick}
                  />
                );
              }
            })}
          </div>
        </div>
      );
    }
  });
}

export default StepTypeOfStore;
