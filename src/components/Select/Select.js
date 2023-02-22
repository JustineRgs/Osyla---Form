import "./select.scss";

export default function Select({ label, options, id }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <ion-icon
          name="information-circle-sharp"
          alt="icon d'information"
        ></ion-icon>
      </label>
      <select className="select_list" id={id}>
        {options.map((option, i) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </>
  );
}
