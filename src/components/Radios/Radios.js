import "./radios.scss";

export default function Radios({ label, value, imageUrl, handleRadioClick }) {
  return (
    <>
      <div className="select_img">
        <input
          type="radio"
          name={value}
          // id={element.input.id}
          onClick={() => handleRadioClick(value)}
        />
        <div className="radio-img">
          <label htmlFor={value}>
            <img alt={label} src={imageUrl} />
            {label}
          </label>
        </div>
      </div>
    </>
  );
}
