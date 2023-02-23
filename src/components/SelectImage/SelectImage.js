import "./selectImage.scss";
import { useState } from "react";

export default function SelectImage({ options, handleRadioClick, label, id }) {
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
      <ul className="field" name={options.name}>
        {options.map((option, i) => (
          <li className="select_img" key={i}>
            <input
              type="radio"
              name={options.name}
              id={option.name}
              value={option.value}
              checked={option === selectedOption}
              onClick={() => handleOptionClick(option)}
            />
            <div className="radio-img">
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
