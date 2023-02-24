import style from "./_selectImage.module.scss";

import { useState, useEffect } from "react";

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

  // Tableau qui stocke les options sélectionnées par id de groupe
  const [selectedOptionsById, setSelectedOptionsById] = useState({});

  useEffect(() => {
    // Mettre à jour le tableau selectedOptionsById avec la dernière option sélectionnée
    setSelectedOptionsById((prevSelectedOptionsById) => ({
      ...prevSelectedOptionsById,
      [id]: selectedOption,
    }));
  }, [id, selectedOption]);

  console.log(selectedOptionsById);
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
              checked={option === selectedOptionsById[id]}
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
