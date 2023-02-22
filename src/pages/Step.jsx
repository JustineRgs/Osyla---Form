import Radios from "../components/Radios/Radios";
import Input from "../components/imputs/Imputs";
import Select from "../components/Select/Select";
import { useState } from 'react';
import { useRef } from 'react';

function Step({ steps }) {

  // Groupe visible par défault
  const [defaultGroups, setDefaultGroups] = useState([
    "field_group_type_de_toile",
    "field_group_fixation_haute",
    "field_group_lambrequin",
    "field_group_options",
  ]);

  // Récupération de l'id de l'option selectionnée pour setVisibleGroup 2 correspondant
  const [selectOption, setSelectOption] = useState(null);

  // Permet de rendre un groupe visible
  const [visibleGroup, setVisibleGroup] = useState(null);

  const groupRef = useRef(null);

  const handleRadioClick = (option) => {
    setSelectOption(option);

    // Je fais correspondre le nom des options au nom des groupes
    const groupMapping = {
      field_type_toile_a_remplacer_option_toile_de_store_banne:
        "field_group_dimension_toile_de_store_banne",
      field_type_toile_a_remplacer_option_toile_de_store_bras_droits:
        "field_group_dimension_toile_de_store_bras_droits",
      field_type_toile_a_remplacer_option_toile_de_store_double_pente:
        "field_group_dimension_double_pente",
      field_type_toile_a_remplacer_option_toile_de_store_a_descente_verticale:
        "field_group_dimension_descente_verticale",
      field_fixation_haute_option_couture_simple: "field_group_fixation_basse",
      field_fixation_haute_option_jonc_3mm: "field_group_fixation_basse",
      field_fixation_haute_option_jonc_6mm: "field_group_fixation_basse",
    };

    // Utilisation de groupMapping pour obtenir le nom du groupe correspondant à l'option sélectionnée. Si l'option ne correspond à aucun groupe -> null.
    const visibleGroup = groupMapping[option.name];
    setVisibleGroup(visibleGroup);

    setTimeout(() => {
      if (visibleGroup) {
        groupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 0);
  };

  return steps.groups.map((group) => {
    // Affichage des groupes afficher par default OU qui ont étaient set en visible
    if (defaultGroups.includes(group.name) || group.name === visibleGroup) {
      return (
        <div className="group" id={group.name} ref={groupRef}>
          <h1>{group.label}</h1>
          {group.description && group.description != "..." && (
            <div className="briefing">
              <p>{group.description}</p>
            </div>
          )}

          <div className={(group.name === "field_group_dimension_toile_de_store_banne" || group.name === "field_group_dimension_toile_de_store_bras_droits" || group.name === "field_group_dimension_double_pente" || group.name === "field_group_dimension_descente_verticale"  ) ? "fields" : ""}>
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
    }
  });
}

export default Step;
