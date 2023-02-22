import "./radios.scss";

export default function Radios({ options, handleRadioClick }) {
  return (
    <ul className="field">
      {options.map((option, i) => (
        <li className="select_img">
          <input
            type="radio"
            name="radio"
            id={option.name}
            value={option.value}
            key={i}
            onClick={() => handleRadioClick(option.name)}
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
  );
}
