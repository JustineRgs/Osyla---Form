import style from "./_number.module.scss";

import { useState } from "react";

export default function Number({
  id,
  label,
  constraints,
  formValues,
  setFormValues,
}) {
  // Valeur de l'input à calculer
  const [calc, setCalc] = useState("100");

  // Récupération de la valeur rentré dans l'input
  const inputValue = (e) => {
    const inputVal = e.target.value;
    setCalc(inputVal);

    // Mettre à jour l'état des valeurs sélectionnées pour chaque champ dans l'objet setFormValues
    setFormValues((prevState) => {
      return {
        ...prevState,
        [id]: inputVal,
      };
    });
  };

  return (
    <div className={style.container_input}>
      <label htmlFor={id}>{label}</label>
      <div className={style.content_input}>
        <input
          type="texte"
          id={id}
          name={id}
          placeholder="100"
          defaultValue={formValues[id]}
          onChange={inputValue}
          min={constraints.min}
          max={constraints.max}
          unit={constraints.unit}
        />
        {constraints.unit && (
          <>
            <span>cm</span>
            <p>
              {formValues[id] ? formValues[id] : calc} cm ={" "}
              {formValues[id] ? formValues[id] : calc / 100} mètres
            </p>
          </>
        )}
      </div>
    </div>
  );
}
