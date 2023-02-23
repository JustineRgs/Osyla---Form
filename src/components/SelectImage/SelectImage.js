import style from "./_selectImage.module.scss";

import { useState } from "react";

export default function SelectImage({ label, options, id, handleRadioClick }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
      handleRadioClick(option);
    }
  };

  return (
    <>
      <label htmlFor={id}>
        {label}
        <ion-icon
          name="information-circle-sharp"
          alt="icon d'information"
        ></ion-icon>
      </label>

      <ul name={id}>
        {options.map((option, i) => (
          <li className={style.container_select} key={i}>
            <input
              type="radio"
              name={options.name}
              id={option.name}
              value={option.value}
              checked={option === selectedOption}
              onClick={() => handleOptionClick(option)}
            />

            <div className={style.content_select}>
              <label htmlFor={option.name}>
                <img alt={option.label} src={option.imageUrl} />
                {option.label}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
