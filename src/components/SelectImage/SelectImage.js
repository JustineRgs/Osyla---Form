import style from "./_selectImage.module.scss";

import { useState } from "react";

export default function SelectImage({
  label,
  options,
  id,
  handleChangeOption,
}) {
  // option == selectedOption au onChange d'une option
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
      handleChangeOption(option);
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
              id={option.name}
              value={option.value}
              checked={option === selectedOption}
              onChange={() => handleSelectOption(option)}
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
