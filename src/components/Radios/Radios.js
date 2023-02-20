import "./radios.scss";

export default function Radios({ label, value, imageUrl, handleRadioClick }) {
  return (
    <>
      <div className="select_img">
        <input
          type="radio"
          name="radio"
          id={value}
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
