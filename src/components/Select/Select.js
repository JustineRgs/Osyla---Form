import style from "./_select.module.scss";

export default function Select({ label, options, id, setFormValues }) {
  const handleSelectChange = (event) => {
    let selectVal = event.target.value;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [id]: selectVal,
      };
    });
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

      <select name={id} onChange={handleSelectChange}>
        {options.map((option, i) => {
          return (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
