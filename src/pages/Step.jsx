import style from "./_step.module.scss";

import SelectImage from "../components/SelectImage/SelectImage";
import Number from "../components/Number/Number";
import Select from "../components/Select/Select";
import TextArea from "../components/TextArea/TextArea";

import { useState } from "react";
import { useRef } from "react";

function Step({ steps }) {
  // groupRef pour target le groupe qui vient de s'ouvrir et scroll jusqu'à lui
  const groupRef = useRef(null);
  // Récupération de l'id de l'option selectionnée pour setVisibleGroup 2 correspondant
  const [selectOption, setSelectOption] = useState(null);

  // Permet de rendre un groupe visible
  const [visibleGroup, setVisibleGroup] = useState(null);

  // Groupe visible par défault
  const [defaultGroups, setDefaultGroups] = useState([
    "field_group_type_de_toile",
    "field_group_fixation_haute",
    "field_group_lambrequin",
    "field_group_options",
  ]);

  const handleChangeOption = (option) => {
    setSelectOption(option);

    // Map pour associer noms des options selectionnées avec le groupe à ouvrir au onChange
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
      field_options_option_text_personnalise:
        "field_group_personnalisation_toile",
      field_options_option_sans: "field_group_fixation_haute",
      field_options_option_agrafes: "field_group_agrafes",
      field_options_option_clips: "field_group_clips",
      field_options_option_oeillet_lambrequin:
        "field_group_oeillet_sur_lambrequin",
    };

    // Utilisation de groupMapping pour obtenir le nom du groupe correspondant à l'option sélectionnée. -
    const visibleGroup = groupMapping[option.name];

    // Si l'option correspond à un groupe : (sinon, ne rien faire)
    if (visibleGroup) {
      setVisibleGroup(visibleGroup);
      setTimeout(() => {
        groupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
    }
  };

  return steps.groups.map((group, i) => {
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

          {group.fields.map((field, i) => {
            return (
              <div className={style.field} key={i}>
                {field.type === "select_images" && (
                  <SelectImage
                    label={field.label}
                    options={field.options}
                    id={field.name}
                    handleChangeOption={handleChangeOption}
                  />
                )}

                {field.type === "number" && (
                  <Number
                    label={field.label}
                    id={field.name}
                    constraints={field.constraints}
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
                  <TextArea label={field.label} id={field.name} />
                )}
              </div>
            );
          })}
        </div>
      );
    }
  });
}

export default Step;
