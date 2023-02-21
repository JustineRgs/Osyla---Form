import "./radios.scss";

export default function Radios({
  i,
  label,
  value,
  id,
  imageUrl,
  handleRadioClick,
}) {
  return (
    <>
      <div className="select_img">
        <input
          type="radio"
          name="radio"
          // value={id}
          id={id}
          key={i}
          onClick={() => handleRadioClick(id)}
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
