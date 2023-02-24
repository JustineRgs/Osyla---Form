import style from "./_number.module.scss";

import { useState } from "react";

export default function Number({ id, label, constraints }) {
  const [calc, setCalc] = useState(constraints.defaultValue);
  const inputCalc = (e) => {
    const inputVal = e.target.value;
    setCalc(inputVal);
  };

  return (
    <div className={style.container_input}>
      <label htmlFor={id}>{label}</label>
      <div className={style.content_input}>
        <input
          name={id}
          onChange={inputCalc}
          defaultValue={constraints.defaultValue}
          min={constraints.min}
          max={constraints.max}
        />
        <span>cm</span>
        <p>
          {calc} cm = {calc / 100} mètres
        </p>
      </div>
    </div>
  );
}
