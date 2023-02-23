import style from "./_step.module.scss";

import SelectImage from "../components/SelectImage/SelectImage";
import Number from "../components/Number/Number";
import Select from "../components/Select/Select";
import TextArea from "../components/TextArea/TextArea";

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
      field_options_option_renfort_lyre: "field_group_renfort_lyre",
      field_options_option_text_personnalise: "field_group_personnalisation_toile",
      field_options_option_agrafes: "field_group_agrafes",
      field_options_option_clips: "field_group_clips",
      field_options_option_oeillet_lambrequin: "field_group_oeillet_sur_lambrequin",
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

  return steps.groups.map((group , i) => {
    // Affichage des groupes affichés par default OU qui ont étaient set en 'visible'
    if (defaultGroups.includes(group.name) || group.name === visibleGroup) {
      return (
        <div className={style.group} id={group.name} ref={groupRef} key={i}>
          <h1>{group.label}</h1>

          {group.description && group.description != "..." && (
            <div className={style.briefing}>
              <p>{group.description}</p>
            </div>
          )}

          <div className={(group.name === "field_group_dimension_toile_de_store_banne" || group.name === "field_group_dimension_toile_de_store_bras_droits" || group.name === "field_group_dimension_double_pente" || group.name === "field_group_dimension_descente_verticale") ? style.field_number : ""}>
            {group.fields.map((field, i) => {
              return (
                <div className={style.field} key={i}>
                  {field.type === "select_images" && (
                    <SelectImage
                      label={field.label}
                      options={field.options}
                      id={field.name}
                      handleRadioClick={handleRadioClick}
                    />
                  )}

                  {field.type === "number" && (
                    <Number
                      label={field.label}
                      id={field.name} 
                    />
                  )}

                  {field.type === "select" && (
                    <Select
                      label={field.label}
                      options={field.options}
                      id={field.name}
                    />
                  )}

                  {field.type === "textarea" && (
                    <TextArea
                      label={field.label}
                      id={field.name}
                    />
                  )}
                </div>
              );
            })}
          </div>
      </div>
      );
    }
  });
}

export default Step;
